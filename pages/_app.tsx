import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import NextNProgress from 'nextjs-progressbar';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { useEffect } from 'react';
import importLangs from 'utils/importLangs.js';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(importLangs, []);
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress options={{ showSpinner: false }} />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics
            measurementId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
          />
        )}

        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
