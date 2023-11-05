import { Heading, HStack, Icon, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import CharacterCardsContainer from '@/components/character-selection/CharacterCardsContainer';
import CharacterSearch from '@/components/character-selection/CharacterSearch';
import ScrollToSelectedCharacter from '@/components/character-selection/ScrollToSelectedCharacter';
import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';

export default function CharacterSelectionPanel({
  characterPanelId
}: {
  characterPanelId: number;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const selectedCharacters = useSelectedCharactersStore(
    (state) => state.selectedCharacters
  );

  const isPanelCharacterSelected =
    selectedCharacters[characterPanelId] !== undefined;

  return (
    <Stack
      alignContent={'flex-start'}
      border={'2px solid'}
      borderColor={isPanelCharacterSelected ? 'brandCyan.500' : 'white'}
      direction={'column'}
      h={{ base: '500px', md: '45vh' }}
      padding={4}
      rounded={'md'}
      spacing={6}
    >
      <HStack>
        <Heading
          alignSelf={{ base: 'center', md: 'flex-start' }}
          as={'h2'}
          fontSize={'lg'}
        >
          {`Select Character #${characterPanelId + 1}`}
        </Heading>
        {isPanelCharacterSelected && (
          <Icon as={AiOutlineCheckCircle} fill={'brandCyan.500'} />
        )}
      </HStack>
      <HStack>
        <CharacterSearch
          characterPanelId={characterPanelId}
          onSearchTermChange={(query: string) => setSearchTerm(query)}
        />
        <ScrollToSelectedCharacter characterPanelId={characterPanelId} />
      </HStack>
      <CharacterCardsContainer
        characterPanelId={characterPanelId}
        searchTerm={searchTerm}
      />
    </Stack>
  );
}
