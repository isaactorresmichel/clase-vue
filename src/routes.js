import Home from './componentes/home';
import Header from './componentes/header';
import Footer from './componentes/footer';
// import Usuario from './componentes/usuarios/usuario';
// import UsuarioDetalle from './componentes/usuarios/usuario-detalle';
// import UsuarioEditar from './componentes/usuarios/usuario-editar';
// import Usuarios from './componentes/usuarios/usuarios';

const UsuarioDetalle = (resolve) => {
	require.ensure(['./componentes/usuarios/usuario-detalle.vue'], () => {
		resolve(require('./componentes/usuarios/usuario-detalle.vue'));
	}, 'usuario')
};

const Usuario = (resolve) => {
	require.ensure(['./componentes/usuarios/usuario.vue'], () => {
		resolve(require('./componentes/usuarios/usuario.vue'));
	}, 'usuario')
};

const UsuarioEditar = (resolve) => {
	require.ensure(['./componentes/usuarios/usuario-editar.vue'], () => {
		resolve(require('./componentes/usuarios/usuario-editar.vue'));
	}, 'usuario')
};

const Usuarios = (resolve) => {
	require.ensure(['./componentes/usuarios/usuarios.vue'], () => {
		resolve(require('./componentes/usuarios/usuarios.vue'));
	}, 'usuario')
};

export const routes = [
	{
		path: '/', components: {
			default: Home,
			header: Header,
			footer: Footer
		}, name: 'home'
	},
	{
		path: '/usuario',
		components: {
			default: Usuario,
			header: Header,
			footer: Footer
		},
		children: [
			{ path: '', component: Usuarios, name: 'usuario' },
			{
				path: ':id',
				component: UsuarioDetalle,
				name: 'usuario-detalle',
				beforeEnter: (from, to, next) => {
					console.log('beforeEnter local');
					next();
				}
			},
			{ path: ':id/editar', component: UsuarioEditar, name: 'usuario-editar' }
		]
	},
	{ path: '*', redirect: { name: 'home' } },
	{ path: '/primer-usuario', redirect: { name: 'usuario-detalle', params: { id: 1 } } }
];