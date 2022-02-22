import Editor from 'react-simple-code-editor';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Box } from '@chakra-ui/react';
import { CSSProperties } from 'react';

const styles: CSSProperties = {
  boxSizing: 'border-box',
  fontFamily: '"Dank Mono", "Fira Code", monospace',
  fontSize: 20,
  minHeight: 500,
  borderRadius: '20px',
  ...theme.plain,
};

interface Props {
  code: string;
  language: string;
  handleChange: (val: string) => void;
}

export default function CodeEditor({ code, language, handleChange }: Props) {
  return (
    <Editor
      value={code}
      onValueChange={handleChange}
      highlight={code => (
        <Highlight
          {...defaultProps}
          theme={theme}
          code={code}
          //@ts-ignore
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <>
              {tokens.map((line, i) => (
                <Box key={i} {...getLineProps({ line, key: i })}>
                  {/* <Box
                    as='span'
                    display='table-cell'
                    textAlign='right'
                    pr='1em'
                    userSelect='none'
                    opacity='0.5'
                  >
                    {i + 1}
                  </Box> */}
                  <Box display='table-cell' as='span'>
                    {line.map((token, key) => (
                      <Box
                        as='span'
                        key={i}
                        _selection={{ backgroundColor: 'blue.900' }}
                        {...getTokenProps({ token, key })}
                      />
                    ))}
                  </Box>
                </Box>
              ))}
            </>
          )}
        </Highlight>
      )}
      padding={10}
      style={styles}
    />
  );
}
