import { useQuery } from '@tanstack/react-query';

import { Episode } from '@/types/types';

const fetchEpisode = async (episodeURL: string, signal?: AbortSignal) => {
  const response = await fetch(episodeURL, { signal });
  return response.json();
};

export default function useEpisode(episodeURL: string) {
  const episodeNumber = episodeURL.split('/').pop();
  const useEpisodeQuery = useQuery<Episode>({
    cacheTime: Infinity,
    queryFn: ({ signal }) => fetchEpisode(episodeURL, signal),
    queryKey: ['episodes', episodeNumber],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  return useEpisodeQuery;
}
