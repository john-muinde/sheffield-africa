import './bootstrap';
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index";
import store from "./store";

import { VueReCaptcha } from 'vue-recaptcha-v3'

//vue-meta
import { createHead } from "@vueuse/head";
const head = createHead();

import v3gmaps from 'v3-gmaps'

import 'v3-gmaps/dist/style.css';

//Sweetalert
import Swal from "sweetalert2";
window.Swal = Swal;

import VueSweetalert2 from "vue-sweetalert2";
import useAuth from './composables/auth';
import { abilitiesPlugin } from '@casl/vue';
import ability from './services/ability';
import vSelect from "vue-select";

import 'sweetalert2/dist/sweetalert2.min.css';
import 'vue-select/dist/vue-select.css';

//import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';




import VueLazyload from 'vue-lazyload';

//vue-i18n
import i18n from "./i18n";

// set default settings
import appSetting from "./app-setting";
window.$appSetting = appSetting;
window.$appSetting.init();


import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const app = createApp(App);

//app.use(head)

app.use(v3gmaps, { key: 'AIzaSyAV5GPnyrFfMBtEF1jRuANU7z5_4pA7P2w', libraries: ['visualization'] })

app.use(VueReCaptcha, { siteKey: '6Ldyw1wpAAAAAGx6vRq1hhnnfKaKHPmcuJ0imPkT'})

app.provide('useAuth', useAuth());

app.use(VueLazyload);

app.use(VueSweetalert2)

app.use(head)

/*app.use(TawkMessengerVue, {
  propertyId : '65671f781db16644c555cfd1',
  widgetId : '1hgdd5rrn'
});*/

// datatables
import { ClientTable } from "v-tables-3";

app.use(ClientTable)

app.use(abilitiesPlugin, ability)
//app.component('Pagination', LaravelVuePagination)
app.component("v-select", vSelect);

app.use(store).use(router).use(i18n).mount("#app");