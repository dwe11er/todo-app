import {defineConfig} from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/api': {
                target: 'http://http://localhost:5173/',
            },
        },
    },
});
