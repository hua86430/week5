import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import '../node_modules/animate.css/animate.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.use(AOS);
AOS.init();
app.mount('#app');
