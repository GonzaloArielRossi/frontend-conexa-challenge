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
  VStack,
  WrapItem
} from '@chakra-ui/react';
import { useState } from 'react';

import { elipsis } from '@/helpers/elipsis';
import { Character } from '@/types/types';

import useCharacterBadges from './hooks/useCharacterBadges';

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
    characterPanelId: number
  ) => void;
}) {
  const [characterImageScale, setCharacterImageScale] = useState<number>(1);

  const characterBadges = useCharacterBadges(
    character.status,
    character.species
  );

  const handleMouseEnter = () => {
    setCharacterImageScale(1.1);
  };

  const handleMouseLeave = () => {
    setCharacterImageScale(1);
  };

  return (
    <WrapItem
      _hover={{
        cursor: 'pointer',
        shadow: 'md'
      }}
      as={'li'}
      borderColor={isCurrentCharacterSelected ? 'blue.500' : 'white'}
      borderWidth={'2px'}
      justifySelf={'flex-start'}
      overflow={'hidden'}
      position={'relative'}
      rounded={'md'}
      shadow={'lg'}
      userSelect={'none'}
      w={'280px'}
      onClick={() => {
        onSelectCharacter(
          isCurrentCharacterSelected,
          character,
          characterPanelId
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
      <Flex direction={'row'} gap={4} justifyContent={'flex-start'}>
        <Image
          alt={`${character.name} avatar`}
          h={'100px'}
          loading={'lazy'}
          roundedLeft={'md'}
          src={character.image}
          transform={`scale(${characterImageScale})`}
          transition={'transform 0.3s ease-in-out'}
        />
        <VStack alignContent={'flex-start'} justifyContent={'space-around'}>
          <Tooltip hasArrow={true} label={character.name} openDelay={300}>
            <Heading alignSelf={'flex-start'} fontSize={'md'}>
              {elipsis(character.name, 20)}
            </Heading>
          </Tooltip>
          <Stack alignSelf={'flex-start'} bottom={6} direction="column">
            {characterBadges.map((characterBadge) => {
              return (
                <Badge
                  key={characterBadge.id}
                  backgroundColor={`${characterBadge.backgroundColor}.500`}
                  color={'white'}
                  size={'sm'}
                  variant="solid"
                >
                  <Tooltip
                    hasArrow={true}
                    label={`${characterBadge.label}: ${characterBadge.value}`}
                    openDelay={300}
                  >
                    <HStack gap={1}>
                      <Icon as={characterBadge.icon} />
                      <Text>{elipsis(characterBadge.value, 15)}</Text>
                    </HStack>
                  </Tooltip>
                </Badge>
              );
            })}
          </Stack>
        </VStack>
      </Flex>
    </WrapItem>
  );
}
