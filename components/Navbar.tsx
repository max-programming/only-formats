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
          <AutoCompleteList
            w='full'
            justifyContent='center'
            alignItems='center'
          >
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
                    <Text ml='4'>{path.title}</Text>
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

          <IconButton aria-label='search' onClick={onOpen}>
            <SearchIcon />
          </IconButton>

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
