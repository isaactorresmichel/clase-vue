import Vue from 'vue';
import VueRouter from 'vue-router';
import Clase from './Clase-7';
import {routes} from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return to.hash ? {selector: to.hash} : {x: 0, y: 0};
	}
});

router.beforeEach((to, from, next) => {
	console.log('Before each global');
	next();
})

new Vue({
  el: '#app',
  render: h => h(Clase),
  router
})
