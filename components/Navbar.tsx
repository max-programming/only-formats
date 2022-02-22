import { PropsWithChildren } from 'react';
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const NavLink = ({ children }: PropsWithChildren<{}>) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NextLink href='/'>
            <a>
              <Heading size={'lg'}>OnlyFormats</Heading>
            </a>
          </NextLink>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}></Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
