import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
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
      <Flex
        direction='column'
        justify='space-between'
        role={'group'}
        p={10}
        maxW={'330px'}
        w={'xl'}
        bg={useColorModeValue('whiteAlpha.100', 'gray.800')}
        boxShadow={useColorModeValue('2xl', 'dark-lg')}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        transition='all 0.3s ease'
        cursor={'pointer'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
          bg: useColorModeValue('whiteAlpha.700', 'gray.700'),
        }}
      >
        <Box rounded={'lg'} mt={-12} pos={'relative'} height={'230px'}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'scale-down'}
            src={image}
            alt=''
          />
        </Box>
        <Stack align={'center'} flex={2}>
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
      </Flex>
    </Center>
  );
}
