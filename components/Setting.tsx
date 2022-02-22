import { Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface Props {
  title: string;
  img?: string;
}

export default function Setting({
  title,
  img,
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
      <Stack direction='row' alignItems='center' gap={2}>
        {img && <Image src={img} alt='' w='10' />}
        <Text fontWeight='semibold' fontSize={'2xl'}>
          {title}
        </Text>
      </Stack>
      {children}
    </Stack>
  );
}
