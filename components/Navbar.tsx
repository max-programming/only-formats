import paths from '@/paths.json';
import { PropsWithChildren } from 'react';
import {
  Box,
  Link,
  useColorModeValue,
  Flex,
  FormControl,
  Heading,
  InputGroup,
  Text,
  Image,
  InputLeftElement,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import { SearchIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  return (
    <Flex justify='center' align='center' w='full'>
      <FormControl w='xl'>
        <AutoComplete
          onChange={(value, item) => {
            console.log(item);
            router.push(value);
          }}
          openOnFocus
        >
          <InputGroup>
            <AutoCompleteInput variant='outline' placeholder='Search' />
            <InputLeftElement>
              <SearchIcon />
            </InputLeftElement>
          </InputGroup>
          <AutoCompleteList>
            {paths.map(path => (
              <NextLink key={path.id} href={path.id} passHref>
                <a>
                  <AutoCompleteItem
                    value={path.id}
                    label={path.title}
                    textTransform='capitalize'
                    justify='space-between'
                    align='center'
                    w='sm'
                  >
                    <Text
                      ml='4'
                      dangerouslySetInnerHTML={{ __html: path.title }}
                    />
                    <Image src={path.image} alt={path.title} width='10' />
                  </AutoCompleteItem>
                </a>
              </NextLink>
            ))}
          </AutoCompleteList>
        </AutoComplete>
      </FormControl>
    </Flex>
  );
};

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <NextLink href='/'>
            <a>
              <Heading size={'lg'}>OnlyFormats</Heading>
            </a>
          </NextLink>

          <Flex gap={3}>
            <Tooltip label='Search'>
              <IconButton aria-label='search' onClick={onOpen}>
                <SearchIcon />
              </IconButton>
            </Tooltip>

            <Tooltip label='GitHub Repository'>
              <IconButton
                aria-label='github'
                as='a'
                href='https://github.com/max-programming/only-formats'
                target='_blank'
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Flex>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <Search />
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
    </>
  );
}

const GitHubIcon = () => (
  <Icon
    fill='#fff'
    role='img'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fontSize='xl'
  >
    <title>GitHub</title>
    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
  </Icon>
);
