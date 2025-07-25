import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        define: {
            'process.env.API_KEY': JSON.stringify(env.API_KEY || env.GEMINI_API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        // DODAJ TO:
        server: {
            host: '0.0.0.0',
            port: 5175,
            allowedHosts: ['freshfx.pl', 'www.freshfx.pl'],
        },
    };
});
