import { Wrap } from '@chakra-ui/react';
import { useRef } from 'react';

import CharacterCards from '@/components/character-selection/CharacterCards';

export default function CharacterCardsContainer({
  characterPanelId,
  searchTerm
}: {
  characterPanelId: number;
  searchTerm: string;
}) {
  const containerRef = useRef<HTMLUListElement>(null);
  return (
    <Wrap
      ref={containerRef}
      as={'ul'}
      h={'100%'}
      justify={{ base: 'center', md: 'flex-start' }}
      overflowY={'auto'}
      spacing={4}
      sx={{
        '&::-webkit-scrollbar': {
          width: '0.4em'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0,0,0,.1)',
          outline: '1px solid slategrey'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
          webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        scrollbarGutter: 'stable'
      }}
      w={'100%'}
    >
      <CharacterCards
        characterPanelId={characterPanelId}
        containerRef={containerRef}
        searchTerm={searchTerm}
      />
    </Wrap>
  );
}
