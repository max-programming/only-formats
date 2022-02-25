import { Box, Flex, Grid, Text, useBreakpointValue } from '@chakra-ui/react';
import CodeEditor from '@/components/CodeEditor';
import CodeDisplay from '@/components/CodeDisplay';
import { OnChange } from '@monaco-editor/react';

interface Props {
  language: string;
  unformattedCode: string;
  formattedCode: string;
  handleChange: OnChange;
}

export default function Formatter({
  language,
  formattedCode,
  unformattedCode,
  handleChange,
}: Props) {
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
          <Text fontSize={'xl'} mb='2'>
            Input Code
          </Text>
          <CodeEditor
            language={language}
            code={unformattedCode}
            handleChange={handleChange}
          />
        </Box>
        <Box flex={1}>
          <Text fontSize={'xl'} mb='2'>
            Formatted Code
          </Text>
          <CodeDisplay language={language} code={formattedCode} />
        </Box>
      </Flex>
    </Box>
  );
}
