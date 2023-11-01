import { Center, HStack, Icon, Text } from '@chakra-ui/react';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function ApiErrorMessage() {
  return (
    <Center h={'100%'} w={'100%'}>
      <HStack gap={4}>
        <Icon as={FaExclamationTriangle} color="red.500" h={6} w={6} />
        <Text fontSize={'xl'} fontWeight={'semibold'} lineHeight={'short'}>
          Oops! Something went wrong. Please try again later.
        </Text>
      </HStack>
    </Center>
  );
}
