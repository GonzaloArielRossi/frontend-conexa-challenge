import { SimpleGrid, VStack } from '@chakra-ui/react';

export default function EpisodeListContainer({
  areBothCharactersSelected,
  children
}: {
  children: React.ReactNode;
  areBothCharactersSelected: boolean;
}) {
  return (
    <VStack w={'100%'}>
      <SimpleGrid
        as={'section'}
        border={'1px solid white'}
        columns={
          areBothCharactersSelected
            ? { base: 1, lg: areBothCharactersSelected ? 3 : 1 }
            : 1
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
