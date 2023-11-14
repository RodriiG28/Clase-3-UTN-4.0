// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Clase-3UTN-4.0/', // Ajusta el nombre del repositorio aquí
  plugins: [react()],
});
