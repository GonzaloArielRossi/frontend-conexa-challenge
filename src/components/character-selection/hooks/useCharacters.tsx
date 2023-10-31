import { useQuery } from '@tanstack/react-query';

import { API_ENDPOINTS } from '@/config/constants';

const fetchCharacters = async (searchTerm: string, pageParam: number = 1) => {
  let endpoint = `${API_ENDPOINTS.CHARACTERS}?page=${pageParam}`;
  if (searchTerm) {
    endpoint += `&name=${searchTerm}`;
  }
  const response = await fetch(endpoint);
  return response.json();
};

const useCharactersQuery = (searchTerm: string) => {
  return useQuery({
    queryFn: () => fetchCharacters(searchTerm),
    queryKey: ['characters', searchTerm],
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });
};

export default function useCharacters(searchTerm: string) {
  const { data, isError, isLoading } = useCharactersQuery(searchTerm);
  return {
    characters: data?.results,
    info: data?.info,
    isError,
    isLoading
  };
}
