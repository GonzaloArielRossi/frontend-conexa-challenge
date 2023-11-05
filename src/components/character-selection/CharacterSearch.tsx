import { Box, Input } from '@chakra-ui/react';
import debounce from 'just-debounce-it';
import { ChangeEvent, useCallback, useState } from 'react';

import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';

export default function CharacterSearch({
  characterPanelId,
  onSearchTermChange
}: {
  onSearchTermChange: (searchTerm: string) => void;
  characterPanelId: number;
}) {
  const setSelectedCharacters = useSelectedCharactersStore(
    (state) => state.setSelectedCharacters
  );

  const onSearch = useCallback(
    debounce((query: string) => {
      setSelectedCharacters(characterPanelId, undefined);
      onSearchTermChange(query);
    }, 300),
    []
  );
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onSearch(value);
  };
  return (
    <Box h={'40px'} w={{ base: '100%', md: '50%' }}>
      <Input
        mr={'auto'}
        name="search"
        placeholder="Rick, Morty, Beth..."
        type="search"
        value={inputValue}
        onChange={handleInputChange}
      />
    </Box>
  );
}
