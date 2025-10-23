import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import envCompatible from 'vite-plugin-env-compatible'
import path from 'path'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        hmr: {
            overlay: false, // Disables the overlay that shows errors
        },
    },

    // This changes the output dir from dist to build
    // Comment this out if it isn't relevant for your project
    build: {
        // Target an older ECMAScript version so tools like react-snap's
        // headless Chromium (puppeteer) don't choke on newer syntax
        // such as optional chaining (?.) or nullish coalescing (??).
        // es2019 is a conservative choice that still supports modern
        // JS features while triggering esbuild to compile newer syntax.
        target: 'es2019',
        outDir: 'dist',
        sourcemap: true, // Enable source maps for bundle analysis
        chunkSizeWarningLimit: 2000, // Adjust chunk size warning limit
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // Split major libraries into separate chunks
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom')) {
                            return 'react-vendor'
                        }
                        if (id.includes('framer-motion')) {
                            return 'framer-motion'
                        }
                        if (id.includes('lottie-web')) {
                            return 'lottie'
                        }
                        if (id.includes('firebase')) {
                            return 'firebase'
                        }
                        if (id.includes('heroicons')) {
                            return 'heroicons'
                        }
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
        // Custom plugin to copy .htaccess file
        {
            name: 'copy-htaccess',
            closeBundle() {
                try {
                    copyFileSync('public/.htaccess', 'dist/.htaccess')
                    console.log('✅ .htaccess file copied to dist folder')
                } catch (error) {
                    console.warn(
                        '⚠️ Could not copy .htaccess file:',
                        error.message
                    )
                }
            },
        },
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
    define: {
        'process.env': process.env,
    },
})
