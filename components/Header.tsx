import { Flex, Heading, Image, useBreakpointValue } from '@chakra-ui/react';

interface Props {
  title: string;
  imageSrc: string;
}

export default function Header({ title, imageSrc }: Props) {
  return (
    <Flex justifyContent='center' my='8' alignItems='center' gap={3}>
      <Image src={imageSrc} width={10} alt='' />
      <Heading
        textAlign='center'
        fontSize={useBreakpointValue({ lg: '4xl', md: '3xl', sm: '2xl' })}
        fontWeight='semibold'
      >
        {title.replace('<br /> ', '')}
      </Heading>
    </Flex>
  );
}
