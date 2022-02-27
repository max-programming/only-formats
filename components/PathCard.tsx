import { Box, Center, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  id: string;
}

export default function PathCard({ title, image, id }: Props) {
  return (
    <Link href={id}>
      <a>
        <Center>
          <Box
            maxW='72'
            transition='all 0.3s ease'
            borderWidth='2px'
            borderRadius='lg'
            overflow='hidden'
            _hover={{
              borderColor: 'teal.100',
              transform: 'translateY(-10px)',
              bg: 'blackAlpha.300',
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'scale-down'}
              mx='auto'
              src={image}
              alt=''
            />
            <Box p={6}>
              <Heading
                textAlign='center'
                size='md'
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Box>
          </Box>
        </Center>
      </a>
    </Link>
  );
}
