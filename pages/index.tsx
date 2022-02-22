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
            base: 'repeat(5, 1fr)',
            md: 'repeat(3, 1fr)',
            sm: 'repeat(1, 1fr)',
          })}
          gap={6}
        >
          {paths.map(path => (
            <Link key={path.id} href={path.id}>
              <a>
                <PathCard
                  title={path.title}
                  description={path.description}
                  image={path.image}
                />
              </a>
            </Link>
          ))}
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
