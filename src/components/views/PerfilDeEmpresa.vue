<template>
    <!--llamado del navBar2 a la clase-->
    <navBar2></navBar2>
    <!--Intregacion de la imagen principal de la empresa-->

    <div class="">
        <div class=" mx-auto my-20 rounded-md overflow-hidden shadow-lg lg:max-w-full" v-if="imagenDescargada != null">
            <img class="object-cover rounded-full h-36 w-36 mx-auto m-1 p-1 border-4 border-cyan-600"
                :src="imagenDescargada" alt="" />


            <div class="px-6 py-4">
                <div class="flex flex-col">
                    <div class="font-bold text-xl text-center text-gray-800 hover:text-cyan-600 hover:cursor-pointer">
                        {{nombreEmpresa}}</div>
                    <p class="text-gray-600 text-sm text-center">Nombre de la organización</p>
                </div>

                <div class="flex flex-col">
                    <div class="font-bold text-xl text-center text-gray-800 hover:text-cyan-600 hover:cursor-pointer">
                        {{nitEmpresa}}</div>
                    <p class="text-gray-600 text-sm text-center">Nit de la empresa</p>
                    <div class="font-bold text-xl text-center text-gray-800 hover:text-cyan-600 hover:cursor-pointer">
                        {{email}}</div>
                    <p class="text-gray-600 text-sm text-center">Correo de la empresa</p>
                    <div class="font-bold text-xl text-center text-gray-800 hover:text-cyan-600 hover:cursor-pointer">
                        {{direccion}}</div>
                    <p class="text-gray-600 text-sm text-center">Dirección de la empresa</p>
                    <div class="font-bold text-xl text-center text-gray-800 hover:text-cyan-600 hover:cursor-pointer">
                        {{telefonoEmpresa}}</div>
                    <p class="text-gray-600 text-sm text-center">Telefono</p>
                    <div class="font-bold text-xl text-center text-gray-800 hover:text-cyan-600 hover:cursor-pointer">
                        {{encargado}}</div>
                    <p class="text-gray-600 text-sm text-center">Encargado</p>
                    <div class="font-bold text-xl text-center text-gray-800 hover:text-cyan-600 hover:cursor-pointer">
                        {{cargoEncargado}}</div>
                    <p class="text-gray-600 text-sm text-center">Cargo del encargado</p>
                </div>
                <div class="flex flex-row justify-center font-semibold mx-auto my-4">

                    <button @click="$router.push('/editprofile')" type="button"
                        class="bg-grey-light hover:bg-grey text-grey-darkest font-bold inline-flex items-center my-auto text-gray-800 py-1 px-4 border-2 border-cyan-600 hover:bg-cyan-600 hover:cursor-pointer hover:text-white rounded-3xl mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />

                        </svg>
                        <span>Editar perfil</span>
                    </button>

                </div>

                <p class="mt-2 text-black text-center">Acerca de la empresa</p>
                <br>
                <p class="text-black text-center font-light lg:px-16">{{about}}</p>
            </div>

        </div>


    </div>



</template>
<script>
//LLamado del navbar2 a la clase
import "firebase/storage";
import "firebase/firestore";
import firebase from "../../components/firebase/initFirebase";
import Seguridad from "../../components/js/encrypt.js";
const safe = new Seguridad();
const db = firebase.firestore();
const storage = firebase.storage();
var storageRef = storage.ref();


import navBar2 from './elementos/navbar2.vue'



export default {

    name: 'PerfilDeEmpresa',
    data() {
        return {
            nit: 0,
            nombreEmpresa: '',
            nitEmpresa: '',
            telefonoEmpresa: '',
            encargado: '',
            cargoEncargado: '',
            email: '',
            mensaje: '',
            direccion: '',
            imagenDescargada: null,
            about: '',

        }
    },
    components: {
        navBar2
    },

    methods: {
        cargarEmpresa() {

            this.nitEmpresa =safe.decrypt($cookies.get(safe.cipher('nit')))

            var docRef = db.collection("usuario").doc(this.nitEmpresa.toString());
           

            var getOptions = {
                //source: 'cache'
            };
            docRef.get(getOptions).then((doc) => {

                // Document was found in the cache. If no cached document exists,
                // an error will be returned to the 'catch' block below.
                this.nombreEmpresa = doc.data().nombre;
                this.nitEmpresa = doc.data().nit;
                this.telefonoEmpresa = doc.data().telefono;
                this.encargado = doc.data().encargado;
                this.cargoEncargado = doc.data().cargo;
                this.email = doc.data().email;
                this.direccion = doc.data().direccion;
                this.about = doc.data().about;
                this.cargarImagen()

            }).catch((error) => {
                this.$router.push('/');
            });
    },

    cargarImagen() {
        // Create a reference to the file we want to download
        var starsRef = storageRef.child('imagenes/' + this.nitEmpresa + '.jpg');

        // Get the download URL
        starsRef.getDownloadURL()
            .then((url) => {
                this.imagenDescargada = url;
                // Insert url into an <img> tag to "download"


            })
            .catch((error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/object-not-found':
                        this.imagenDescargada="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        break;
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
                }
            });








    },
},
    mounted() {
        this.cargarEmpresa()


    },

}

</script>
<style lang="css">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");

.imagen-carousel {
    height: 470px;
}

.alinearT {
    text-align: center;
}

.letra {
    font-family: sans-serif;
}
</style>
    
        























