<template>
  <div class="container clase">

    <h3 class="titulo">Clase 1</h3>

    <div class="well">
      <strong v-once>{{ msg }}</strong>
      <br>
      <strong>{{ hola() }}</strong>
    </div>

    <div class="well">
      <a :href="google">Google</a>
    </div>

    <div class="well">
      <!-- Bindeamos la variable al parametro source -->
      <img v-bind:src="imgUrl" :alt="imgAlt">
      <hr>
      <!-- Bindeamos la variable al parametro source con shortcut -->
      <img :src="imgUrl" :alt="imgAlt">
    </div>

    <div class="well">
      <div v-html="html"></div>
    </div>

    <div class="well">
      <strong>Contador: </strong> <em>{{signo}}</em> {{contador}} <br>
      <small>Signo calculado en <em>CALCULATED</em></small><br>
      <button v-on:click="cPlusPlus">Incrementar</button>
      <button v-on:click="cLessLess">Decrementar</button>
      <button v-on:click="cAdd(2)">Incrementar 2</button>
      <hr>
      <strong>Contador 2: </strong> <em>{{signo2()}}</em> {{contador2}} <br>
      <small>Signo calculado en <em>METHOD</em></small><br>
      <button @click="contador2--">Decrementar contador 2</button>
    </div>

    <div class="well" @mousemove="printmousecord(2, $event)">
      <span>Al pausar el mouse arriba de este well se cambian las coordenadas: {{coordEvent.x}} {{coordEvent.y}} {{coordEvent.multiplier}}</span>
      <div @mousemove.stop style="background: #888">
        <span>Aqui no se cambian las cordenadas</span>
      </div>
    </div>

    <div class="well">
      Al presionar enter o espacio en este input se muestra una alerta:
      <input @keyup.enter.space="showAlert" type="text">
    </div>

    <div class="well">
      <h4>{{ saludo }}</h4>
      <input type="text" v-model="saludo">
    </div>

    <div class="well">
      <h4>Generador de avatar robot</h4>
      <p><img :src="robotUrl"></p>
      <br>
      Ingrese el nombre de su avatar: <br>
      <input type="text" v-model="robotName" @keyup.enter="updateUrl"> <br>
      <small>Presione enter para generar.</small>
    </div>

    <div class="well">
      <h4>Condicionales</h4>
      <small>Aqui solo se añade un elemento al DOM.</small>
      <br>
      <template v-if="show">
        Se muestra
      </template>
      <template v-else>
        No se muestra
      </template>
      <hr>
      <small>Aqui se añaden ambos elementos al DOM, pero uno se oculta con CSS.</small>
      <div v-show="show">
        Se muestra
      </div>
      <div v-show="!show">
        No se muestra
      </div>
      <hr>
      <div>
        <button @click="show = !show">Mostrar / Ocultar</button>
      </div>
    </div>

    <div class="well">
      <h4>Ciclos</h4>
      <b>Listado de strings.</b>
      <ul>
        <li v-for="(elemento, index) in elementos" :key="index">
          {{elemento}} [{{index}}]
        </li>
      </ul>

      <div>
        <h5>Añade tu elemento</h5>
        <input type="text" @keyup.enter="addElement">
      </div>
      <hr>
      <b>Listado de objetos.</b>
      <div v-for="(objeto, index) in listaObjetos" :key="index">
        <strong>{{objeto.nombre}}</strong>
        <ul>
          <li v-for="(item, key, itemIndex) in objeto" :key="itemIndex">
            [{{itemIndex}}] <em>{{key}}: </em> {{item}}
          </li>
        </ul>
      </div>
    </div>

    <div class="well">

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 1,
      google: 'http://google.com/',
      imgUrl: 'https://media.giphy.com/media/fQx9CwAvaK0okZGZyh/giphy-downsized.gif',
      imgAlt: 'Esto es google',
      html: "<a href='http://www.yahoo.com'>Yahoo</a>",
      contador: 0,
      contador2: 0,
      coordEvent: {x: 0, y: 0, multiplier: 0},
      timerContador: null,
      saludo: 'Soy un saludo',
      robotName: 'Lechuga',
      robotUrl: 'https://robohash.org/Lechuga',
      show: true,
      elementos: ["Elemento 1", "Elemento 2", "Elemento 3"],
      listaObjetos: [
        {nombre: "Elemento 1", tipo: "Elemento tipo 1"},
        {nombre: "Elemento 2", tipo: "Elemento tipo 2"},
        {nombre: "Elemento 3", tipo: "Elemento tipo 3"},
      ]
    };
  },
  methods: {
    hola() {
      this.msg = 2;
      return this.msg;
    },
    cPlusPlus() {
      this.contador++;
    },
    cLessLess() {
      this.contador--;
    },
    cAdd(value) {
      this.contador += value;
    },
    printmousecord(multiplier, e) {
      this.coordEvent = {x: e.x, y: e.y, multiplier}
    },
    showAlert() {
      alert("Soy una alerta");
    },
    signo2() {
      console.log("Cambio de signo en METHOD: Contador 2");
      if(this.contador2 > 0)
        return 'Positivo'
      else if(this.contador2 < 0)
        return 'Negativo'
      else
        return 'Cero';
    },
    addElement(e) {
      this.elementos.push(e.target.value);
      e.target.value = '';
    },
    updateUrl(){
      this.robotUrl = `https://robohash.org/${this.robotName}`;
    }
  },
  watch: {
    contador(newValue, prevValue) {
      console.log(`Ha cambiado el valor de contador ${prevValue} -> ${newValue}`);
      if(this.timerContador !== null) {
        clearTimeout(this.timerContador);
      }
      this.timerContador = setTimeout(() => {this.contador = 0}, 2000)
    },
  },
  computed: {
    signo() {
      console.log("Cambio de signo en COMPUTED: Contador 1");
      if(this.contador > 0)
        return 'Positivo'
      else if(this.contador < 0)
        return 'Negativo'
      else
        return 'Cero';
    }
  }
};
</script>

<style lang="scss">
@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css);

body {
  background: #DDD;
}

div.clase {
  background: #f0f0f0;
  margin: 0.5rem auto;
  padding: 1rem;

  > h3 {
    border-bottom: 1px solid #333;
    padding-bottom: 0.5rem;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  div.well {
    border: 1px dotted #333;
    padding: 0.4rem 0.5rem;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
