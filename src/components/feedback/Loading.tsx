import { Center, Spinner } from '@chakra-ui/react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export default function Loading({ size = 'xl' }: { size?: Size }) {
  return (
    <Center h={'100%'} w={'100%'}>
      <Spinner
        color="brandGreen.500"
        emptyColor="brandCyan.500"
        my={4}
        size={size}
        speed="0.65s"
        thickness="4px"
      />
    </Center>
  );
}
