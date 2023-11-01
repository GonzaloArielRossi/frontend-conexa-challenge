import { Wrap } from '@chakra-ui/react';

import CharacterCard from '@/components/character-selection/CharacterCard';
import useCharacters from '@/components/character-selection/hooks/useCharacters';
import ApiErrorMessage from '@/components/feedback/ApiErrorMessage';
import Loading from '@/components/feedback/Loading';
import { Character } from '@/types/api';

export default function CharacterCards({
  characterPanelId,
  searchTerm
}: {
  searchTerm: string;
  characterPanelId: number;
}) {
  const { characters, isError, isLoading } = useCharacters(searchTerm);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ApiErrorMessage />;
  }

  if (characters && Array.isArray(characters) && characters.length > 0) {
    return (
      <Wrap
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
        {characters.map((character: Character) => {
          return (
            <CharacterCard
              key={character.id}
              character={character}
              characterPanelId={characterPanelId}
            />
          );
        })}
      </Wrap>
    );
  }
}
