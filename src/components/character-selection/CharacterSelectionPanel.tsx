import { Heading, Input, Stack } from '@chakra-ui/react';
import debounce from 'just-debounce-it';
import { useCallback, useState } from 'react';

import CharacterCards from '@/components/character-selection/CharacterCards';

export default function CharacterSelectionPanel({
  characterPanelId
}: {
  characterPanelId: number;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');

  const onSearch = useCallback(
    debounce((query: string) => setSearchTerm(query), 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Stack
      alignContent={'flex-start'}
      border={'1px solid'}
      direction={'column'}
      h={{ base: '500px', md: '45vh' }}
      padding={4}
      rounded={'md'}
      spacing={6}
    >
      <Heading
        alignSelf={{ base: 'center', md: 'flex-start' }}
        as={'h2'}
        fontSize={'lg'}
      >
        {`Select Character #${characterPanelId}`}
      </Heading>
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
      <CharacterCards
        characterPanelId={characterPanelId}
        searchTerm={searchTerm}
      />
    </Stack>
  );
}
