import { Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface Props {
  title: string;
  description?: string;
}

export default function Setting({
  title,
  description,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Stack
      p='6'
      boxShadow={useColorModeValue('2xl', 'dark-lg')}
      m='4'
      borderRadius='lg'
      direction='row'
      justify='space-between'
    >
      <Stack direction='row' alignItems='center'>
        <Text fontWeight='semibold' fontSize={'2xl'}>
          {title}
        </Text>
      </Stack>

      {/* {description && (
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems={'center'}
        >
          <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
            {description}
          </Text>
        </Stack>
      )} */}
      {children}
    </Stack>
  );
}
