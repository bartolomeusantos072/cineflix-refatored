import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  // Carregar as variáveis de ambiente do arquivo .env correspondente ao modo atual
  const env = dotenv.config({ path: `.env.${mode}` }).parsed;

  // Converter as variáveis de ambiente em formato adequado para uso com import.meta.env
  const envParsed = Object.keys(env).reduce((acc, key) => {
    acc[`import.meta.env.${key}`] = JSON.stringify(env[key]);
    return acc;
  }, {});

  return {
    plugins: [react()],
    define: envParsed
  };
});
