import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
  WrapItem
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import useCharacterBadges from '@/components/character-selection/hooks/useCharacterBadges';
import { Character } from '@/types/types';

export default function CharacterCard({
  character,
  characterPanelId,
  isCurrentCharacterSelected,
  onSelectCharacter
}: {
  character: Character;
  characterPanelId: number;
  isCurrentCharacterSelected: boolean;
  onSelectCharacter: (
    isCurrentCharacterSelected: boolean,
    character: Character,
    characterPanelId: number,
    characterRef: React.RefObject<HTMLDivElement>
  ) => void;
}) {
  const [characterImageScale, setCharacterImageScale] = useState<number>(1.1);

  const characterBadges = useCharacterBadges(
    character.status,
    character.species,
    character.location.name
  );

  const handleMouseEnter = () => {
    setCharacterImageScale(1.2);
  };

  const handleMouseLeave = () => {
    setCharacterImageScale(1.1);
  };

  const { inView, ref } = useInView({
    threshold: 0
  });

  const characterRef = useRef<HTMLDivElement>(null);
  const borderColor = useColorModeValue('gray.200', 'white');
  const shadow = useColorModeValue('md', '');

  return (
    <WrapItem
      ref={ref}
      _hover={{
        cursor: 'pointer',
        shadow: 'md'
      }}
      as={'li'}
      borderColor={isCurrentCharacterSelected ? 'blue.500' : borderColor}
      borderWidth={'2px'}
      justifySelf={'flex-start'}
      overflow={'hidden'}
      position={'relative'}
      rounded={'md'}
      shadow={shadow}
      userSelect={'none'}
      w={'280px'}
      onClick={() => {
        onSelectCharacter(
          isCurrentCharacterSelected,
          character,
          characterPanelId,
          characterRef
        );
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isCurrentCharacterSelected && (
        <Box
          backgroundColor={'brandCyan.500'}
          h={'100%'}
          left={0}
          opacity={0.2}
          position={'absolute'}
          top={0}
          w={'100%'}
          zIndex={1}
        />
      )}
      <Flex
        ref={characterRef}
        direction={'row'}
        gap={3}
        justifyContent={'flex-start'}
      >
        <Image
          alt={`${character.name} avatar`}
          h={'100px'}
          loading={'lazy'}
          roundedLeft={'md'}
          src={character.image}
          transform={`scale(${characterImageScale})`}
          transition={'transform 0.3s ease-in-out'}
        />
        {inView && (
          <VStack
            alignContent={'flex-start'}
            justifyContent={'center'}
            mx={'auto'}
            w={'150px'}
            whiteSpace={'nowrap'}
          >
            <Tooltip hasArrow={true} label={character.name} openDelay={300}>
              <Heading
                alignSelf={'flex-start'}
                fontSize={'md'}
                overflow={'hidden'}
                textOverflow={'ellipsis'}
                w={'full'}
                whiteSpace={'nowrap'}
              >
                {character.name}
              </Heading>
            </Tooltip>
            <Stack
              alignSelf={'flex-start'}
              direction="column"
              gap={1}
              w={'150px'}
            >
              {characterBadges.map((characterBadge) => {
                return (
                  <Badge
                    key={characterBadge.id}
                    backgroundColor={`${characterBadge.backgroundColor}.500`}
                    color={'white'}
                    maxWidth={'fit-content'}
                    overflow={'hidden'}
                    size={'sm'}
                    variant="solid"
                    whiteSpace={'nowrap'}
                  >
                    <Tooltip
                      hasArrow={true}
                      label={`${characterBadge.label}: ${characterBadge.value}`}
                      openDelay={300}
                    >
                      <HStack overflow={'hidden'} whiteSpace={'nowrap'}>
                        <Icon as={characterBadge.icon} />

                        <Text
                          fontSize={'xs'}
                          overflow={'hidden'}
                          textOverflow={'ellipsis'}
                          w={'full'}
                          whiteSpace={'nowrap'}
                        >
                          {characterBadge.value}
                        </Text>
                      </HStack>
                    </Tooltip>
                  </Badge>
                );
              })}
            </Stack>
          </VStack>
        )}
      </Flex>
    </WrapItem>
  );
}
