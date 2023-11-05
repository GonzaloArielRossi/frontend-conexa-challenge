import { Center, Heading } from '@chakra-ui/react';
import { useMemo } from 'react';

import EpisodeList from '@/components/episode-list/EpisodeList';
import EpisodeListContainer from '@/components/episode-list/EpisodeListContainer';
import getSharedEpisodes from '@/components/episode-list/helpers/getSharedEpisodes';
import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';

export default function Episodes() {
  const selectedCharacters = useSelectedCharactersStore(
    (state) => state.selectedCharacters
  );

  const leftEpisodes = selectedCharacters[0]?.episode || [];
  const rightEpisodes = selectedCharacters[1]?.episode || [];

  const sharedEpisodes: string[] = useMemo(() => {
    return getSharedEpisodes(leftEpisodes, rightEpisodes);
  }, [leftEpisodes, rightEpisodes]);

  const areBothCharactersSelected =
    leftEpisodes.length > 0 && rightEpisodes.length > 0;

  if (!areBothCharactersSelected) {
    return (
      <EpisodeListContainer
        areBothCharactersSelected={areBothCharactersSelected}
      >
        <Center h={{ base: '500px', md: '35vh' }} w={'100%'}>
          <Heading justifySelf={'center'} textAlign={'center'}>
            Select both characters to see their episodes...
          </Heading>
        </Center>
      </EpisodeListContainer>
    );
  }

  return (
    <EpisodeListContainer areBothCharactersSelected={areBothCharactersSelected}>
      <EpisodeList
        episodes={leftEpisodes}
        title={`${selectedCharacters[0]?.name}'s Episodes`}
      />
      <EpisodeList
        episodes={sharedEpisodes}
        title={`Shared Episodes ({{sharedEpisodesCount}})`}
      />
      <EpisodeList
        episodes={rightEpisodes}
        title={`${selectedCharacters[1]?.name}'s Episodes`}
      />
    </EpisodeListContainer>
  );
}
