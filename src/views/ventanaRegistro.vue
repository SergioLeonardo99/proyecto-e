<template>

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.15/tailwind.min.css">
    <title>Registro empresarial</title>
    <!-- Tailwind css CDN -->

  </head>

  <body>

    <section class="flex flex-col md:flex-row h-screen items-center">

      <div class="bg-gray-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">

        <img
          src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fwall2.webp?alt=media&token=daf8ff02-99d6-4734-a5f1-b20162236fd4"
          alt="" class="w-full h-full object-cover">
      </div>

      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center">

        <div class="w-full h-100">

          <h1 class="text-3xl font-bold letra justify-center text-teal-700">Registro M&S</h1>

          <form class="mt-6">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingOne">
                  <button class="accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    Información de la empresa
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                  aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body py-4 px-5">
                    <div>
                      <label class="block letra text-gray-700">Nombre de la empresa: </label>
                      <input type="text" v-model="nombre" placeholder="Nombre de la empresa"
                        class="h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                        autofocus autocomplete required>
                    </div>

                    <div>

                      <label class="block letra text-gray-700">Nit de la empresa: </label>
                      <input type="number" v-model="nit" placeholder="Nit de la empresa"
                        class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                        autofocus autocomplete required>
                    </div>

                    <div>
                      <label class="block letra text-gray-700">Dirección: </label>
                      <input type="text" v-model="direccion" placeholder="Dirección de la empresa"
                        class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                        autofocus autocomplete required>
                    </div>

                    <div>
                      <label class="block letra text-gray-700">Sector de la empresa: </label>
                      <select v-model="sector"
                        class=" h-14 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                        <option disabled value="">Seleccione el sector de su empresa</option>
                        <option>Ganadería</option>
                        <option>Minería de carbón</option>
                        <option>Comercio</option>
                        <option>Arcillas</option>
                        <option>Gravas</option>
                        <option>Cuero y/o calzado</option>
                        <option>Artefactos domésticos</option>
                        <option>Equipo y Maquinaria eléctrica y electrónica</option>
                        <option>Lácteos</option>
                        <option>Convenio software y servicios asociados</option>
                        <option>Servicios de salud</option>
                        <option>Financiero</option>
                        <option>Telecomunicaciones </option>
                        <option>Servicios</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                  <button class="accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                    aria-expanded="false" aria-controls="flush-collapseTwo">
                    Información del representante de la empresa
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse"
                  aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body py-4 px-5">
                    <div>
                      <label class="block letra text-gray-700">Nombre del encargado: </label>
                      <input type="text" v-model="encargado" placeholder="Nombre del encargado"
                        class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        autofocus autocomplete required>
                    </div>

                    <div>
                      <label class="block letra text-gray-700">Cargo del encargado en la empresa: </label>
                      <input type="text" v-model="cargo" placeholder="Cargo del encargado"
                        class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        autofocus autocomplete required>
                    </div>

                    <div>
                      <label class="block letra text-gray-700">Correo electrónico: </label>
                      <input type="email" v-model="email" placeholder="Correo electrónico"
                        class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        autofocus autocomplete required>
                    </div>


                    <div>
                      <label class="block letra text-gray-700">Número de celular o teléfono: </label>
                      <input type="number" v-model="telefono" placeholder="Teléfono"
                        class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500 focus:bg-white focus:outline-none"
                        autofocus autocomplete required>
                    </div>

                  </div>
                </div>
              </div>
              <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 class="accordion-header mb-0" id="flush-headingThree">
                  <button class="accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                    aria-expanded="false" aria-controls="flush-collapseThree">
                    Credenciales
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body py-4 px-5">
                    <div class="mt-4">
                      <label class="block letra text-gray-700">Contraseña: </label>
                      <input type="password" v-model="contraseña" placeholder="Contraseña" minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500
                          focus:bg-white focus:outline-none" required>
                    </div>

                    <div class="mt-4">
                      <label class="block letra text-gray-700">Confirmar Contraseña: </label>

                      <input type="password" v-model="contraseñaConfirmar" placeholder="Confirmar contraseña"
                        minlength="6" class=" h-8 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-gray-500
                          focus:bg-white focus:outline-none" required>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <button type="button" @click="advancedRegister()" class=" letra w-full block bg-teal-700 hover:bg-teal-500 focus:bg-teal-500 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Registrarse</button>
            <p>{{ mensaje }}</p>

          </form>

          <hr class="my-4 border-gray-300 w-full">

          <p class="mt-4 letra">¿ya tienes cuenta ? <Router-link to="/ventanaL"
              class="text-teal-700 hover:text-teal-400 font-semibold">Iniciar Sesion</Router-link>
          </p>
          <p class="text-sm letra text-teal-700 mt-4">&copy; 2022 M&S.</p>
        </div>

      </div>

    </section>


  </body>

</template>

<script>

import "firebase/storage";
import firebase from "../components/firebase/initFirebase";
const db = firebase.firestore();


export default {
  components: {

  },
  data() {
    return {
      nombre: '',
      nit: null,
      direccion: '',
      telefono: null,
      contraseña: '',
      contraseñaConfirmar: '',
      mensaje: '',
      email: '',
      encargado: '',
      cargo: '',
      sector: ''

    }
  },
  methods: {
    advancedRegister() {
      if (this.nombre != '' && this.nit != 0 && this.direccion != '' && this.telefono != 0 && this.contraseña != '' && this.contraseñaConfirmar != '' && this.email != '' && this.encargado != '' && this.cargo != '' && this.sector != '') {
        if (this.contraseña == this.contraseñaConfirmar) {
          var docRef = db.collection("usuario").doc(this.nit.toString());
          var getOptions = {
          };
          docRef.get(getOptions).then((doc) => {
            if (doc.data().nit == this.nit.toString()) {
              this.mensaje = "Nit ya registrado..."
            }
          }).catch((error) => {
            let date = new Date().toLocaleDateString();
            var forge = require('node-forge');
            var input_str = this.contraseña;
            var md = forge.md.sha256.create();
            md.update(input_str);
            db.collection("usuario").doc(this.nit.toString()).set({
              nombre: this.nombre,
              nit: this.nit,
              direccion: this.direccion,
              telefono: this.telefono,
              email: this.email,
              encargado: this.encargado,
              cargo: this.cargo,
              contraseña: md.digest().toHex(),
              tipo: "empresa",
              fechaCreacion: date,
              estado: 'Activo',
              sector: this.sector,
              encuesta: 'No'
            })
              .then(() => {
                this.mensaje = "Empresa registrada con exito"
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
                this.mensaje = "No se pudo completar el registro, intente nuevamente"
              });

          });
        } else {
          this.mensaje = "Las contraseñas no coinciden..."
        }
      } else {
        this.mensaje = "Tiene que rellenar todos los campos..."
      }

    },
    register() {
      var forge = require('node-forge');
      var input_str = this.contraseña;
      var md = forge.md.sha256.create();
      md.update(input_str);
      db.collection("usuario").doc(this.nit.toString()).set({
        nombre: this.nombre,
        nit: this.nit,
        direccion: this.direccion,
        telefono: this.telefono,
        contraseña: md.digest().toHex(),
        tipo: "usuario"
      })
        .then(() => {
          this.mensaje = "Empresa registrada con exito"
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
          this.mensaje = "No se pudo completar el registro, intente nuevamente"
        });
    }

  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
  }
}




</script>
<style>
.letra {
  font-family: sans-serif;
}
</style>