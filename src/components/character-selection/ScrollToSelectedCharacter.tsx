import { Box, IconButton, Tooltip } from '@chakra-ui/react';
import { AiOutlineAim } from 'react-icons/ai';

import { useSelectedCharactersRefStore } from '@/store/useSelectedCharactersRefStore';
import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';
export default function ScrollToSelectedCharacter({
  characterPanelId
}: {
  characterPanelId: number;
}) {
  const selectedCharactersRef = useSelectedCharactersRefStore(
    (state) => state.selectedCharactersRef
  );

  const selectedCharacters = useSelectedCharactersStore(
    (state) => state.selectedCharacters
  );

  const handleScrollToSelectedCharacter = () => {
    const selectedCharacterRef = selectedCharactersRef[characterPanelId];
    if (selectedCharacterRef?.current) {
      selectedCharacterRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
  };

  const isButtonEnabled = selectedCharacters[characterPanelId] !== undefined;

  return (
    <Box>
      <Tooltip label={'Scroll to selected character'}>
        <IconButton
          aria-label="scroll to selected character"
          colorScheme={'blue'}
          icon={<AiOutlineAim />}
          isDisabled={!isButtonEnabled}
          size={'sm'}
          onClick={handleScrollToSelectedCharacter}
        >
          Scroll To Selected
        </IconButton>
      </Tooltip>
    </Box>
  );
}
