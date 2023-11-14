import React from 'react';
import {
  Flex,
  Box,
  Grid,
  GridItem,
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
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
      gap={4}
      mt="10"
      mb="10"
    >
      {productos.map((product) => (
        <GridItem key={product.id} colSpan={1}>
          <ChakraCard
            borderRadius="lg"
            boxShadow="md"
            borderWidth="2px"
            borderColor="gray.200"
            overflow="hidden"
            _hover={{ boxShadow: 'lg' }}
            transition="all 0.3s ease"
            minHeight="100%"
          >
            <CardBody>
              <div onClick={() => onProductClick(product.id)}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  borderRadius="lg"
                  h={['150px', '200px', '250px', '300px']}
                  w="100%"
                  objectPosition="center center"
                  objectFit="cover"
                  cursor="pointer"
                />
              </div>
              <Stack mt="4" spacing="2" alignItems="stretch">
                <Heading size={['sm', 'md', 'lg', 'xl']} textAlign="center">
                  {product.name}
                </Heading>
                <Text fontSize={['xs', 'sm', 'md', 'lg']} color="gray.600" noOfLines={3}>
                  {product.description}
                </Text>
                <Divider />
                <Stack direction="row" justify="space-between">
                  <Box>
                    <Text color="blue.600" fontSize={['md', 'lg', 'xl', '2xl']} fontWeight="bold">
                      {product.price}
                    </Text>
                    <Text fontSize={['xs', 'sm', 'md', 'lg']} mt="2">
                      SKU: {product.sku}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={['xs', 'sm', 'md', 'lg']}>Disponible: {product.cantidad}</Text>
                  </Box>
                </Stack>
              </Stack>
            </CardBody>
          </ChakraCard>
        </GridItem>
      ))}
    </Grid>
  );
};

export default MyCard;
