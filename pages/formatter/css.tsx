import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import usePath from '@/utils/usePath';
import formatCode from '@/utils/formatCode';

import cssParser from 'prettier/parser-postcss';
import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';

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

  const handleChange = (val: string) => {
    setUnformatted(val);
    if (val.trim() === '') return setFormatted('');
    format({ val });
  };

  return (
    <>
      <Layout title={path.title} description={path.description}>
        <Header title={path.title} imageSrc={path.image} />
        <Formatter
          language={'scss'}
          unformattedCode={unformatted || ''}
          formattedCode={formatted || ''}
          handleChange={handleChange}
        />
      </Layout>
    </>
  );
};

export default CSS;
