import {
  BuiltInParserName,
  format,
  LiteralUnion,
  Plugin,
  Options,
} from 'prettier';

interface FormatOptions {
  code: string;
  parser: Plugin;
  language: LiteralUnion<BuiltInParserName, string>;
  options?: Options;
}

const formatCode = ({
  code,
  parser,
  language,
  options,
}: FormatOptions): string => {
  try {
    const formatted = format(code, {
      parser: language,
      plugins: [parser],
      ...options,
    });
    return formatted;
  } catch (error) {
    return 'Invalid code';
  }
};

export default formatCode;
