import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        allowedHosts: [
            'localhost',
            'localhost:8080',
        ]
    }
});