import { SimpleGrid } from '@chakra-ui/react';

import CharacterSelectionPanel from '@/components/character-selection/CharacterSelectionPanel';
import { CHARACTER_PANELS } from '@/config/constants';

export default function CharacterSelection() {
  return (
    <SimpleGrid
      as={'section'}
      columns={{ base: 1, md: 2 }}
      justifyContent={'center'}
      spacing={4}
      w={'100%'}
    >
      {CHARACTER_PANELS.map((characterPanel, idx) => {
        return (
          <CharacterSelectionPanel
            key={characterPanel}
            characterPanelId={idx}
          />
        );
      })}
    </SimpleGrid>
  );
}
