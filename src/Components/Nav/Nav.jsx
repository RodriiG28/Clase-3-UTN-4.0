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

const Navbar = () => {
  const [AyudaModalOpen, setAyudaModalOpen] = useState(false);
  const [ContactoModalOpen, setContactoModalOpen] = useState(false);

  const openAyudaModal = () => setAyudaModalOpen(true);
  const closeAyudaModal = () => setAyudaModalOpen(false);

  const openContactoModal = () => setContactoModalOpen(true);
  const closeContactoModal = () => setContactoModalOpen(false);

  const NavegarAInicio = () => {
    window.location.href = '/';
  }

  return (
    <Flex
      p={4}
      bg="teal.500"
      color="white"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent={{ base: 'center', md: 'space-between' }}
    >
      <Stack
        direction={{ base: 'row', md: 'row' }}
        spacing={2}
        alignItems="center"
      >
        <Box mb={{ base: '2', md: '0' }} align='center' flexShrink={0}>
          <Image src="img/logo1 (1).png" alt="Logo" boxSize='5rem' onClick={NavegarAInicio} cursor='pointer' />
        </Box>
        <Text fontSize="xl" fontWeight="bold" alignSelf="center" fontFamily="serif" fontStyle="italic" mb="10px">
          Ecompre
        </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ base: 'center', md: 'center' }}
        justifyContent="center"
      >
        <Button variant='solid' size="lg" onClick={NavegarAInicio}>
          Inicio
        </Button>
        <Button variant='ghost' size="lg" onClick={openAyudaModal}>
          Ayuda
        </Button>
        <Button variant='ghost' size="lg" onClick={openContactoModal}>
          Contacto
        </Button>
      </Stack>

      {/* Modal de Ayuda */}
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

      {/* Modal de Contacto */}
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
