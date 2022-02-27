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
            <Link href={path.id} key={path.id}>
              <a>
                <Center>
                  <Box
                    maxW='72'
                    transition='all 0.3s ease'
                    borderWidth='2px'
                    borderRadius='lg'
                    overflow='hidden'
                    _hover={{
                      borderColor: 'teal.100',
                      transform: 'translateY(-10px)',
                      bg: 'blackAlpha.300',
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={230}
                      width={282}
                      objectFit={'scale-down'}
                      mx='auto'
                      src={path.image}
                      alt=''
                    />
                    <Box p={6}>
                      <Heading
                        textAlign='center'
                        size='md'
                        dangerouslySetInnerHTML={{ __html: path.title }}
                      />
                    </Box>
                  </Box>
                </Center>
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Layout>
    </>
  );
};

export default Home;
