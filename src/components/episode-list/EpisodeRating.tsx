import { Box, HStack, Text } from '@chakra-ui/react';
import { PiShootingStarFill } from 'react-icons/pi';
import { TbStar, TbStarFilled, TbStarHalfFilled } from 'react-icons/tb';

import useEpisodeRating from '@/components/episode-list/hooks/useEpisodeRating';
import { Episode } from '@/types/types';

export default function EpisodeRating({ episode }: { episode: Episode }) {
  const seasonId = episode.episode.split('E')[0].replace('S', '');
  const episodeId = episode.episode.split('E')[1];
  const { episodeRating, isError, isLoading } = useEpisodeRating(
    seasonId,
    episodeId
  );

  if (isError) {
    return null;
  }

  if (isLoading) {
    return (
      <HStack>
        <PiShootingStarFill />
      </HStack>
    );
  }
  if (episodeRating) {
    // Get rating out of 5 rounded to a single decimal place
    const rating = Math.round((episodeRating.vote_average / 2) * 10) / 10;

    return (
      <HStack>
        {[...Array(5)].map((_, index) => (
          //eslint-disable-next-line react/no-array-index-key
          <Box key={index} as="span">
            {rating >= index + 1 ? (
              <TbStarFilled />
            ) : rating >= index + 0.5 ? (
              <TbStarHalfFilled />
            ) : (
              <TbStar />
            )}
          </Box>
        ))}
        <Text fontSize={'xs'}>{`(${rating} stars)`}</Text>
      </HStack>
    );
  }
}
