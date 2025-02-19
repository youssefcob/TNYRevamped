import { defineConfig } from 'vite';  
import laravel from 'laravel-vite-plugin';  
import vue from '@vitejs/plugin-vue';  
  
  
export default defineConfig({  
    "plugins":[  
        laravel({  
            "input": [  
                "resources/css/app.scss",  
                "resources/js/app.ts"  
            ],  
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
            // '@': 'resources/js',
            '~':  'resources/css'

        }
    },

     css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "~/app.scss";`,
            },
        },
    },
 });