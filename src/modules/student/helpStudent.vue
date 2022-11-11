<template>
    <navBar4></navBar4>
    <section class="bg-white">
        <div class="bg-white justify-center gap-4  p-3 alinearT">


            <br>
            <h3 class="font-semibold letra text-teal-900 text-3xl">

                Manual de usuario estudiante

            </h3>
        </div>
    </section>

    <footer>

        <div class="bg-teal-700 justify-center p-3">
        </div>

    </footer>

    <br>


    <div class="flex flex-col justify-center items-center ">
        <br>

        <div class="w-1/2 rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/img/card-top.jpg" alt="">
            <!--imagen de el manual de usario-->
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Documento Manual de usuario Estudiante</div>
                <p class="text-gray-700 text-base">
                    En este manual de usuario se explica como utilizar la aplicación de manera correcta y eficiente,
                    teniendo en cuenta que es el manual básico para interactuar con la aplicación.
                </p>

            </div>
            <button type="button" @click="descargarRecomendacion('https://drive.google.com/file/d/1xcRLNqJBs4HbfFYpG8FZ-WWrKbp_RR9j/view?usp=sharing','archivo.pdf')" class=" letra w-full block bg-teal-700 hover:bg-teal-500 focus:bg-teal-500 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Abrir manual estudiante</button>
        </div>

    </div>

</template>

<script>
import navbarStudent from '@/components/navbars/navbarStudent.vue'
export default {
    name: "help",
    components: {
        navBar4: navbarStudent

    },
    data() {
        return {
        }
    },
}

</script>