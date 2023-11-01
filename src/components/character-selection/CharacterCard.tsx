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

import useCharacterSelection from '@/components/character-selection/hooks/useCharacterSelection';
import { elipsis } from '@/helpers/elipsis';
import { Character } from '@/types/api';

import useCharacterBadges from './hooks/useCharacterBadges';

export default function CharacterCard({
  character,
  characterPanelId
}: {
  character: Character;
  characterPanelId: number;
}) {
  const [characterImageScale, setCharacterImageScale] = useState<number>(1);

  const { handleSelectCharacter, isCurrentCharacterSelected } =
    useCharacterSelection(character, characterPanelId);

  const badges = useCharacterBadges(character.status, character.species);

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
      w={'300px'}
      onClick={() => handleSelectCharacter()}
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
            {badges.map((badge) => {
              return (
                <Badge
                  key={badge.id}
                  backgroundColor={`${badge.backgroundColor}.500`}
                  color={'white'}
                  size={'sm'}
                  variant="solid"
                >
                  <Tooltip
                    hasArrow={true}
                    label={`${badge.label}: ${badge.value}`}
                    openDelay={300}
                  >
                    <HStack gap={1}>
                      <Icon as={badge.icon} />
                      <Text>{elipsis(badge.value, 17)}</Text>
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
