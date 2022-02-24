import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import paths from '@/paths.json';
import PathCard from '@/components/PathCard';
import { Grid, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Layout title='OnlyFormats'>
        <Grid
          mt='16'
          templateColumns={useBreakpointValue({
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            '2xl': 'repeat(4, 1fr)',
          })}
          gap={10}
          placeItems='center'
        >
          {paths.map(path => (
            <Link key={path.id} href={path.id}>
              <a>
                <PathCard title={path.title} image={path.image} />
              </a>
            </Link>
          ))}
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
