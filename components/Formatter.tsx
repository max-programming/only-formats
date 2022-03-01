import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Text,
  useBreakpointValue,
  useClipboard,
  useToast,
} from '@chakra-ui/react';
import { CloseIcon, CopyIcon } from '@chakra-ui/icons';
import CodeEditor from '@/components/CodeEditor';
import CodeDisplay from '@/components/CodeDisplay';
import { OnChange } from '@monaco-editor/react';

interface Props {
  language: string;
  unformattedCode: string;
  formattedCode: string;
  handleChange: OnChange;
  clearData: VoidFunction;
  pasteCode: VoidFunction;
}

export default function Formatter({
  language,
  formattedCode,
  unformattedCode,
  handleChange,
  clearData,
  pasteCode,
}: Props) {
  const { onCopy } = useClipboard(formattedCode);
  const buttonSize = useBreakpointValue({ base: 'md', lg: 'lg' });
  const toast = useToast({
    title: 'Code copied!',
    status: 'success',
    isClosable: true,
    variant: 'top-accent',
    position: 'bottom',
  });
  return (
    <Box
      maxW={'full'}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      mt='12'
    >
      <Flex gap={2} direction={'column'}>
        <Box flex={2}>
          <Flex justify='space-between' align='center' mb='3'>
            <Text fontSize={'xl'} mb='2'>
              Input Code
            </Text>
            <Flex gap={2}>
              <Button
                colorScheme='teal'
                size={buttonSize}
                gap={2}
                onClick={pasteCode}
              >
                <PasteIcon />
                Paste
              </Button>
              <IconButton
                size={buttonSize}
                colorScheme='teal'
                aria-label='clear'
                onClick={clearData}
              >
                <CloseIcon />
              </IconButton>
            </Flex>
          </Flex>
          <CodeEditor
            language={language}
            code={unformattedCode}
            handleChange={handleChange}
          />
        </Box>
        <Box flex={1}>
          <Flex justify='space-between' align='center' my='3'>
            <Text fontSize={'xl'} mb='2'>
              Formatted Code
            </Text>
            <Button
              colorScheme='teal'
              size={buttonSize}
              gap={2}
              onClick={() => {
                onCopy();
                toast();
              }}
            >
              <CopyIcon />
              Copy
            </Button>
          </Flex>
          <CodeDisplay language={language} code={formattedCode} />
        </Box>
      </Flex>
    </Box>
  );
}

const PasteIcon = () => (
  <Icon
    w='6'
    h='6'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    />
  </Icon>
);
