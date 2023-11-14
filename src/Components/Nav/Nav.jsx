import React, { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Image,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

// Modales del navbar (Ayuda y Contacto) 
const Navbar = () => {
  const [AyudaModalOpen, setAyudaModalOpen] = useState(false);
  const [ContactoModalOpen, setContactoModalOpen] = useState(false);

  const openAyudaModal = () => setAyudaModalOpen(true);
  const closeAyudaModal = () => setAyudaModalOpen(false);

  const openContactoModal = () => setContactoModalOpen(true);
  const closeContactoModal = () => setContactoModalOpen(false);

  const NavegarAInicio = () => {
    // Cambiar la URL de la página a la página principal
    window.location.href = '#';
  }
  // Navbar 
  return (
    <Flex
      p={4}
      bg="teal.500"
      color="white"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
    >
      <Flex direction={{ base: 'column', md: 'row' }} spacing={4} align="center">
        <Box mb={{ base: '4', md: '0' }} align='center'>
          <Image src="img/logo.png" alt="Logo" boxSize="40px" objectFit="cover" onClick={NavegarAInicio} cursor='pointer' />
          <Text fontSize="xl" fontWeight="bold" ml={2}>
            Ecompre
          </Text>
        </Box>
      </Flex>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
        {/* Botón para ir a la página principal */}
        <Button variant='solid' onClick={NavegarAInicio}>Inicio</Button>
        <Button variant='ghost' onClick={openAyudaModal}>Ayuda</Button>
        <Button variant='ghost' onClick={openContactoModal}>Contacto</Button>
      </Stack>

      {/* Ayuda Modal */}
      <Modal isOpen={AyudaModalOpen} onClose={closeAyudaModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ayuda (En Desarrollo)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Esta sección aún está en desarrollo. Pronto estará disponible.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={closeAyudaModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Contacto Modal */}
      <Modal isOpen={ContactoModalOpen} onClose={closeContactoModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contacto (En Desarrollo)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Esta sección aún está en desarrollo. Pronto estará disponible.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={closeContactoModal}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};


export default Navbar;
