import { useToast } from '@chakra-ui/react';

import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';
import { Character } from '@/types/api';

export default function useCharacterSelection(
  character: Character,
  characterPanelId: number
) {
  const toast = useToast();
  const [selectedCharacters, setSelectedCharacters] =
    useSelectedCharactersStore((state) => [
      state.selectedCharacters,
      state.setSelectedCharacters
    ]);

  const isCurrentCharacterSelected = Boolean(
    selectedCharacters[characterPanelId]?.id === character.id
  );

  function handleSelectCharacter() {
    if (isCurrentCharacterSelected) {
      setSelectedCharacters(characterPanelId, undefined);
      return;
    }
    if (selectedCharacters.find((c) => c?.id === character.id)) {
      toast({
        description: 'Please select a different character',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
        status: 'info',
        title: 'Character already selected'
      });
      return;
    }
    setSelectedCharacters(characterPanelId, character);
  }

  return { handleSelectCharacter, isCurrentCharacterSelected };
}
