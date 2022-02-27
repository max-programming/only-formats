import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import Setting from '@/components/Setting';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Switch,
} from '@chakra-ui/react';
import usePath from '@/utils/usePath';

import { useState } from 'react';
import Formatter from '@/components/Formatter';
import Header from '@/components/Header';
import { OnChange } from '@monaco-editor/react';
import sqlFormat, { SQLLanguage, languages } from '@/utils/others/sqlFormat';

const SQLFormat: NextPage = () => {
  const path = usePath('sql');
  const [indent, setIndent] = useState(2);
  const [isUppercase, setIsUppercase] = useState(false);
  const [unformatted, setUnformatted] = useState('');
  const [formatted, setFormatted] = useState('');
  const [language, setLanguage] = useState<SQLLanguage>(
    SQLLanguage['Standard SQL']
  );

  const format = ({
    val,
    indentation,
    lang,
    isUpper,
  }: {
    val?: string;
    indentation?: number;
    lang?: SQLLanguage;
    isUpper?: boolean;
  }) => {
    setFormatted(
      sqlFormat(
        val || unformatted,
        lang || language,
        indentation || indent,
        isUpper || isUppercase
      )
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
        <Setting title='Language'>
          <Select
            width='md'
            placeholder='Select language'
            defaultValue={language}
            onChange={e => {
              setLanguage(e.target.value as SQLLanguage);
              format({
                val: unformatted,
                indentation: indent,
                lang: e.target.value as SQLLanguage,
              });
            }}
          >
            {languages.map(lang => (
              <option key={lang.value} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </Select>
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
        <Setting title='Capitalize'>
          <Switch
            size='lg'
            isChecked={isUppercase}
            onChange={e => {
              setIsUppercase(e.target.checked);
              format({ isUpper: e.target.checked });
            }}
          />
        </Setting>
        <Formatter
          language={'sql'}
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

export default SQLFormat;
