import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js'
import App from './App.vue';
import BaseCard from './Components/Ui/BaseCard.vue';
import BaseButton from './Components/Ui/BaseButton.vue';
import BaseBadge from './Components/Ui/BaseBadge.vue';


const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.use(store);
app.use(router);

app.mount('#app');
