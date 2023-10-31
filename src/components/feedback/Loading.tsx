import { Center, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center h={'100%'} w={'100%'}>
      <Spinner
        color="green.500"
        emptyColor="brandCyan.500"
        size="xl"
        speed="0.65s"
        thickness="4px"
      />
    </Center>
  );
}
