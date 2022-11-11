<template>
    <navBar2> </navBar2>
    <!--Creacion del formulario para las solicitudes-->
    <div
        class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
        <!--Inicio card-->

        <div class="absolute bg-white opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
            <div class="text-center letra">
                <h2 class="mt-6 text-3xl font-bold text-gray-900 letra">
                    Centro de solicitudes
                </h2>
                <form class="mt-8 space-y-6">

                    <div class="relative text-left">
                        <div class="absolute right-0 mt-4">
                        </div>
                        <label class="text-sm font-bold text-black tracking-wide">Encargado</label>
                        <input v-model="encargado"
                            class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-teal-700"
                            type="">
                    </div>
                    <div class="mt-8 content-center text-left">
                        <label class="text-sm font-bold text-black tracking-wide">
                            Teléfono
                        </label>
                        <input v-model="telefono"
                            class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-teal-700"
                            type="">
                    </div>
                    <div class="mt-8 content-center text-left">
                        <label class="text-sm font-bold text-black tracking-wide" for="lista">
                            Tipo de solicitud
                        </label>
                        <!--List option para visualizacion de opciones-->
                        <select v-model="solicitud" class="text-right letra w-48">
                            <option disabled value="" class="text-center">Seleccione</option>
                            <option>Software a la medida</option>
                            <option>Curso educativo</option>
                            <option>Soporte técnico</option>
                        </select>
                        <!--contenedor para escribir la solicitud-->

                    </div>
                    <div class="mt-8 content-center text-left">
                        <div class="form-group mb-6">
                            <textarea v-model="texto" class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-slate-400 focus:outline-none
                                " id="exampleFormControlTextarea13" rows="3" placeholder="Escribe aquí..."></textarea>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">


                        </div>
                    </div>
                    <div>
                        <button @click="enviarSolicitud()" type="button"
                            class="w-full flex justify-center bg-teal-700 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-teal-700 shadow-lg cursor-pointer transition ease-in duration-300">
                            Enviar solicitud
                        </button>
                    </div>
                </form>
                <h1>{{ mensaje }}</h1>
            </div>
        </div>
    </div>








</template>

<script>
import navbarCompany from '@/components/navbars/navbarCompany.vue'
import Seguridad from "../../components/js/encrypt.js";
import "firebase/firestore";
import firebase from "../../components/firebase/initFirebase";
const safe = new Seguridad();
const db = firebase.firestore();

export default {
    data() {
        return {
            solicitud: '',
            telefono: '',
            encargado: '',
            nit: '',
            texto: '',
            mensaje: ''

        }
    },

    name: 'solicitudes',
    components: {
        navBar2: navbarCompany
    },
    methods: {
        cargarEmpresa() {

            this.nit = safe.decrypt($cookies.get(safe.cipher('nit'))).toString()

            var docRef = db.collection("usuario").doc(this.nit.toString());


            var getOptions = {
                //source: 'cache'
            };
            docRef.get(getOptions).then((doc) => {

                // Document was found in the cache. If no cached document exists,
                // an error will be returned to the 'catch' block below.

                this.telefono = doc.data().telefono;
                this.encargado = doc.data().encargado;


            }).catch((error) => {
                this.$router.push('/');
            });
        },
        enviarSolicitud() {
            if (this.solicitud != '' && this.telefono != '' && this.encargado != '' && this.nit != '' && this.texto != '') {
                let date = new Date().toLocaleDateString();
                var solicitud = date + this.nit
                solicitud = solicitud.split("/").join('');
                db.collection("solicitudes").doc(solicitud).set({
                    solicitud: this.solicitud,
                    telefono: this.telefono,
                    encargado: this.encargado,
                    nit: this.nit,
                    texto: this.texto,
                    completada: 'No',
                    fechaCreacion: date,
                    admin: '',
                    fechaSolucion: '',
                    tipo: 'Empresa'
                })
                    .then(() => {
                        this.mensaje = "Solicitud realizada con exito"
                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                        this.mensaje = "No se pudo completar la solicitud, intente nuevamente"
                    });
            } else {
                this.mensaje = "Tiene que rellenar todos los campos..."
            }

        },


    },
    mounted() {
        this.cargarEmpresa()


    },
}

</script>


<style lang="css">
.letra {
    font-family: sans-serif;
}
</style>