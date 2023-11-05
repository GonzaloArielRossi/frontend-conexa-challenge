import { SimpleGrid, useColorModeValue, VStack } from '@chakra-ui/react';

export default function EpisodeListContainer({
  areBothCharactersSelected,
  children
}: {
  children: React.ReactNode;
  areBothCharactersSelected: boolean;
}) {
  const borderColor = useColorModeValue('gray.200', 'white');
  return (
    <VStack w={'100%'}>
      <SimpleGrid
        as={'section'}
        border={'2px solid'}
        borderColor={borderColor}
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
