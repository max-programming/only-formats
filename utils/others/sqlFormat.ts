import { format } from 'sql-formatter';

export enum SQLLanguage {
  'Standard SQL' = 'sql',
  'MariaDB' = 'mariadb',
  'MySQL' = 'mysql',
  'PostgreSQL' = 'postgresql',
  'IBM DB2' = 'db2',
  'Oracle PL/SQL' = 'plsql',
  'Couchbase N1QL' = 'n1ql',
  'Amazon Redshift' = 'redshift',
  'Spark' = 'spark',
  'SQL Server Transact-SQL' = 'tsql',
}

export const languages = [
  {
    name: 'Standard SQL',
    value: 'sql',
  },
  {
    name: 'MariaDB',
    value: 'mariadb',
  },
  {
    name: 'MySQL',
    value: 'mysql',
  },
  {
    name: 'PostgreSQL',
    value: 'postgresql',
  },
  {
    name: 'IBM DB2',
    value: 'db2',
  },
  {
    name: 'Oracle PL/SQL',
    value: 'plsql',
  },
  {
    name: 'Couchbase N1QL',
    value: 'n1ql',
  },
  {
    name: 'Amazon Redshift',
    value: 'redshift',
  },
  {
    name: 'Spark',
    value: 'spark',
  },
  {
    name: 'SQL Server Transact-SQL',
    value: 'tsql',
  },
];

export default function sqlFormat(
  sql: string,
  language?: SQLLanguage,
  indentation?: number,
  isUppercase?: boolean
) {
  let indent = '';
  if (!indentation) {
    indent = '  ';
  } else {
    for (let i = 0; i < indentation; i++) {
      indent += ' ';
    }
  }
  const formatted = format(sql, {
    language: language || 'sql',
    indent: indent.length === 0 ? '  ' : indent,
    uppercase: isUppercase,
  });
  return formatted;
}
