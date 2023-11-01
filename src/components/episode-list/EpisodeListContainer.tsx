import { SimpleGrid, VStack } from '@chakra-ui/react';

export default function EpisodeListContainer({
  areBothCharactersSelected,
  children,
  isFetchingEpisodes
}: {
  children: React.ReactNode;
  isFetchingEpisodes: boolean;
  areBothCharactersSelected: boolean;
}) {
  return (
    <VStack w={'100%'}>
      <SimpleGrid
        as={'section'}
        border={'1px solid white'}
        columns={
          isFetchingEpisodes || !areBothCharactersSelected
            ? 1
            : { base: 1, lg: areBothCharactersSelected ? 3 : 1 }
        }
        padding={4}
        rounded={'md'}
        spacing={6}
        w={'100%'}
      >
        {children}
      </SimpleGrid>
    </VStack>
  );
}
