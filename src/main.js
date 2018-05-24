import Vue from 'vue';
import Clase from './Clase-7';

Vue.filter('lower', (value) => {
	return value.toLowerCase();
})

Vue.mixin({
	data() {
		return {
			saludo: 'Hola'
		}
	},
	created() {
		console.log('Mixin global');
	}
})

new Vue({
	el: '#app',
	render: h => h(Clase),
})
