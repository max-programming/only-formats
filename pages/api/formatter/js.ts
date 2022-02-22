import formatCode from '@/utils/formatCode';

import type { NextApiRequest, NextApiResponse } from 'next';

import { Options } from 'prettier';
import jsParser from 'prettier/parser-babel';
import tsParser from 'prettier/parser-typescript';

interface Data {
  unformatted: string;
  formatted: string;
  options: Options;
  msg: 'success' | 'error';
}

interface Body {
  unformatted: string;
  typescript?: boolean;
}

export default function jsFormat(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  if (req.method !== 'POST') return res.status(401).send({ msg: 'error' });
  const { unformatted, typescript }: Body = req.body;
  const formatted = formatCode({
    code: unformatted,
    language: typescript ? 'typescript' : 'babel',
    parser: typescript ? tsParser : jsParser,
  });
  res.send({
    unformatted,
    formatted,
    msg: formatted === 'Invalid code' ? 'error' : 'success',
  });
}
