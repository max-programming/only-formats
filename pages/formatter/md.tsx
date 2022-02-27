import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import usePath from '@/utils/usePath';
import formatCode from '@/utils/formatCode';

import markdownParser from 'prettier/parser-markdown';
import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';
import { OnChange } from '@monaco-editor/react';

const MarkdownFormat: NextPage = () => {
  const path = usePath('md');
  const [unformatted, setUnformatted] = useState('');
  const [formatted, setFormatted] = useState('');

  const format = ({ val }: { val?: string }) => {
    setFormatted(
      formatCode({
        code: val || unformatted,
        language: 'markdown',
        parser: markdownParser,
      })
    );
  };

  const handleChange: OnChange = val => {
    if (!val) return;
    setUnformatted(val);
    if (val.trim() === '') return setFormatted('');
    format({ val });
  };

  return (
    <>
      <Layout title={path.title}>
        <Header title={path.title} imageSrc={path.image} />
        <Formatter
          language={'markdown'}
          unformattedCode={unformatted || ''}
          formattedCode={formatted || ''}
          handleChange={handleChange}
          clearData={() => {
            setFormatted('');
            setUnformatted('');
          }}
          pasteCode={async () => {
            setUnformatted(await navigator.clipboard.readText());
            format({ val: await navigator.clipboard.readText() });
          }}
        />
      </Layout>
    </>
  );
};

export default MarkdownFormat;
