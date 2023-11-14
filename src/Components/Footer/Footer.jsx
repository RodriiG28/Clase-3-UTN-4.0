import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

// Componente Footer 
const Footer = () => {
    const LineaVertical = {
        textDecoration: 'none',
        color: 'white',
        paddingRight: '8px',
        borderRight: '1px solid white',
        marginRight: '3rem',

    };

    //  Footer
    return (
        <Flex
            p={4}
            bg="teal.500"
            color="white"
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            justifyContent={{ base: 'center', md: 'space-between' }}
            flexShrink={0}
        >
            <Text  {...LineaVertical} mb={{ base: 4, md: 0 }}>
                © 2023 <Text as="span" fontWeight="bold">Ecompre</Text> - Rodrigo Avila.
            </Text>

            <Text mb={{ base: 4, md: 0 }}>
                <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
                    Trabajá con nosotros
                </Link>
                <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
                    Ayuda
                </Link>
                <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
                    Preguntas frecuentes
                </Link>
                <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
                    Medios de pago
                </Link>
                <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
                    Políticas de privacidad
                </Link>
                <Link href="#" ml='5' mr='5' textDecoration="none" color="white" _hover={{ textDecoration: 'underline' }}>
                    Términos y condiciones
                </Link>
            </Text>
        </Flex>

    );

};


export default Footer;

