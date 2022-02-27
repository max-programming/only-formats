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

import jsParser from 'prettier/parser-babel';
import tsParser from 'prettier/parser-typescript';
import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';
import { OnChange } from '@monaco-editor/react';

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

  const handleChange: OnChange = val => {
    if (!val) return;
    setUnformatted(val);
    if (val.trim() === '') return setFormatted('');
    format({ val, isTS, indentation: indent });
  };

  return (
    <>
      <Layout title={path.title}>
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
          language={isTS ? 'typescript' : 'javascript'}
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

export default JS;
