import {
  Badge,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  Tooltip
} from '@chakra-ui/react';
import { MdDateRange } from 'react-icons/md';
import { PiFilmSlateBold } from 'react-icons/pi';

import EpisodeRating from '@/components/episode-list/EpisodeRating';
import useEpisode from '@/components/episode-list/hooks/useEpisode';

export default function EpisodeItem({ episodeURL }: { episodeURL: string }) {
  const { episode, isError } = useEpisode(episodeURL);

  if (isError) {
    return <Text>{`Episode: ${episodeURL.split('/').pop()}`} | Not found</Text>;
  }

  if (episode) {
    const badges = [
      {
        id: 'airDate',
        backgroundColor: 'brandCyan',
        icon: MdDateRange,
        label: 'Air Date',
        value: episode?.air_date
      },
      {
        id: 'episode',
        backgroundColor: 'purple',
        icon: PiFilmSlateBold,
        label: 'Episode',
        value: episode.episode
      }
    ];
    return (
      <Stack
        as={'li'}
        borderColor={'white'}
        borderWidth={'2px'}
        direction={'column'}
        padding={2}
        rounded={'md'}
        shadow={'lg'}
        w={'300px'}
        whiteSpace={'nowrap'}
      >
        <Tooltip label={episode.name} openDelay={300}>
          <Heading
            as={'h3'}
            fontSize={'md'}
            overflow={'hidden'}
            textOverflow={'ellipsis'}
            whiteSpace={'nowrap'}
          >
            {episode.name}
          </Heading>
        </Tooltip>
        <Stack alignSelf={'flex-start'} bottom={6} direction="column">
          {badges.map((badge) => {
            return (
              <Badge
                key={badge.id}
                backgroundColor={`${badge.backgroundColor}.500`}
                color={'white'}
                size={'sm'}
                variant="solid"
                w={'fit-content'}
              >
                <Tooltip
                  hasArrow={true}
                  label={`${badge.label}: ${badge.value}`}
                  openDelay={300}
                >
                  <HStack gap={1}>
                    <Icon as={badge.icon} />
                    <Text>{badge.value}</Text>
                  </HStack>
                </Tooltip>
              </Badge>
            );
          })}
        </Stack>
        <EpisodeRating episode={episode} />
      </Stack>
    );
  }
}
