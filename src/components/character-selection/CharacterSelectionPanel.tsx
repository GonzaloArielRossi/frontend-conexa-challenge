import { Heading, Input, VStack } from '@chakra-ui/react';
import debounce from 'just-debounce-it';
import { useCallback, useState } from 'react';

import CharacterCards from '@/components/character-selection/CharacterCards';

export default function CharacterSelectionPanel({
  onSetEpisodes,
  title
}: {
  onSetEpisodes: (episodes: string[]) => void;
  title: string;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );

  const onSearch = useCallback(
    debounce((query: string) => setSearchTerm(query), 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  const handleSelectCharacter = (characterId: number, episodes: string[]) => {
    if (characterId === selectedCharacter) {
      setSelectedCharacter(null);
      return;
    }
    setSelectedCharacter(characterId);
    onSetEpisodes(episodes);
  };

  return (
    <VStack
      alignContent={'flex-start'}
      border={'1px solid'}
      direction={'column'}
      h={'50vh'}
      padding={4}
      rounded={'md'}
      spacing={6}
    >
      <Heading
        alignSelf={{ base: 'center', md: 'flex-start' }}
        as={'h2'}
        fontSize={'lg'}
      >
        {title}
      </Heading>
      <Input
        mr={'auto'}
        name="search"
        placeholder="Rick, Morty, Beth..."
        type="search"
        value={inputValue}
        w={{ base: '100%', md: '50%' }}
        onChange={handleInputChange}
      />
      <CharacterCards
        searchTerm={searchTerm}
        selectedCharacter={selectedCharacter}
        onSelectCharacter={handleSelectCharacter}
      />
    </VStack>
  );
}
