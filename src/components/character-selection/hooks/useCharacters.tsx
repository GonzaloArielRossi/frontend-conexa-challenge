import { useInfiniteQuery } from '@tanstack/react-query';

import { API_ENDPOINTS } from '@/config/constants';
import { CharactersResponse } from '@/types/types';

const fetchCharacters = async (
  searchTerm: string,
  pageParam: number = 1,
  signal?: AbortSignal
) => {
  let endpoint = `${API_ENDPOINTS.CHARACTERS}?page=${pageParam}`;
  if (searchTerm) {
    endpoint += `&name=${searchTerm}`;
  }
  const response = await fetch(endpoint, { signal });

  return await response.json();
};

export default function useCharacters(searchTerm: string) {
  const charactersQuery = useInfiniteQuery({
    cacheTime: Infinity,
    getNextPageParam: (lastPage: CharactersResponse, pages) => {
      if (lastPage?.info?.next) {
        return pages.length + 1;
      }

      return undefined;
    },
    queryFn: ({ pageParam = 1, signal }) =>
      fetchCharacters(searchTerm, pageParam, signal),
    queryKey: ['characters', searchTerm],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });
  return charactersQuery;
}
