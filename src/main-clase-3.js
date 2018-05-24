import Vue from 'vue'
import App from './App.vue'
import Clase2 from './Clase-2.vue'
import Clase3 from './Clase-3.vue'
import Maestro from './componentes/maestro.vue'

export const CAMBIAR_EDAD = 'CAMBIAR_EDAD';
export const busEventos = new Vue({
  methods: {
    cambiarEdad(edad) {
      this.$emit('CAMBIAR_EDAD', edad);
    }
  }
});

Vue.directive('resaltar', {
  bind(el, binding) {
    let delay = 0;
    let opacity = true;
    let b1, b2, c;
    let colorAlterno;


    if(binding.modifiers['retraso']) {
      delay = binding.value.retraso || 3000;
    }

    if (binding.modifiers['colorAlterno']) {
      colorAlterno = binding.modifiers['colorAlterno'];
    }

    if(binding.modifiers['parpadear']) {
      setInterval(() => {
        [b1, b2] = [b2, b1];
        el.style.background = b1;
      }, 500)
    }

    setTimeout(() => {
      c = binding.value.colorTexto;
      b1 = binding.value.color;
      b2 = colorAlterno || binding.value.colorTexto;

      if(binding.arg == 'invertido') {
        el.style.color = b1;
        el.style.background = b2;
      } else {
        el.style.background = b1;
        el.style.color = b2;
      }
    }, delay);

    el.style.padding = '1rem';
  }
})

Vue.component('Maestro', Maestro);

new Vue({
  el: '#app',
  render: h => h(Clase3)
})
