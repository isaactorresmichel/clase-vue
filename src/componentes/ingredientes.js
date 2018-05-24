export const IngredientesMixin = {
    data() {
        return {
            ingredientes: [
                'sal',
                'pimienta',
                'chile'
            ],
            filtroIngrediente: ''
        }
    },
    computed: {
        ingredientesfiltrados() {
            return this.ingredientes.filter(e => {
                return e.match(this.filtroIngrediente);
            })
        }
    }
}