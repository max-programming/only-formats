import React, { PropsWithChildren } from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import { Container } from '@chakra-ui/react';
import Nav from './Navbar';
import Footer from './Footer';

type Props = {
  title: string;
  description?: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, title, description }: PropsWithChildren<Props>) => (
  <div>
    <NextSeo
      title={title.replace('<br /> ', '')}
      description={description}
      openGraph={{
        title,
        description,
        type: 'website',
        locale: 'en_US',
        url: 'https://onlyformats.netlify.app',
        site_name: 'Only Formats',
        images: [
          {
            url: 'https://onlyformats.netlify.app/logo.png',
            width: 100,
            height: 100,
            alt: 'Og Image Alt',
          },
        ],
      }}
      twitter={{
        handle: '@MaxProgramming1',
        cardType: 'summary',
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ]}
    />
    <Nav />
    <Container maxW='full'>
      <motion.main
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ type: 'linear' }}
      >
        {children}
      </motion.main>
    </Container>
    {/* <Footer /> */}
  </div>
);

export default Layout;
