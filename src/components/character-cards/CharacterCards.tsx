import { Wrap } from '@chakra-ui/react';

import CharacterCard from '@/components/character-cards/CharacterCard';
import useCharacters from '@/components/character-cards/hooks/useCharacters';
import { Character } from '@/types/api';

export default function CharacterCards() {
  const { characters, isError, isLoading } = useCharacters();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }
  return (
    <Wrap as={'ul'} shadow={'md'}>
      {characters.map((character: Character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </Wrap>
  );
}
