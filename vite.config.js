import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import envCompatible from 'vite-plugin-env-compatible'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        hmr: {
            overlay: false, // Disables the overlay that shows errors
        },
    },
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
    ],
    assetsInclude: ['**/*.riv'],

    // Adding SCSS modern-compiler option
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
                silenceDeprecations: ['mixed-decls'], // Using the modern Dart Sass API
            },
        },
    },
})
