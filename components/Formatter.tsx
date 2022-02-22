import {
  Box,
  Grid,
  Switch,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import CodeEditor from '@/components/CodeEditor';
import CodeDisplay from '@/components/CodeDisplay';

interface Props {
  language: string;
  unformattedCode: string;
  formattedCode: string;
  handleChange: (val: string) => void;
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
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      mt='12'
    >
      <Grid
        templateColumns={useBreakpointValue({
          lg: 'repeat(2, 1fr)',
          base: 'repeat(1, 1fr)',
        })}
        gap={6}
      >
        <Box>
          <Text fontSize={'xl'} mb='2'>
            Input Code
          </Text>
          <CodeEditor
            language={language}
            code={unformattedCode}
            handleChange={handleChange}
          />
        </Box>
        <Box>
          <Text fontSize={'xl'} mb='2'>
            Formatted Code
          </Text>
          <CodeDisplay language={language} code={formattedCode} />
        </Box>
      </Grid>
    </Box>
  );
}
