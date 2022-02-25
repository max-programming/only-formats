import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import NextNProgress from 'nextjs-progressbar';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { useEffect } from 'react';
import Prism from 'prism-react-renderer/prism';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    (typeof global !== 'undefined' ? global : window).Prism = Prism;
    import('prismjs/components/prism-php');
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress options={{ showSpinner: false }} />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
