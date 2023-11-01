import { Center, Heading } from '@chakra-ui/react';
import { useIsFetching } from '@tanstack/react-query';

import EpisodeList from '@/components/episode-list/EpisodeList';
import EpisodeListContainer from '@/components/episode-list/EpisodeListContainer';
import getSharedEpisodes from '@/components/episode-list/helpers/getSharedEpisodes';
import Loading from '@/components/feedback/Loading';
import { useSelectedCharactersStore } from '@/store/useSelectedCharactersStore';

export default function Episodes() {
  const selectedCharacters = useSelectedCharactersStore(
    (state) => state.selectedCharacters
  );

  const leftEpisodes = selectedCharacters[0]?.episode || [];
  const rightEpisodes = selectedCharacters[1]?.episode || [];

  const sharedEpisodes: string[] = getSharedEpisodes(
    leftEpisodes,
    rightEpisodes
  );

  const areBothCharactersSelected =
    leftEpisodes.length > 0 && rightEpisodes.length > 0;

  const isFetchingEpisodes = !!useIsFetching({ queryKey: ['episodes'] });

  if (isFetchingEpisodes) {
    return (
      <EpisodeListContainer
        {...{ areBothCharactersSelected, isFetchingEpisodes }}
      >
        <Center h={{ base: '500px', md: '30vh' }} w={'100%'}>
          <Loading />
        </Center>
      </EpisodeListContainer>
    );
  }

  if (!areBothCharactersSelected) {
    return (
      <EpisodeListContainer
        {...{ areBothCharactersSelected, isFetchingEpisodes }}
      >
        <Center h={{ base: '500px', md: '30vh' }} w={'100%'}>
          <Heading justifySelf={'center'} textAlign={'center'}>
            Select both characters to see their episodes...
          </Heading>
        </Center>
      </EpisodeListContainer>
    );
  }

  return (
    <EpisodeListContainer
      {...{ areBothCharactersSelected, isFetchingEpisodes }}
    >
      <EpisodeList
        episodes={leftEpisodes}
        title={`${selectedCharacters[0]?.name}'s Episodes`}
      />
      <EpisodeList episodes={sharedEpisodes} title={`Shared Episodes`} />
      <EpisodeList
        episodes={rightEpisodes}
        title={`${selectedCharacters[1]?.name}'s Episodes`}
      />
    </EpisodeListContainer>
  );
}
