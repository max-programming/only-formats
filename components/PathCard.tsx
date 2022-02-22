import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

interface Props {
  image: string;
  title: string;
  description: string;
}

export default function PathCard({ title, description, image }: Props) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'xl'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        transition='all 0.3s ease'
        cursor={'pointer'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'fill'}
            src={image}
            alt=''
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading
            textAlign='center'
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={500}
          >
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text textAlign='center' fontWeight={800} fontSize={'xl'}>
              {description}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
