import React from 'react';
import Swal from 'sweetalert2';
import { Flex, Button, Box, Heading, Text, Image, Stack } from '@chakra-ui/react';

const PaginaProducto = ({ product, onBack }) => {
    const showAlert = (title, text, icon) => {
        Swal.fire({
            title,
            text,
            icon,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
        });
    };

    return (
        <Flex
            direction="column"
            p={4}
            m={4}
            maxW="100vh" // Establece un ancho máximo para evitar que ocupe todo el ancho de la pantalla
            mx="auto" // Centra horizontalmente el contenido
            alignContent="center" // Alinea el contenido en el centro
        >
            <Box mb={4} maxW="100%">
                <Image src={product.imageUrl} alt={product.name} borderRadius="8px" w='100%' />
            </Box>
            <Box>
                <Heading as="h2" mb={2} textAlign="center" fontSize="xl">
                    {product.name}
                </Heading>
                <Text mb={4} textAlign="center" fontSize="md" color="gray.600">
                    {product.description}
                </Text>
                <Stack direction="column" spacing={2} textAlign="center">
                    <Text fontSize="lg" color="teal.500">
                        <strong>Precio:</strong> {product.price}
                    </Text>
                    <Text fontSize="lg" color="teal.500">
                        <strong>SKU:</strong> {product.sku}
                    </Text>
                    <Text fontSize="lg" color="teal.500">
                        <strong>Disponible:</strong> {product.cantidad} unidades
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
