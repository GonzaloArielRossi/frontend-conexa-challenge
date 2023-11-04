import { Container, Stack } from '@chakra-ui/react';
import Head from 'next/head';

import CharacterSelection from '@/components/character-selection/CharacterSelection';
import Episodes from '@/components/episode-list/Episodes';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Conexa | Dev challenge</title>
        <meta content="Interview challenge for Conexa" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Container as={'main'} maxW={'1400px'} mx={'auto'}>
        <Navbar />
        <Stack direction={'column'}>
          <CharacterSelection />
          <Episodes />
        </Stack>
      </Container>
    </>
  );
}
