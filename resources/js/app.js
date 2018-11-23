
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('custom-avatar-editor', require('./components/vue-avatar'));
// Vue.component('upload-form', require('./components/UploadForm.vue'));
// or
import UploadForm from './components/UploadForm'
import SaveImage from './components/SaveImage'
import VueAvatar from './components/vue-avatar'


// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import Toasted from 'vue-toasted';

Vue.use(Toasted);

const app = new Vue({
    el: '#app',
    components: {UploadForm, SaveImage}
});
