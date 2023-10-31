import { SimpleGrid, VStack } from '@chakra-ui/react';
import { useState } from 'react';

import CharacterSelectionPanel from '@/components/character-selection/CharacterSelectionPanel';
import EpisodeList from '@/components/episode-list/EpisodeList';
import getSharedEpisodes from '@/helpers/getSharedEpisodes';

export default function RickAndMortyEpisodePicker() {
  const [leftEpisodes, setLeftEpisodes] = useState<string[]>([]);
  const [rightEpisodes, setRightEpisodes] = useState<string[]>([]);

  const sharedEpisodes: string[] = getSharedEpisodes(
    leftEpisodes,
    rightEpisodes
  );

  return (
    <>
      <SimpleGrid
        as={'section'}
        columns={{ base: 1, md: 2 }}
        h={'40%vh'}
        justifyContent={'center'}
        spacing={4}
        w={'100%'}
      >
        <CharacterSelectionPanel
          title={'Select Character #1'}
          onSetEpisodes={setLeftEpisodes}
        />

        <CharacterSelectionPanel
          title={'Select Character #2'}
          onSetEpisodes={setRightEpisodes}
        />
      </SimpleGrid>
      {/* <VStack h={'40vh'} w={'100%'}>
        <SimpleGrid as={'section'} columns={3} spacing={4} w={'100%'}>
          <EpisodeList episodes={leftEpisodes} />
          <EpisodeList episodes={sharedEpisodes} />
          <EpisodeList episodes={rightEpisodes} />
        </SimpleGrid>
      </VStack> */}
    </>
  );
}
