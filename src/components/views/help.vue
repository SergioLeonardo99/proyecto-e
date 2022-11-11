<template>

    <section class="bg-white">
        <div class="bg-white justify-center gap-4  p-3 alinearT">


            <br>
            <h3 class="font-semibold letra text-teal-900 text-3xl">

                Manual de usuario

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
                <div class="font-bold text-xl mb-2">Manual de usuario</div>
                <p class="text-gray-700 text-base">
                    En este manual de usuario se explica como utilizar la aplicación de manera correcta y eficiente,
                    teniendo en cuenta que es el manual básico para iteracuar con la aplicación, cuando el usuario
                    obtenga
                    sus creneciales según su rol se le otorgará un manual interno.
                </p>

            </div>
            <button type="submit" class="
                                        w-full
                                        px-6
                                        py-2.5
                                        bg-teal-700
                                        text-white
                                        font-medium
                                        text-xs
                                        leading-tight
                                        uppercase
                                        rounded
                                        shadow-md
                                        hover:bg-teal-500 hover:shadow-lg
                                        focus:bg-teal-800 focus:shadow-lg focus:outline-none focus:ring-0
                                        active:bg-teal-800 active:shadow-lg
                                        transition
                                        duration-150
                                        ease-in-out">Ingresar</button>
        </div>

    </div>

</template>

<script>

export default {
    name: "help",
    components: {


    },
    data() {
        return {
        }
    },
}

</script>