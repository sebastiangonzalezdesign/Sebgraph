import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import envCompatible from 'vite-plugin-env-compatible'
import Vue from '@vitejs/plugin-vue' // Import the plugin

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    envPrefix: 'REACT_APP_',
    // This changes the output dir from dist to build
    // Comment this out if it isn't relevant for your project
    build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 2000, // Adjust chunk size warning limit
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor'
                    }
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
        Vue(), // Add the Vue plugin
    ],
    assetsInclude: ['**/*.riv'],
})
