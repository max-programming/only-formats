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
        <SimpleGrid mt='16' columns={[1, 2, 3, 4]} spacing={5}>
          {paths.map(path => (
            <GridItem key={path.id}>
              <Link href={path.id}>
                <a>
                  <Center>
                    <Box
                      maxW='sm'
                      transition='all 0.3s ease'
                      borderWidth='2px'
                      borderRadius='lg'
                      overflow='hidden'
                      _hover={{
                        borderColor: 'teal.100',
                        transform: 'translateY(-10px)',
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
                        <Heading textAlign='center' size='md'>
                          {path.title}
                        </Heading>
                      </Box>
                    </Box>
                  </Center>
                </a>
              </Link>
            </GridItem>
          ))}
        </SimpleGrid>
      </Layout>
    </>
  );
};

export default Home;
