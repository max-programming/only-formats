import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Setting from '@/components/Setting';
import { Input } from '@chakra-ui/react';
import usePath from '@/utils/usePath';
import formatCode from '@/utils/formatCode';

import htmlParser from 'prettier/parser-html';
import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';
import { OnChange } from '@monaco-editor/react';

const HTMLFormat: NextPage = () => {
  const path = usePath('html');
  const [indent, setIndent] = useState(2);
  const [unformatted, setUnformatted] = useState('');
  const [formatted, setFormatted] = useState('');

  const format = ({
    val,
    indentation,
  }: {
    val?: string;
    indentation?: number;
  }) => {
    setFormatted(
      formatCode({
        code: val || unformatted,
        language: 'html',
        parser: htmlParser,
        options: { tabWidth: indentation || indent },
      })
    );
  };

  const handleChange: OnChange = val => {
    if (!val) return;
    setUnformatted(val);
    if (val.trim() === '') return setFormatted('');
    format({ val, indentation: indent });
  };

  return (
    <>
      <Layout title={path.title}>
        <Header title={path.title} imageSrc={path.image} />
        <Setting title='Indentation'>
          <Input
            type='number'
            w={'sm'}
            value={indent}
            onChange={e => {
              if (e.target.value.includes('e')) return;
              setIndent(parseInt(e.target.value));
              format({ indentation: parseInt(e.target.value) });
            }}
          />
        </Setting>
        <Formatter
          language={'html'}
          unformattedCode={unformatted || ''}
          formattedCode={formatted || ''}
          handleChange={handleChange}
        />
      </Layout>
    </>
  );
};

export default HTMLFormat;
