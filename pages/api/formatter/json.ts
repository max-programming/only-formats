import formatCode from '@/utils/formatCode';

import type { NextApiRequest, NextApiResponse } from 'next';

import { Options } from 'prettier';
import jsonParser from 'prettier/parser-babel';

interface Data {
  unformatted: string;
  formatted: string;
  options: Options;
  msg: 'success' | 'error';
}

interface Body {
  unformatted: string;
}

export default function jsonFormat(
  req: NextApiRequest,
  res: NextApiResponse<Partial<Data>>
) {
  if (req.method !== 'POST') return res.status(401).send({ msg: 'error' });
  const { unformatted }: Body = req.body;
  const formatted = formatCode({
    code: unformatted,
    language: 'json',
    parser: jsonParser,
  });
  res.send({
    unformatted,
    formatted,
    msg: formatted === 'Invalid code' ? 'error' : 'success',
  });
}
