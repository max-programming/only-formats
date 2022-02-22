import { Flex, Heading, Image } from '@chakra-ui/react';

interface Props {
  title: string;
  imageSrc: string;
}

export default function Header({ title, imageSrc }: Props) {
  return (
    <Flex justifyContent='center' my='8' alignItems='center' gap={5}>
      <Image src={imageSrc} width={10} alt='' />
      <Heading textAlign='center' fontWeight='semibold'>
        {title}
      </Heading>
    </Flex>
  );
}
