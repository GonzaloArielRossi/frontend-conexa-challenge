import { Box, Input, Tooltip } from '@chakra-ui/react';
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

  const [isSearchIsTooShort, setIsSearchIsTooShort] = useState(false);

  const onSearch = useCallback(
    debounce((query: string) => {
      if (!query) {
        setSelectedCharacters(characterPanelId, undefined);
        onSearchTermChange(query);
        setIsSearchIsTooShort(false);
        return;
      }
      if (query.length < 3) {
        setSelectedCharacters(characterPanelId, undefined);
        setIsSearchIsTooShort(true);
        return;
      }
      setIsSearchIsTooShort(false);
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
      <Tooltip
        hasArrow
        bg={'red.500'}
        color={'white'}
        isOpen={isSearchIsTooShort}
        label={'Please enter at least 3 letters'}
        placement={'top'}
      >
        <Input
          mr={'auto'}
          name="search"
          placeholder="Rick, Morty, Beth..."
          type="search"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Tooltip>
    </Box>
  );
}
