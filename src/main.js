import Vue from 'vue';
import Clase from './Clase-7';

Vue.filter('lower', (value) => {
	return value.toLowerCase();
})

new Vue({
	el: '#app',
	render: h => h(Clase),
})
