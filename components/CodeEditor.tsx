import { theme } from '@chakra-ui/react';
import Editor, { OnChange } from '@monaco-editor/react';
import { PropagateLoader } from 'react-spinners';

interface Props {
  code: string;
  language: string;
  handleChange: OnChange;
}

export default function CodeEditor({ code, language, handleChange }: Props) {
  return (
    <Editor
      language={language}
      value={code}
      onChange={handleChange}
      theme='vs-dark'
      height='500px'
      width='100%'
      loading={<PropagateLoader color={theme.colors.teal[100]} />}
    />
  );
}
