import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import paths from '@/paths.json';
import {
  Box,
  Center,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';
import PathCard from '@/components/PathCard';

const Home: NextPage = () => {
  return (
    <>
      <Layout title='OnlyFormats'>
        <SimpleGrid
          mt='16'
          columns={[1, 2, 3, 4]}
          spacing={3}
          placeItems='center'
          h='75vh'
        >
          {paths.map(path => (
            <PathCard
              image={path.image}
              id={path.id}
              title={path.title}
              key={path.id}
            />
          ))}
        </SimpleGrid>
      </Layout>
    </>
  );
};

export default Home;
