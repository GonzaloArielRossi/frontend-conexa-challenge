import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';
import { Character } from '@/types/types';

export default function useCharacterSelection() {
  const toast = useToast();

  const [selectedCharacters, setSelectedCharacters] =
    useSelectedCharactersStore((state) => [
      state.selectedCharacters,
      state.setSelectedCharacters
    ]);

  const handleSelectCharacter = useCallback(
    (
      isCurrentCharacterSelected: boolean,
      character: Character,
      characterPanelId: number
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
          containerStyle: {
            marginRight: '50px'
          },
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
    },
    [selectedCharacters]
  );

  return { handleSelectCharacter, selectedCharacters };
}
