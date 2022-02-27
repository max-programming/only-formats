import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Setting from '@/components/Setting';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
} from '@chakra-ui/react';
import usePath from '@/utils/usePath';
import formatCode from '@/utils/formatCode';

import phpParser from '@prettier/plugin-php/standalone';
import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';
import { OnChange } from '@monaco-editor/react';

const PHPFormat: NextPage = () => {
  const path = usePath('php');
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
        language: 'php',
        parser: phpParser,
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
          <NumberInput
            onChange={(_, val) => {
              setIndent(val);
              format({ indentation: val });
            }}
            defaultValue={indent}
            min={1}
            max={10}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Setting>
        <Formatter
          language={'php'}
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

export default PHPFormat;
