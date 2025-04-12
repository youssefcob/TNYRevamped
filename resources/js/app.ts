import './bootstrap';
// import '../css/app.scss';
 
import { createApp, h, DefineComponent } from 'vue';  
import { createInertiaApp } from '@inertiajs/vue3';  
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import "vue3-snackbar/styles";
import router from './router'

// import { ZiggyVue } from 'ziggy';  
// const ZiggyVue = require("ziggy"); //works

  
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';  
  
createInertiaApp({  
    title: (title) => `${title} - ${appName}`,  
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),  
    setup({ el, App, props, plugin }) {  
        createApp({ render: () => h(App, props) })  
            .use(plugin)  
            .use(router) 
            .mount(el)
    },    progress: {  
        color: '#4B5563',  
    },});  