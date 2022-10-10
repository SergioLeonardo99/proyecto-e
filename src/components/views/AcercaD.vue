<template>
    <!--Intregracion de un icono en forma de flecha para el redireccionamiento a la pagina principal-->
    <!--seccion de titulo-->
    <section class="bg-white">
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <Navbar></Navbar>
        
            <br>
            <h3 class="font-semibold letra text-teal-900 text-3xl">

                Micro and Small Companys

            </h3>
        </div>
    </section>
    <!--contenedor de informacion sobre la empresa -->
    <div class="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10">
        <div class="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-teal-700 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">¿Quienes somos? </p>
                <p class="mt-2 text-sm text-slate-500">Micro and Small Companys es un proyecto desarrollado en un
                    entorno universitario enfocado en las micro y pequeñas empresas de la Villa de San Diego de Ubaté.
                </p>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-teal-700 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">¿Para qué? </p>
                <p class="mt-2 text-sm text-slate-500">Optimización de procesos, informar a la comunidad empresarial,
                    conectar empresas con el entorno universitario y amplia visión de las capacidades tecnológicas en
                    las micro y pequeñas empresas de la Villa de San Diego de Ubaté.</p>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-teal-700 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">¿Cuál es nuestro objetivo? </p>
                <p class="mt-2 text-sm text-slate-500">Identificar las capacidades tecnológicas en las micro y pequeñas
                    empresas, con el fin de reconocer su posibilidad de mejora a través del estudio e implementación de
                    un desarrollo de software multiplataforma en la Villa de San Diego de Ubaté, Cundinamarca.</p>
            </div>


            <div
                class="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-teal-700 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">¿Cuáles son nuestras principales metas? </p>
                <p class="mt-2 text-sm text-slate-500">-Identificar las capacidades tecnologías en las Micro y Pequeñas
                    empresas de la Villa de san Diego de Ubaté.
                    <br>
                    -Capacitar a los representantes de las empresas con los cursos básicos de la plataforma.
                    <br>
                    -Generar confianza en la plataforma a través de los resultados de las encuestas y el desarrollo
                    consecutivo a la actividad anterior.
                    <br>
                    -Generar oportunidad de contacto entre la Universidad de Cundinamarca y las micro y pequeñas
                    empresas.

                </p>
            </div>

            <div
                class="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-teal-700 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">¿Por qué es importante generar encuestas? </p>
                <p class="mt-2 text-sm text-slate-500">Las encuestas proporcionan números y datos concretos, lo cual es
                    importante para tomar decisiones a base de información proveída por los mismos representantes de las
                    empresas. Las encuestas generalmente ayudan a revelar el “Por qué ” es decir que los datos esta en
                    constante estudio y son confiables para generar un resultado más preciso y finalmente las encuestas
                    dan voz, lo que significa que a través de estas se puede tener en cuenta lo que la empresa requiere
                    e identificar sus falencias en cuanto a sus capacidades tecnológicas.</p>
            </div>

            <div class="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-teal-700 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg></span>
                <p class="text-xl font-medium text-slate-700 mt-3">¿Por qué utilizar nuestra plataforma?</p>
                <p class="mt-2 text-sm text-slate-500">La plataforma de Micro and Small Companys es un sitio donde las
                    micro y pequeñas empresas de la Villa de San Diego de Ubaté pueden proporcionar sus datos puntuales
                    por medio de una encuesta, los cuales se albergarán en una base de datos para su debido proceso y
                    entrega de resultado final. El equipo de trabajo se encarga de mantener los datos seguros,
                    mantenibilidad de la plataforma para evitar perdida de datos y robo de información.
                </p>
            </div>
        </div>
    </div>

    <!--esta seccion es el equipo de trabajo-->
    <!--seccion de titulo-->
    <section class="bg-white">
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <br>
            <h3 class="font-semibold letra text-teal-900 text-3xl">

                Equipo de trabajo

            </h3>
        </div>
    </section>

    <section class="bg-white">
        <div>
            <div class=" bg-white flex justify-center gap-4 grid-rows grid-rows-3 p-3">
                <!---contenedor principal de avatars-->
                <div class="w-1/2 p-3 alinearT  bg-center rounded-md shadow-lg">
                    <div class="text-center">
                        <img src="@/assets/EdilsonYomayuza.jpeg" alt="Edilson Yomayuza"
                            class="rounded-full w-32 h-32 mx-auto">
                        <h5 class="text-xl font-medium leading-tight mb-2">Edilson Yadir Yomayuza Guzman</h5>
                        <p class="text-gray-500">Ingeniero de sistemas
                            <br>
                            (Desarrollador backend)
                            <br>
                            eyomayuza@ucundinamarca.edu.co
                            <br>
                        <div class="flex flex-col justify-center items-center">
                            <a href="https://www.linkedin.com/in/edilson-yadir-yomayuza-guzman-7675b7241/">
                                <svg class="w-8 h-8 text-blue-500 bg-withe fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        </p>
                    </div>

                </div>

                <div class="w-1/2 p-3 alinearT  bg-center bg-cover rounded-md shadow-lg">
                    <div class="text-center">
                        <img src="@/assets/BrayanMedina.jpeg" alt="Brayan Medina"
                            class="rounded-full w-32 h-32 mx-auto">
                        <h5 class="text-xl font-medium leading-tight mb-2">Brayan Felipe Medina Duarte</h5>
                        <p class="text-gray-500">Ingeniero de sistemas
                            <br>
                            (Desarrollador backend)
                            <br>
                            bfmedina@ucundinamarca.edu.co
                            <br>
                        <div class="flex flex-col justify-center items-center">
                            <a href="https://www.linkedin.com/in/brayan-felipe-medina-duarte-241826234/">
                                <svg class="w-8 h-8 text-blue-500 bg-withe fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white">
        <div>
            <div class=" bg-white flex justify-center gap-4 grid-rows grid-rows-3 p-3">
                <!---contenedor principal-->
                <div class="w-1/2 p-3 alinearT  bg-center rounded-md shadow-lg">
                    <div class="text-center">
                        <img src="@/assets/FelipeGuarnizo.jpeg" alt="Felipe Guarnizo"
                            class="rounded-full w-32 h-32 mx-auto">
                        <h5 class="text-xl font-medium leading-tight mb-2">Cristian Felipe Saenz Guarnizo</h5>
                        <p class="text-gray-500">Ingeniero de sistemas
                            <br>
                            (Analista de pruebas de software )
                            <br>
                            cfsaenz@ucundinamarca.edu.co
                            <br>
                        <div class="flex flex-col justify-center items-center">
                            <a href="https://www.linkedin.com/in/cristian-felipe-saenz-guarnizo-879a92239/">
                                <svg class="w-8 h-8 text-blue-500 bg-withe fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        </p>

                    </div>

                </div>

                <div class="w-1/2 p-3 alinearT  bg-center bg-cover rounded-md shadow-lg">
                    <div class="text-center">
                        <img src="@/assets/KarenMaldonado.jpeg" alt="Karen Maldonado"
                            class="rounded-full w-32 h-32 mx-auto">
                        <h5 class="text-xl font-medium leading-tight mb-2">Karen Yised Maldonado Rincón</h5>
                        <p class="text-gray-500">Ingeniero de sistemas
                            <br>
                            (Desarrollador frontend)
                            <br>
                            kymaldonado@ucundinamarca.edu.co
                            <br>

                        <div class="flex flex-col justify-center items-center">
                            <a href="https://www.linkedin.com/in/karen-maldonado-8a2121214/">
                                <svg class="w-8 h-8 text-blue-500 bg-withe fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <section class="bg-white">
        <div>
            <div class=" bg-white flex justify-center gap-4 grid-rows grid-rows-3 p-3">
                <!---contenedor principal-->
                <div class="w-1/2 p-3 alinearT  bg-center rounded-md shadow-lg">
                    <div class="text-center">
                        <img src="@/assets/SergioVega.jpeg" alt="Sergio Vega" class="rounded-full w-32 h-32 mx-auto">
                        <h5 class="text-xl font-medium leading-tight mb-2">Sergio Leonardo Vega </h5>
                        <p class="text-gray-500">Ingeniero de sistemas
                            <br>
                            (Desarrollador frontend)
                            <br>
                            slvega@ucundinamarca.edu.co
                            <br>

                        <div class="flex flex-col justify-center items-center">
                            <a href="https://www.linkedin.com/in/sergio-leonardo-vega-corredor-99260b1b2/">
                                <svg class="w-8 h-8 text-blue-500 bg-withe fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        </p>
                    </div>

                </div>

                <div class="w-1/2 p-3 alinearT  bg-center bg-cover rounded-md shadow-lg">
                    <div class="text-center">
                        <img src="@/assets/SegundoCortes.jpeg" alt="Segundo Cortes"
                            class="rounded-full w-32 h-32 mx-auto">
                        <h5 class="text-xl font-medium leading-tight mb-2">Segundo Leonardo Cortes López</h5>
                        <p class="text-gray-500">Ingeniero industrial
                            <br>
                            (Especialista en gestión estratégica de proyectos)
                            <br>
                            sleonardocortes@ucundinamarca.edu.co.
                            <br>

                        <div class="flex flex-col justify-center items-center">
                            <a href="https://www.linkedin.com/in/segundo-leonardo-cortes-lopez-19123999">
                                <svg class="w-8 h-8 text-blue-500 bg-withe fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        </p>
                    </div>
                </div>

                <div class="w-1/2 p-3 alinearT  bg-center bg-cover rounded-md shadow-lg">
                    <div class="text-center">
                        <img src="@/assets/CristianCano.jpeg" alt="Cristian Cano"
                            class="rounded-full w-32 h-32 mx-auto">
                        <h5 class="text-xl font-medium leading-tight mb-2">Cristian Eduardo Cano López </h5>
                        <p class="text-gray-500">Ingeniero de sistemas
                            <br>
                            (Especialista en TIC aplicada a la enseñanza)
                            <br>
                            cecano@ucundinamarca.edu.co
                            <br>

                        <div class="flex flex-col justify-center items-center">
                            <a href="https://www.linkedin.com/in/cristian-cano-778b70115/">
                                <svg class="w-8 h-8 text-blue-500 bg-withe fill-current"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!--footer para fin de pagina-->
    <footer>

        <div class="bg-teal-700 justify-center p-3">
        </div>

    </footer>
</template>

<script>
import Navbar from './elementos/navbar.vue'
export default {
    name: "AcercaDe",
    components: {
        Navbar


    },
    data() {
        return {
        }
    },
}
</script>
<style lang="css">

</style>