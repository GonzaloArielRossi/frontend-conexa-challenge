import { Box, Flex, Heading, Image, Text, WrapItem } from '@chakra-ui/react';

import { Character } from '@/types/api';

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <WrapItem as={'li'} rounded={'md'} shadow={'md'} w={'150px'}>
      <Flex direction={'column'}>
        <Image
          alt={character.name}
          roundedTop={'md'}
          src={character.image}
          w={'150px'}
        />
        <Box p={4}>
          <Heading fontSize={'md'}>{character.name}</Heading>
          <Text fontSize={'sm'}>{character.gender}</Text>
          <Text fontSize={'sm'}>{character.species}</Text>
          <Text fontSize={'sm'}>{character.status}</Text>
        </Box>
      </Flex>
    </WrapItem>
  );
}
