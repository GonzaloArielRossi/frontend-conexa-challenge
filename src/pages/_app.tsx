import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';

import customTheme from '@/styles/theme';

const centuryGothicBold = localFont({
  src: '../../public/fonts/century-gothic-bold.otf'
});

const dmSans = DM_Sans({
  subsets: ['latin-ext']
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>
        {`
          :root {
            --font-dm-sans: ${dmSans.style.fontFamily};
            --font-century-gothic-bold: ${centuryGothicBold.style.fontFamily};
          }
        `}
      </style>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ChakraProvider resetCSS theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}
