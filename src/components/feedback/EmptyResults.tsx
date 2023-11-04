import { Center, HStack, Image, Text } from '@chakra-ui/react';

export default function EmptyResults({ message }: { message: string }) {
  return (
    <Center h={'100%'} w={'100%'}>
      <HStack justifySelf={'center'}>
        <Image alt="portal" h={'40px'} src="/images/portal.png" />
        <Text>{message}</Text>
      </HStack>
    </Center>
  );
}
