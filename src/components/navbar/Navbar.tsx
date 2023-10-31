import { Center, Image } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Center as={'nav'} pb={16} pt={8}>
      <Image alt={'Rick and Morty logo'} h={'60px'} src={'/images/logo.png'} />
    </Center>
  );
}
