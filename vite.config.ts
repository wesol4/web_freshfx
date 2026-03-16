import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5175,
        allowedHosts: [
            'freshfx.pl',
            'www.freshfx.pl',
            '.freshfx.pl',
        ],
    },
    build: {
        outDir: 'dist',
    },
});

