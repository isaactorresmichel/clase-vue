import Vuex from 'vuex';
import Vue from 'vue';

import ContadorModule from './modules/contador.js';
import * as Actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		valor: 123213
	},
	getters: {
		valor(state) {
			return state.valor;
		}
	},
	mutations: {
		setValor(state, payload) {
			state.valor = payload;
		}
	},
	actions: {
		...Actions
	},
	modules: {
		ContadorModule
	}
});