import { useQuery } from '@tanstack/react-query';

import { API_ENDPOINTS } from '@/config/constants';

const fetchCharacters = async () => {
  const response = await fetch(API_ENDPOINTS.CHARACTERS);
  return response.json();
};

const useCharactersQuery = () => {
  return useQuery({
    queryFn: fetchCharacters,
    queryKey: ['characters']
  });
};

const useCharacters = () => {
  const { data, isError, isLoading } = useCharactersQuery();
  return {
    characters: data?.results,
    info: data?.info,
    isError,
    isLoading
  };
};

export default useCharacters;
