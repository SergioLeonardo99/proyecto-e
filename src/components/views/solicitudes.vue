<template>
    <navBar2> </navBar2>
    <!--Creacion del formulario para las solicitudes-->
    <div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center">
        <!--Inicio card-->

        <div class="absolute bg-white opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
            <div class="text-center letra">
                <h2 class="mt-6 text-3xl font-bold text-gray-900 letra">
                    Centro de solicitudes
                </h2>
                <form class="mt-8 space-y-6">
                    <input type="hidden" name="remember" value="true">
                    <div class="relative text-left">
                        <div class="absolute right-0 mt-4">
                        </div>
                        <label class="text-sm font-bold text-black tracking-wide">Encargado</label>
                        <input
                            class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-teal-700"
                            type="">
                    </div>
                    <div class="mt-8 content-center text-left">
                        <label class="text-sm font-bold text-black tracking-wide">
                            Teléfono
                        </label>
                        <input
                            class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-teal-700"
                            type="">
                    </div>
                    <div class="mt-8 content-center text-left">
                        <label class="text-sm font-bold text-black tracking-wide" for="lista">
                            Tipo de solicitud
                        </label>
                        <!--List option para visualizacion de opciones-->
                        <select id="lista" class="text-right letra">
                            <option value="seleccionar">Seleccione</option>
                            <option value="opcion1">Software a la medida</option>
                            <option value="opcion2">Curso educativo</option>
                            <option value="opcion3">Soporte técnico</option>
                        </select>
                        <!--contenedor para escribir la solicitud-->

                    </div>
                    <div class="mt-8 content-center text-left">
                        <div class="form-group mb-6">
                            <textarea class="
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
                            <input id="remember_me" name="remember_me" type="checkbox"
                                class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded">
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                Recordar usuario
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full flex justify-center bg-teal-700 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-teal-700 shadow-lg cursor-pointer transition ease-in duration-300">
                            Enviar solicitud
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>








</template>

<script>
import navBar2 from './elementos/navbar2.vue'

export default {

    name: 'solicitudes',
    components: {
        navBar2
    },
    methods: {

    }
}

</script>


<style lang="css">
.letra {
    font-family: sans-serif;
}
</style>