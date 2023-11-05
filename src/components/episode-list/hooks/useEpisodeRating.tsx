import { useQuery } from '@tanstack/react-query';

import { API_ENDPOINTS } from '@/config/constants';
import { Rating } from '@/types/types';

const fetchEpisodeRating = async (endpoint: string, signal?: AbortSignal) => {
  const response = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    },
    signal
  });
  return response.json();
};

export default function useEpisodeRating(seasonId: string, episodeId: string) {
  const endpoint = API_ENDPOINTS.EPISODE_RATING.replace(
    '[seasonId]',
    seasonId
  ).replace('[episodeId]', episodeId);
  const episodeRatingQuery = useQuery<Rating>({
    cacheTime: Infinity,
    queryFn: ({ signal }) => fetchEpisodeRating(endpoint, signal),
    queryKey: ['episodes', 'ratings', { seasonId }, { episodeId }],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });
  return episodeRatingQuery;
}
