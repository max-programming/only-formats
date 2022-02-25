import Editor, { OnChange } from '@monaco-editor/react';

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
      options={{}}
    />
  );
}
