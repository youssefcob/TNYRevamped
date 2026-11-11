import { defineConfig } from 'vite';  
import laravel from 'laravel-vite-plugin';  
import vue from '@vitejs/plugin-vue';  
import path from 'path';

  
export default defineConfig({  
    "plugins":[  
        laravel({  
            "input": [
                // "resources/css/app.scss",
                "resources/js/app.ts"
            ],
            "ssr": "resources/js/ssr.ts",
            "refresh": true
        }),
        
        vue({  
            template: {  
                transformAssetUrls: {  
                    base: null,  
                    includeAbsolute: false,  
                },            
			},       
		 })    
	 ],
     resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '~':  'resources/css'

        }
    },

     // Bundle the SSR entry's dependencies (@inertiajs/vue3, vue, @vue/server-renderer, ...) into
     // bootstrap/ssr/ssr.js instead of importing them from node_modules at runtime: the AWS
     // instances run the SSR process without node_modules (the build happens in CI).
     ssr: {
        noExternal: true,
     },

     css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "~/app.scss";`,
            },
        },
    },
 });