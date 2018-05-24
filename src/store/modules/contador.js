const state = {
	contador: 0,
}

const getters = {
	contadorTexto(state) {
		return state.contador + ' clicks';
	},
	contadorDoble(state) {
		return state.contador * 2;
	},
	contador(state) {
		return state.contador;
	}
}

const mutations = {
	contadorIncrementar(state, payload) {
		state.contador += payload;
	},
	contadorDecrementar(state, payload) {
		state.contador -= payload;
	},
}

const actions = {
	contadorIncrementarAsync({commit}, {incremento, tiempo}) {
		setTimeout(() => {
			commit('contadorIncrementar', incremento)
		}, tiempo)
		
	},
	contadorDecrementarAsync({commit}, {incremento, tiempo}) {
		setTimeout(() => {
			commit('contadorDecrementar', incremento)
		}, tiempo)
	},
}

export default {
	state, 
	getters, 
	mutations, 
	actions
};