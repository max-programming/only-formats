import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
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
