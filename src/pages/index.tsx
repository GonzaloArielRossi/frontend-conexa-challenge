import { Container } from '@chakra-ui/react';
import Head from 'next/head';

import Navbar from '@/components/navbar/Navbar';
import RickAndMortyEpisodePicker from '@/components/rick-and-morty-episode-picker/RickAndMortyEpisodePicker';

export default function Home() {
  return (
    <>
      <Head>
        <title>Conexa | Dev challenge</title>
        <meta content="Interview challenge for Conexa" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Container
        as={'main'}
        maxW={'1400px'}
        mx={'auto'}
        sx={{
          scrollbarGutter: 'stable'
        }}
      >
        <Navbar />
        <RickAndMortyEpisodePicker />
      </Container>
    </>
  );
}
