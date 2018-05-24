<template>
  <div class="container">
    <div class="botones">
      <button @click="showOption('Libro')">Libro</button>
      <button @click="showOption('Autor')">Autor</button>
      <button @click="showOption('Libreria')">Libreria</button>
    </div>

    <!-- <Libro :titulo="titulo" :subtitulo="subtitulo" :resumen="resumen"> -->
    <div class="lc">
      <div class="lc-image">
        <img src="https://imagessl6.casadellibro.com/a/l/t0/06/9788493442606.jpg" alt="">
      </div>

    <keep-alive>
      <component :is="componenteSeleccionado">
        <template slot="titulo">
          {{ titulo }}
        </template>
        <template slot="contenido">
          <div>{{ subtitulo }}</div>
          <br>
          <div>
            <small>{{ resumen }}</small>
          </div>
        </template>
        <template slot="autor">
          {{ autor }}
        </template>
        <template slot="libreria">
          {{'R.M.'}}
        </template>
      </component>
    </keep-alive>
    </div>

  </div>
</template>

<script>
import Libro from './componentes/libro';
import Autor from './componentes/autor';
import Libreria from './componentes/libreria';

export default {
  data() {
    return {
      titulo: 'Pedro Páramo',
      subtitulo: 'La obra de Rulfo está considerada como uno de los exponentes más significativos e influyentes del llamado realismo mágico.',
      resumen: 'La obra de Juan Rulfo (19171986) es sin duda la creación literaria mexicana que ha recibido mayor reconocimiento dentro y fuera de su país. La novela Pedro Páramo tuvo una larga gestación. Rulfo la menciona por primera vez en una carta de 1947, y puede trabajar en ella hasta terminarla entre 1953 y 1954, gracias a una beca del Centro Mexicano de Escritores. En 1954 publica adelantos de la misma en tres revistas y en 1955 aparece como libro.',
      autor: 'Juan Rulfo',
      componenteSeleccionado: 'libro'
    };
  },
  components: {
    Libro,
    Autor,
    Libreria
  },
  methods: {
    showOption(value) {
      this.componenteSeleccionado = value;
    }
  }
};
</script>

<style lang="scss">

@import url(https://use.fontawesome.com/releases/v5.0.13/css/all.css);

html, body {
  align-items: center;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  justify-content: center;
  min-height: 100%;
  width: 100%;
}

body {
  background: #4CD8B7;
}

.container {
  max-width: 1280px;
  min-height: 100%;
  width: 100%;
}

div.lc {
  background: white;
  box-shadow: 0.3rem 0.3rem 0 2px #3DA897;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  width: 25%;
  h3 {
    margin: 0;
  }
}
</style>
