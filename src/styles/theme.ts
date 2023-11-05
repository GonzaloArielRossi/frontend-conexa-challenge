import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const customTheme = extendTheme({
  colors: {
    brandBlack: {
      800: '#1d202f'
    },
    brandCyan: {
      500: '#36bbfe'
    },
    brandGreen: {
      50: '#E8FDFB',
      100: '#BDF9F4',
      200: '#93F6EC',
      300: '#69F2E5',
      400: '#3FEEDD',
      500: '#15EAD6',
      600: '#10BCAB',
      700: '#0C8D80',
      800: '#085E56',
      900: '#042F2B'
    },
    cyan: {
      50: '#E6F6FF',
      100: '#B8E7FF',
      200: '#8AD8FE',
      300: '#5DC8FE',
      400: '#2FB9FE',
      500: '#01A9FE',
      600: '#0187CB',
      700: '#016598',
      800: '#014465',
      900: '#002233'
    },
    gray: {
      50: '#EFF0F5',
      100: '#D3D6E4',
      200: '#B6BBD2',
      300: '#9AA1C1',
      400: '#7E86AF',
      500: '#616B9E',
      600: '#4E567E',
      700: '#3A405F',
      800: '#1E212E',
      900: '#131520'
    }
  },
  config,
  fonts: {
    body: 'var(--font-dm-sans)',
    heading: 'var(--font-century-gothic-bold)'
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: props.colorMode === 'dark' ? 'white' : '#2C3043'
      }
    })
  }
});

export default customTheme;
