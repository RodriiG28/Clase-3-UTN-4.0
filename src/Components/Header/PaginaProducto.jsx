import React from 'react';
import Swal from 'sweetalert2';
import { Flex, Button, Box, Heading, Text, Image, Stack } from '@chakra-ui/react';

const PaginaProducto = ({ product, onBack }) => {
  const showAlert = (title, text, icon) => {
    const isSmallScreen = window.innerWidth <= 600; // Puedes ajustar este valor según tus necesidades
    
    const customClass = isSmallScreen
      ? {
          container: 'sweet-container',
          popup: 'sweet-popup',
          header: 'sweet-header',
          title: 'sweet-title',
          closeButton: 'sweet-close-button',
          icon: 'sweet-icon',
          content: 'sweet-content',
          confirmButton: 'sweet-confirm-button',
          cancelButton: 'sweet-cancel-button',
          footer: 'sweet-footer',
        }
      : {};
    
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
      customClass,
      width: isSmallScreen ? '80%' : '90%', // Ajusta el ancho según tus necesidades
      padding: '2rem',
      showCloseButton: true,
    });
  };

  return (
    <Flex
      direction="column"
      p={4}
      m={4}
      maxW="100vh"
      mx="auto"
      alignContent="center"
    >
      <Box mb={4} maxW="100%" borderRadius="md" overflow="hidden" boxShadow="xl">
        <Image src={product.imageUrl} alt={product.name} borderRadius="8px" w='100%' />
      </Box>
      <Box>
        <Heading as="h2" mb={2} textAlign="center" fontSize="2xl" fontWeight="bold">
          {product.name}
        </Heading>
        <Text mb={10} textAlign="center" fontSize="lg" color="gray.600">
          {product.description}
        </Text>
        <Stack
          direction="row"
          spacing={2}
          textAlign="center"
          justifyContent="space-between"
          mb={10}
          fontWeight="bold"
        >
          <Text fontSize="lg" color="teal.500">
            <strong>Precio:</strong> {product.price}
          </Text>
          <Text fontSize="lg" color="teal.500">
            <strong>SKU:</strong> {product.sku}
          </Text>
          <Text fontSize="lg" color="teal.500">
            <strong>Disponible:</strong> {product.cantidad}
          </Text>
        </Stack>
      </Box>
      <Button
        colorScheme="teal"
        mt={4}
        size="lg"
        onClick={() => showAlert('Compra Exitosa', '¡Gracias por tu compra!', 'success')}
      >
        Comprar
      </Button>
      <Button
        colorScheme="teal"
        mt={2}
        onClick={() => showAlert('Producto Agregado', '¡Producto agregado al carrito!', 'success')}
      >
        Agregar al Carrito
      </Button>
      <Button variant="ghost" mt={4} onClick={onBack}>
        Volver a la lista de productos
      </Button>
    </Flex>
  );
};

export default PaginaProducto;
