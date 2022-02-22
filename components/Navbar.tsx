import { PropsWithChildren } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NextLink href='/'>
            <a>
              <Heading size={'lg'}>OnlyFormats</Heading>
            </a>
          </NextLink>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
