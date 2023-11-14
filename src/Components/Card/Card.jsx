import React from 'react';
import {
  Flex,
  Box,
  Card as ChakraCard,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
} from '@chakra-ui/react';

const MyCard = ({ productos, onProductClick }) => {
  return (
   <Flex justify="center" direction="row" flexWrap="wrap" mt='10' mb='10'>
      {productos.map((product) => (
        <ChakraCard
          key={product.id}
          maxW={['xs', 'sm', 'md', 'lg']}
          m={4}
          borderRadius='lg'
          boxShadow='md'
          borderWidth='2px'
          borderColor='gray.200'
          overflow='hidden'
          _hover={{ boxShadow: 'lg' }}
          transition='all 0.3s ease'
        >
          <CardBody>
            {/* Utiliza una función de flecha para pasar el ID del producto */}
            <div onClick={() => onProductClick(product.id)}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                borderRadius='lg'
                h={['150px', '200px', '250px', '300px']}
                w='100%'
                objectPosition='center center'
                objectFit='cover'
                cursor='pointer'
              />
            </div>
            <Stack mt='1' spacing='2'>
              <Heading size={['sm', 'md', 'lg', 'xl']} textAlign='center'>
                {product.name}
              </Heading>
              <Text fontSize={['xs', 'sm', 'md', 'lg']} color='gray.600'>
                {product.description}
              </Text>
              <Divider />
              <Stack direction={['column', 'column', 'row', 'row']} justify='space-between'>
                <Box>
                  <Text color='blue.600' fontSize={['md', 'lg', 'xl', '2xl']} fontWeight='bold'>
                    {product.price}
                  </Text>
                  <Text fontSize={['xs', 'sm', 'md', 'lg']} mt='5'>
                    SKU: {product.sku}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={['xs', 'sm', 'md', 'lg']}>
                    Disponible: {product.cantidad}
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </CardBody>
        </ChakraCard>
      ))}
    </Flex>
  );
};

export default MyCard;
