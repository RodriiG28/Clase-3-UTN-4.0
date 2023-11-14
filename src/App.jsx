// App.jsx
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import MyCard from './Components/Card/Card';
import PaginaProducto from './Components/Header/PaginaProducto';

const App = () => {
  // Estado para manejar el producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Productos
  const productos = [
    {
      id: 0,
      name: 'Sofa de Living',
      description:
        'Este sofá es perfecto para espacios modernos tropicales, espacios inspirados en el barroco, espacios con tonos terrosos y para personas que aman un diseño elegante con un toque de diseño vintage.',
      price: '$210.000',
      sku: 'KSDL6Z4QJ2X',
      cantidad: 1,
      calificacion: 5,
      imageUrl: 'img/Sillon0.jpg',
    },

    {
      id: 1,
      name: 'Sillón De Lectura ',
      description:
        'Sillón De Lectura de alta calidad sumamente cómodo y elegante de 4 patas de madera de haya maciza, que le da un toque muy elegante y moderno.',
      price: '$160.000',
      sku: 'GBJHAJKD4X',
      cantidad: 4,
      calificacion: 3.8,
      imageUrl: 'img/Sillon1.jpg',
    },

    {
      id: 2,
      name: 'Sillon Esquinero Living Malaga Camastro Móvil 3 Cuerpos',
      description:
        'Este sofá es perfecto para espacios modernos tropicales, espacios inspirados en el barroco, espacios con tonos terrosos y para personas que aman un diseño elegante con un toque de diseño vintage.',
      price: '$389.165',
      sku: 'KSDL6Z4QJ2X',
      cantidad: 1,
      calificacion: 5,
      imageUrl: 'img/Sillon2.jpg',
    },
    
    {
      id: 3,
      name: 'Sofa Cama 2 Plazas 2 Cuerpos Convertible Living Sillon Color Negro',
      description:
        'Este sofá de 2 cuerpos es el mueble que necesitás para compartir y disfrutar momentos con amigos y familia. Sus dimensiones son ideales para que tus invitados y vos se sientan cómodos y a gusto en un mismo lugar.',
      price: '$319.250',
      sku: 'WKLASD5KIE22E',
      cantidad: 1,
      calificacion: 5,
      imageUrl: 'img/Sillon3.jpg',
    },
    {
      id: 4,
      name: 'Elegante Sofá Estilo Nórdico',
      description:
        'Diseño elegante y minimalista que se adapta a cualquier decoración, Su tapizado en chenille le aporta un toque de lujo y suavidad',
      price: '$200,000',
      sku: 'JRESD4KJH7WS',
      cantidad: 1,
      calificacion: 5,
      imageUrl: 'img/Sillon4.jpg',
    },
    {
      id: 5,
      name: 'Sillon Trento One De 3 Cuerpos Chenille Premium',
      description:
        'Este sillón de 3 cuerpos es el mueble que necesitás para compartir y disfrutar momentos con amigos y familia. Sus dimensiones son ideales para que tus invitados y vos se sientan cómodos y a gusto en un mismo lugar.',
      price: '$232.199',
      sku: 'JNMHSD3LKWI9',
      cantidad: 1,
      calificacion: 5,
      imageUrl: 'img/Sillon5.jpg',
    },
  ];
  // Productos seleccionados para mostrar inicialmente
  const productosSeleccionados = [productos[0], productos[1], productos[2], productos[3], productos[4], productos[5]];

  // Manejador de clic en producto
  const handleProductClick = (productId) => {
    const selected = productos.find((product) => product.id === productId);
    setSelectedProduct(selected);
  };
  // Manejador de volver a la lista de productos
  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  // Estilos de la página
  const fondoPagina = {
    background: 'linear-gradient(to right, #d2b48c, #f5f5dc)',
  };

  return (
    <ChakraProvider>
      <div style={{ background: 'linear-gradient(to right, #d2b48c, #f5f5dc)', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flexGrow: 1 }}>
          {selectedProduct ? (
            <PaginaProducto product={selectedProduct} onBack={handleBackToProducts} />
          ) : (
            <MyCard productos={productosSeleccionados} onProductClick={handleProductClick} />
          )}
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default App;