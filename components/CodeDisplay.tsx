import { Box } from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

export default function CodeDisplay({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <Box position='relative' mt={-3}>
      <Highlight
        {...defaultProps}
        code={code.trim()}
        // @ts-ignore
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box
            as='pre'
            className={className}
            style={style}
            textAlign='left'
            m='1em 0'
            p='25px'
            overflow='auto'
            fontFamily='monospace'
            maxH={500}
            fontSize={20}
            rounded='xl'
          >
            {tokens.map((line, i) => (
              <Box
                key={i}
                display='table-row'
                {...getLineProps({ line, key: i })}
              >
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
                <Box as='span' display='table-cell'>
                  {line.map((token, key) => (
                    <Box
                      as='span'
                      key={key}
                      _selection={{ backgroundColor: 'blue.900' }}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Highlight>
    </Box>
  );
}
