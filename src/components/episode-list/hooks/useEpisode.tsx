import { useQuery } from '@tanstack/react-query';

import { Episode } from '@/types/api';

const fetchEpisode = async (episodeURL: string) => {
  const response = await fetch(episodeURL);
  return response.json();
};

const useEpisodeQuery = (episodeURL: string) => {
  const episodeNumber = episodeURL.split('/').pop();
  return useQuery({
    cacheTime: Infinity,
    queryFn: () => fetchEpisode(episodeURL),
    queryKey: ['episodes', episodeNumber],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });
};

export default function useEpisode(episodeURL: string) {
  const { data, isError, isLoading } = useEpisodeQuery(episodeURL);
  return {
    episode: data as Episode | null,
    isError,
    isLoading
  };
}
