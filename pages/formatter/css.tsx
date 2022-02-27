import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import usePath from '@/utils/usePath';
import formatCode from '@/utils/formatCode';

import cssParser from 'prettier/parser-postcss';
import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';
import { OnChange } from '@monaco-editor/react';

const CSS: NextPage = () => {
  const path = usePath('css');
  const [unformatted, setUnformatted] = useState('');
  const [formatted, setFormatted] = useState('');

  const format = ({ val }: { val?: string }) => {
    setFormatted(
      formatCode({
        code: val || unformatted,
        language: 'scss',
        parser: cssParser,
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
          language={'scss'}
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

export default CSS;
