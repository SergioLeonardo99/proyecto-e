<template>
    <navBar2></navBar2>
    <!--Creacion del formulario para las solicitudes-->
   
    <button type="button" @click="descargarRecomendacion('https://drive.google.com/file/d/1o1MCXw3L0KrsiPuhf3Cnam2rBfOGe2eb/view?usp=sharing','archivo.pdf')" class=" letra w-full block bg-teal-700 hover:bg-teal-500 focus:bg-teal-500 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Descargar</button>








</template>

<script>
import navBar2 from './elementos/navbar2.vue'
import firebase from "../../components/firebase/initFirebase";
import "firebase/storage";
const storage = firebase.storage();
var storageRef = storage.ref();


export default {
    data() {
        return {
            texto: '',
            

        }
    },

    name: 'solicitudes',
    components: {
        navBar2
    },
    methods: {
        descargarRecomendacion(ruta, nombre){
            const downloadIInstance = document.createElement('a')
            downloadIInstance.href = ruta
            downloadIInstance.target = '_blank'
            downloadIInstance.download = nombre
            document.body.appendChild(downloadIInstance)
            downloadIInstance.click()
            document.body.removeChild(downloadIInstance)

        },
        descargarFirestore(){
            storageRef.child('recomendaciones/re.pdf').getDownloadURL()
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                var blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

               
            })
            .catch((error) => {
                // Handle any errors
            });
        },
        


    },
    mounted() {
        

    },
}

</script>


<style lang="css">
.letra {
    font-family: sans-serif;
}
</style>