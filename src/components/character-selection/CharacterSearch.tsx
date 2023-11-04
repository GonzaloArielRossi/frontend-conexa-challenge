import { Input } from '@chakra-ui/react';
import debounce from 'just-debounce-it';
import { ChangeEvent, useCallback, useState } from 'react';

export default function CharacterSearch({
  onSearchTermChange
}: {
  onSearchTermChange: (searchTerm: string) => void;
}) {
  const onSearch = useCallback(
    debounce((query: string) => onSearchTermChange(query), 300),
    []
  );
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onSearch(value);
  };
  return (
    <>
      <Input
        h={'40px'}
        mr={'auto'}
        name="search"
        placeholder="Rick, Morty, Beth..."
        type="search"
        value={inputValue}
        w={{ base: '100%', md: '50%' }}
        onChange={handleInputChange}
      />
    </>
  );
}
