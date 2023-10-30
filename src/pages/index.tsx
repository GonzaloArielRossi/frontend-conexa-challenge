import {
  Box,
  Button,
  Container,
  SimpleGrid,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import Head from 'next/head';

import CharacterCards from '@/components/character-cards/CharacterCards';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Conexa | Dev challenge</title>
        <meta content="Interview challenge for Conexa" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Container as={'main'} maxW={'1400px'} mx={'auto'}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        <VStack w={'100%'}>
          <SimpleGrid as={'section'} columns={2} spacing={4} w={'100%'}>
            <CharacterCards />
            <CharacterCards />
          </SimpleGrid>
          <SimpleGrid as={'section'} columns={3} spacing={10} w={'100%'}>
            <Box as={'article'}>episodes character 1</Box>
            <Box as={'article'}>episodes shared</Box>
            <Box as={'article'}>episodes character 2</Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
}
