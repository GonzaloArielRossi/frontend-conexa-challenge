import {
  Box,
  Center,
  IconButton,
  Image,
  Tooltip,
  useColorMode
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center as={'nav'} position={'relative'} py={6}>
      <Image alt={'Rick and Morty logo'} h={'60px'} src={'/images/logo.png'} />
      <Box
        position={'absolute'}
        right={0}
        top={'50%'}
        transform={'translateY(-50%)'}
      >
        <Tooltip label={'Toggle dark mode'}>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            ml={'auto'}
            onClick={toggleColorMode}
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </IconButton>
        </Tooltip>
      </Box>
    </Center>
  );
}
