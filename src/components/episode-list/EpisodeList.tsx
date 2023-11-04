import { Heading, Stack } from '@chakra-ui/react';

import EpisodeItem from '@/components/episode-list/EpisodeItem';
import EmptyResults from '@/components/feedback/EmptyResults';

export default function EpisodeList({
  episodes,
  title
}: {
  episodes: string[];
  title: string;
}) {
  if (!episodes || !Array.isArray(episodes) || episodes.length === 0) {
    return <EmptyResults message={`Oops! No shared episodes 🥲`} />;
  }

  if (episodes && Array.isArray(episodes) && episodes.length > 0) {
    return (
      <Stack
        direction={'column'}
        h={{ base: '500px', md: '35vh' }}
        justifySelf={'center'}
      >
        <Heading as={'h2'} fontSize={'lg'} padding={4}>
          {title}
        </Heading>
        <Stack
          as={'ul'}
          direction={'column'}
          maxH={{ base: '500px', md: '30vh' }}
          overflowY={'auto'}
          px={4}
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
        >
          {episodes?.map((episodeURL: string) => {
            return <EpisodeItem key={episodeURL} episodeURL={episodeURL} />;
          })}
        </Stack>
      </Stack>
    );
  }
}
