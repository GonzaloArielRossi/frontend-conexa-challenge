import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

import { useSelectedCharactersRefStore } from '@/store/useSelectedCharactersRefStore';
import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';
import { Character } from '@/types/types';

export default function useCharacterSelection() {
  const toast = useToast();

  const [selectedCharacters, setSelectedCharacters] =
    useSelectedCharactersStore((state) => [
      state.selectedCharacters,
      state.setSelectedCharacters
    ]);

  const setSelectedCharactersRef = useSelectedCharactersRefStore(
    (state) => state.setSelectedCharactersRef
  );

  const handleSelectCharacter = useCallback(
    (
      isCurrentCharacterSelected: boolean,
      character: Character,
      characterPanelId: number,
      characterRef: React.RefObject<HTMLDivElement>
    ) => {
      if (isCurrentCharacterSelected) {
        setSelectedCharacters(characterPanelId, undefined);
        return;
      }

      const isCurrentCharacterAlreadySelected = selectedCharacters.find(
        (selectedCharacter) => {
          return selectedCharacter?.id === character.id;
        }
      );
      if (isCurrentCharacterAlreadySelected) {
        toast({
          colorScheme: 'cyan',
          description: 'Please select a different character',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
          status: 'info',
          title: 'Character already selected',
          variant: 'solid'
        });
        return;
      }
      setSelectedCharacters(characterPanelId, character);
      setSelectedCharactersRef(characterPanelId, characterRef);
    },
    [selectedCharacters]
  );

  return { handleSelectCharacter, selectedCharacters };
}
