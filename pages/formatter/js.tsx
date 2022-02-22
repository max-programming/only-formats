import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Setting from '@/components/Setting';
import { Switch } from '@chakra-ui/react';
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
  const [unformatted, setUnformatted] = useState('');
  const [formatted, setFormatted] = useState('');

  const format = ({ val, isTS }: { val?: string; isTS?: boolean }) => {
    setFormatted(
      formatCode({
        code: val || unformatted,
        language: isTS ? 'typescript' : 'babel',
        parser: isTS ? tsParser : jsParser,
      })
    );
  };

  const handleChange = (val: string) => {
    setUnformatted(val);
    if (val.trim() === '') return setFormatted('');
    format({ val, isTS });
  };

  return (
    <>
      <Layout title={path.title} description={path.description}>
        <Header title={path.title} imageSrc={path.image} />
        <Setting title='Format TypeScript'>
          <Switch
            size='lg'
            isChecked={isTS}
            onChange={e => {
              setIsTS(e.target.checked);
              format({ isTS: e.target.checked });
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
