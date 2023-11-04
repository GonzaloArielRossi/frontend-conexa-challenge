import { Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';

import CharacterCardsContainer from '@/components/character-selection/CharacterCardsContainer';
import CharacterSearch from '@/components/character-selection/CharacterSearch';

export default function CharacterSelectionPanel({
  characterPanelId
}: {
  characterPanelId: number;
}) {
  const [searchTerm, setSearchTerm] = useState('');

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
        {`Select Character #${characterPanelId + 1}`}
      </Heading>
      <CharacterSearch
        onSearchTermChange={(query: string) => setSearchTerm(query)}
      />
      <CharacterCardsContainer
        characterPanelId={characterPanelId}
        searchTerm={searchTerm}
      />
    </Stack>
  );
}
