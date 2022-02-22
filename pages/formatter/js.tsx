import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Setting from '@/components/Setting';
import { Input, Switch } from '@chakra-ui/react';
import usePath from '@/utils/usePath';
import formatCode from '@/utils/formatCode';

import jsParser from 'prettier/parser-babel';
import tsParser from 'prettier/parser-typescript';
import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';

const JS: NextPage = () => {
  const path = usePath('js');
  const [isTS, setIsTS] = useState(false);
  const [indent, setIndent] = useState(2);
  const [unformatted, setUnformatted] = useState('');
  const [formatted, setFormatted] = useState('');

  const format = ({
    val,
    isTS,
    indentation,
  }: {
    val?: string;
    isTS?: boolean;
    indentation?: number;
  }) => {
    setFormatted(
      formatCode({
        code: val || unformatted,
        language: isTS ? 'typescript' : 'babel',
        parser: isTS ? tsParser : jsParser,
        options: { tabWidth: indentation || indent },
      })
    );
  };

  const handleChange = (val: string) => {
    setUnformatted(val);
    if (val.trim() === '') return setFormatted('');
    format({ val, isTS, indentation: indent });
  };

  return (
    <>
      <Layout title={path.title} description={path.description}>
        <Header title={path.title} imageSrc={path.image} />
        <Setting title='Format TypeScript' img='/icons/ts.svg'>
          <Switch
            size='lg'
            isChecked={isTS}
            onChange={e => {
              setIsTS(e.target.checked);
              format({ isTS: e.target.checked });
            }}
          />
        </Setting>
        <Setting title='Indentation'>
          <Input
            type='number'
            w={'sm'}
            value={indent}
            onChange={e => {
              if (e.target.value.includes('e')) return;
              setIndent(parseInt(e.target.value));
              format({ indentation: parseInt(e.target.value), isTS });
            }}
          />
        </Setting>
        <Formatter
          language={isTS ? 'ts' : 'js'}
          unformattedCode={unformatted || ''}
          formattedCode={formatted || ''}
          handleChange={handleChange}
        />
      </Layout>
    </>
  );
};

export default JS;
