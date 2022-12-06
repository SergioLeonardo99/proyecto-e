
<template>
    <!--Llamado del navbar a la clase-->
    <Navbar>

    </Navbar>
    <!-- Crear carrusel de imagenes con vuejs para informacion-->

    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden h-50">
            <div class="carousel-item active float-left w-full ">
                <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2F1.webp?alt=media&token=61dd3881-8719-4a27-ab79-ad18bd9bd6eb"
                    class="block w-full imagen-carousel" alt="ImagenDeInfomacion1" />
            </div>
            <div class="carousel-item float-left w-full">
                <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2F3.webp?alt=media&token=c8cab1d6-ae23-4d1d-987f-9706cca64f6d"
                    class="block w-full imagen-carousel" alt="ImagenDeInfomacion2" />
            </div>
            <div class="carousel-item float-left w-full">
                <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2F2.webp?alt=media&token=eae98eea-ebbd-47ae-af54-4441204f1f80"
                    class="block  w-full imagen-carousel " alt="ImagenDeInfomacion3" />
            </div>
        </div>
        <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Anteriormente</span>
        </button>
        <button
            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span class="visually-hidden">Despues</span>
        </button>
    </div>
    <!--Sector div para titulacion de los sectores-->

    <section class="bg-white">
        <div class="bg-white justify-center gap-4  p-3 alinearT">
            <h3 class="font-semibold letra text-teal-900 text-3xl">
                Sectores
            </h3>
        </div>
    </section>

    <!--Division de sectores-->

    <section class="bg-white">
        <div>
            <div class=" bg-white flex justify-center gap-4 grid-rows grid-rows-2 p-3">
                <!---contenedor principal de los sectores economicos-->
                <div
                    class="w-1/2 p-3 alinearT bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgMineria.webp?alt=media&token=598055f3-fc2a-4ae9-b757-9449c8af360a')] bg-center rounded-md shadow-lg">
                    <h1 class=" w-50 p5 letra text-2xl p-6 text-white">Minero</h1>
                </div>

                <div
                    class="w-1/2 p-3 alinearT bg-[url('https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgLacteo.webp?alt=media&token=9e6a117e-6009-4fd6-a7ad-874649685a74')] bg-center bg-cover rounded-md shadow-lg">
                    <h1 class="w-50 letra text-2xl p-6 text-white ">Lechero</h1>
                </div>
            </div>

            <div class=" bg-white grid md:grid-cols-2">
                <!---contenedor principal para la informacion acerca de los sectores-->
                <div
                    class="m-5 p-3 alinearT border-2 px-1 py-1 border-slate-200  rounded-md indent-8 shadow-lg text-center">
                    <div class="text-center p-8">

                        <p>La minería consiste en la extracción y explotación de minerales. Los recursos están
                            presentes de forma directa o indirecta en la vida cotidiana de la comunidad. El sector
                            minero es muy influyente
                            en la economía del municipio.</p>
                        <br>
                        <p>La provincia de Ubaté tiene gran producción de carbón, se reconoce por ser pequeña y
                            mediana minería. Esta actividad económica genera empleos para muchas
                            familias del municipio.</p>
                    </div>
                </div>
                <div
                    class="m-5 p-3 alinearT border-2 px-1 py-1 border-slate-200  rounded-md indent-8 shadow-lg text-center">
                    <div class="text-center p-8">

                        <p>El sector lácteo es una actividad económica que produce grandes oportunidades de negocio
                            tanto en mercado interno, como en los nuevos mercados. Todo esto es posible a raíz del libre
                            comercio.</p>
                        <br>
                        <p>El municipio de Ubaté es reconocido por la producción láctea, la elaboración y
                            comercialización de productos lácteos. El sector en general promueve el desarrollo económico
                            del
                            municipio y es generador de empleo. </p>
                    </div>
                </div>
            </div>
        </div>
        <!--seccion de titulo para los beneficios-->
        <section class="bg-white">
            <div class="bg-white justify-center gap-4 p-3 alinearT">
                <h3 class="font-semibold letra text-teal-900 text-3xl">
                    Beneficios
                </h3>
            </div>
        </section>

        <div>
            <div class=" bg-white grid md:grid-cols-2">
                <!---contenedor principal de dos cards para informacion de la plataforma-->
                <div class="p-3 alinearT border-2 px-1 py-1 border-slate-200 rounded-md shadow-lg">
                    <h1 class=" w-50 p5 letra text-2xl p-6 text-slate-600">¡Importante!</h1>
                    <div class="grid md:grid-cols-1">
                        <!-- 1 -->
                        <div class="m-2 shadow-lg  text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
                            id="static-example" role="alert" aria-live="assertive" aria-atomic="true"
                            data-mdb-autohide="false">
                            <div
                                class="bg-emerald-400 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-white rounded-t-lg">
                                <p class="font-bold text-white flex items-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle"
                                        class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
                                        </path>
                                    </svg>
                                    Equipo de trabajo
                                </p>

                            </div>
                            <div class="p-3 bg-emerald-400 rounded-b-lg break-words text-white">
                                Somos un equipo de trabajo capacitado para afrontar retos y exigencias,
                                con respecto al análisis de capacidades tecnológicas en micro y pequeñas empresas de la
                                provincia de Ubaté.
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="m-2 bg-slate-700 shadow-lg  text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
                            id="static-example" role="alert" aria-live="assertive" aria-atomic="true"
                            data-mdb-autohide="false">
                            <div
                                class="bg-slate-700 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-white rounded-t-lg">
                                <p class="font-bold text-white flex items-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                        data-icon="check-circle " class="w-4 h-4 mr-2 fill-current" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                        </path>
                                    </svg>
                                    Integración
                                </p>

                            </div>
                            <div class="p-3 bg-slate-700 rounded-b-lg break-words text-white">
                                La integración de datos y procesos se desarrolla a partir de investigación y es
                                finalmente experimentada con
                                los representantes de las empresas.
                            </div>
                        </div>
                        <!-- 3 -->
                        <div class="m-2 bg-teal-700  text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
                            id="static-example" role="alert" aria-live="assertive" aria-atomic="true"
                            data-mdb-autohide="false">
                            <div
                                class="bg-teal-700 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-white rounded-t-lg">
                                <p class="font-bold text-white flex items-center">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle"
                                        class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z">
                                        </path>
                                    </svg>
                                    Eficiencia y eficacia
                                </p>

                            </div>
                            <div class="p-3 bg-teal-700 rounded-b-lg break-words text-white">
                                La disposición de información y de personal, aprueba la eficiencia del sistema. Además,
                                la confianza y la convicción permite que se alcancen los resultados esperados.
                            </div>
                        </div>
                        <!-- 4 -->
                        <div class="m-2 bg-white shadow-lg text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
                            id="static-example" role="alert" aria-live="assertive" aria-atomic="true"
                            data-mdb-autohide="false">
                            <div
                                class="bg-emerald-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-white rounded-t-lg">

                                <p class="font-bold text-white flex items-center ">
                                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate"
                                        viewBox="0 0 64 64" width="10pt" height="10pt">

                                        <defs>
                                            <clipPath id="_clipPath_oGEXOa5DnGmvVyg1JKHgOpniOj9g9PM6">
                                                <rect width="64" height="64" />
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#_clipPath_oGEXOa5DnGmvVyg1JKHgOpniOj9g9PM6)">
                                            <path
                                                d=" M 29.333 0.433 C 27.87 0.433 26.665 1.646 26.665 3.118 L 26.665 5.405 C 21.126 6.437 16.001 9.055 11.903 12.947 L 10.471 11.506 L 16.366 5.573 L 15.736 4.943 C 14.009 3.201 11.663 2.224 9.218 2.23 C 6.853 2.23 4.492 3.132 2.696 4.943 C -0.899 8.56 -0.899 14.454 2.696 18.073 L 3.321 18.706 L 9.215 12.772 L 10.645 14.213 C 5.7 19.499 2.661 26.619 2.661 34.448 C 2.661 43.644 6.846 51.865 13.399 57.285 L 8.256 62.46 C 8.023 62.684 7.93 63.017 8.013 63.331 C 8.093 63.644 8.336 63.889 8.648 63.97 C 8.959 64.053 9.291 63.96 9.513 63.725 L 14.82 58.382 C 19.814 62.033 25.828 63.995 32 63.988 C 38.414 63.988 44.349 61.907 49.18 58.382 L 54.486 63.725 C 54.709 63.96 55.042 64.054 55.351 63.97 C 55.663 63.889 55.906 63.644 55.986 63.331 C 56.069 63.017 55.976 62.684 55.743 62.46 L 50.6 57.285 C 57.153 51.865 61.338 43.644 61.338 34.448 C 61.338 26.619 58.299 19.499 53.355 14.213 L 54.785 12.772 L 60.675 18.707 L 61.306 18.073 C 64.898 14.454 64.898 8.559 61.306 4.943 C 59.577 3.201 57.228 2.224 54.781 2.23 C 52.336 2.224 49.99 3.201 48.263 4.943 L 47.634 5.573 L 53.528 11.507 L 52.097 12.947 C 47.999 9.055 42.873 6.437 37.334 5.405 L 37.334 3.118 C 37.334 1.646 36.129 0.433 34.667 0.433 L 29.333 0.433 Z  M 29.333 2.223 L 34.667 2.223 C 35.17 2.223 35.556 2.611 35.556 3.118 L 35.556 5.132 C 34.376 4.985 33.188 4.91 32 4.908 C 30.795 4.908 29.61 4.989 28.443 5.132 L 28.443 3.118 C 28.443 2.611 28.829 2.223 29.333 2.223 Z  M 9.218 4.006 C 10.83 4.006 12.382 4.65 13.722 5.702 L 3.45 16.044 C 1.171 13.103 1.262 8.915 3.953 6.208 C 5.346 4.797 7.241 4.004 9.218 4.006 Z  M 54.781 4.006 C 56.688 4.006 58.591 4.74 60.046 6.209 C 62.738 8.916 62.828 13.104 60.55 16.045 L 50.278 5.702 C 51.618 4.65 53.171 4.006 54.782 4.006 L 54.781 4.006 Z  M 32 6.699 C 47.232 6.699 59.56 19.112 59.56 34.448 C 59.56 49.784 47.232 62.197 32 62.197 C 16.768 62.197 4.439 49.784 4.439 34.448 C 4.439 19.112 16.768 6.699 32 6.699 Z  M 32 8.489 C 31.018 8.489 30.222 9.29 30.222 10.279 C 30.222 11.268 31.018 12.069 32 12.069 C 32.982 12.069 33.778 11.268 33.778 10.279 C 33.778 9.29 32.982 8.489 32 8.489 Z  M 25.794 10.209 C 25.773 10.206 25.752 10.209 25.735 10.209 C 25.468 10.225 25.222 10.361 25.066 10.58 C 24.91 10.798 24.86 11.076 24.929 11.335 C 24.99 11.565 25.138 11.761 25.342 11.879 C 25.546 11.998 25.789 12.03 26.016 11.968 C 26.492 11.839 26.773 11.349 26.648 10.87 C 26.543 10.482 26.194 10.211 25.794 10.209 Z  M 38.205 10.209 C 37.761 10.215 37.388 10.549 37.332 10.993 C 37.276 11.437 37.554 11.855 37.983 11.972 C 38.457 12.099 38.943 11.816 39.07 11.339 C 39.133 11.109 39.101 10.864 38.983 10.657 C 38.865 10.451 38.672 10.301 38.445 10.237 C 38.365 10.219 38.285 10.209 38.205 10.209 Z  M 19.977 12.622 C 19.582 12.633 19.241 12.902 19.137 13.286 C 19.077 13.515 19.109 13.759 19.226 13.965 C 19.345 14.17 19.539 14.322 19.768 14.381 C 19.995 14.444 20.238 14.412 20.442 14.293 C 20.792 14.087 20.96 13.67 20.85 13.277 C 20.741 12.884 20.382 12.615 19.977 12.622 Z  M 43.96 12.625 C 43.658 12.64 43.384 12.807 43.231 13.069 C 43.114 13.275 43.081 13.518 43.14 13.748 C 43.203 13.979 43.353 14.175 43.557 14.294 C 43.98 14.513 44.499 14.359 44.736 13.944 C 44.974 13.53 44.846 13 44.446 12.742 C 44.299 12.657 44.13 12.616 43.96 12.625 Z  M 32 13.86 C 31.511 13.86 31.111 14.263 31.111 14.755 C 31.111 15.247 31.511 15.65 32 15.65 C 32.489 15.65 32.889 15.247 32.889 14.755 C 32.889 14.263 32.489 13.86 32 13.86 Z  M 15.038 16.461 C 14.798 16.461 14.566 16.556 14.399 16.727 C 14.233 16.894 14.139 17.121 14.139 17.358 C 14.139 17.595 14.233 17.822 14.399 17.989 C 14.565 18.157 14.791 18.251 15.026 18.251 C 15.261 18.251 15.487 18.157 15.653 17.989 C 15.819 17.822 15.913 17.595 15.913 17.358 C 15.913 17.121 15.819 16.894 15.653 16.727 C 15.491 16.56 15.27 16.464 15.038 16.461 Z  M 48.985 16.461 C 48.745 16.461 48.514 16.556 48.347 16.727 C 48.18 16.894 48.086 17.121 48.086 17.358 C 48.086 17.595 48.18 17.822 48.347 17.989 C 48.513 18.157 48.738 18.251 48.973 18.251 C 49.209 18.251 49.434 18.157 49.6 17.989 C 49.767 17.822 49.86 17.595 49.86 17.358 C 49.86 17.121 49.767 16.894 49.6 16.727 C 49.438 16.56 49.217 16.464 48.985 16.461 Z  M 32 17.44 C 31.511 17.44 31.111 17.843 31.111 18.335 C 31.111 18.828 31.511 19.231 32 19.231 C 32.489 19.231 32.889 18.828 32.889 18.335 C 32.889 17.843 32.489 17.44 32 17.44 Z  M 38.393 17.721 L 32.579 30.927 C 32.388 30.891 32.194 30.871 32 30.867 C 30.044 30.867 28.443 32.479 28.443 34.448 C 28.443 35.27 28.735 36.022 29.204 36.63 L 19.682 46.215 L 20.313 46.85 L 29.832 37.263 C 30.45 37.754 31.213 38.024 32 38.029 C 32.632 38.026 33.251 37.85 33.792 37.522 L 41.28 45.054 L 42.533 43.791 L 35.053 36.253 C 35.379 35.708 35.553 35.084 35.556 34.448 C 35.556 33.318 35.018 32.318 34.198 31.661 L 40.019 18.443 L 38.393 17.721 Z  M 52.768 21.468 C 52.454 21.475 52.167 21.649 52.012 21.924 C 51.858 22.2 51.86 22.537 52.017 22.811 C 52.135 23.016 52.329 23.166 52.557 23.227 C 52.784 23.288 53.027 23.255 53.23 23.136 C 53.436 23.019 53.586 22.824 53.647 22.595 C 53.71 22.366 53.678 22.121 53.56 21.916 C 53.396 21.633 53.094 21.462 52.769 21.468 L 52.768 21.468 Z  M 11.17 21.468 C 10.775 21.484 10.438 21.762 10.344 22.149 C 10.251 22.537 10.423 22.939 10.767 23.136 C 10.971 23.255 11.214 23.288 11.442 23.227 C 11.67 23.166 11.864 23.017 11.983 22.811 C 12.226 22.383 12.08 21.838 11.657 21.591 C 11.51 21.504 11.341 21.461 11.17 21.468 Z  M 8.805 27.301 C 8.362 27.307 7.99 27.64 7.934 28.083 C 7.878 28.526 8.155 28.943 8.583 29.06 C 9.059 29.187 9.546 28.902 9.674 28.424 C 9.799 27.946 9.516 27.456 9.042 27.329 C 8.965 27.307 8.885 27.298 8.805 27.301 Z  M 55.22 27.301 C 54.938 27.29 54.668 27.414 54.491 27.635 C 54.315 27.857 54.254 28.149 54.327 28.424 C 54.456 28.903 54.942 29.185 55.418 29.059 C 55.89 28.93 56.171 28.442 56.047 27.962 C 55.943 27.584 55.609 27.316 55.22 27.301 L 55.22 27.301 Z  M 7.995 32.658 C 7.013 32.658 6.217 33.459 6.217 34.448 C 6.217 35.437 7.013 36.238 7.995 36.238 C 8.977 36.238 9.774 35.437 9.774 34.448 C 9.774 33.459 8.977 32.658 7.995 32.658 Z  M 32 32.658 C 32.993 32.658 33.778 33.448 33.778 34.448 C 33.778 35.448 32.993 36.238 32 36.238 C 31.007 36.238 30.222 35.448 30.222 34.448 C 30.222 33.448 31.007 32.658 32 32.658 Z  M 56.004 32.658 C 55.022 32.658 54.226 33.459 54.226 34.448 C 54.226 35.437 55.022 36.238 56.004 36.238 C 56.986 36.238 57.782 35.437 57.782 34.448 C 57.782 33.459 56.986 32.658 56.004 32.658 Z  M 12.441 33.553 C 11.952 33.553 11.552 33.956 11.552 34.448 C 11.552 34.94 11.952 35.343 12.441 35.343 C 12.93 35.343 13.33 34.94 13.33 34.448 C 13.33 33.956 12.93 33.553 12.441 33.553 Z  M 15.997 33.553 C 15.508 33.553 15.108 33.956 15.108 34.448 C 15.108 34.94 15.508 35.343 15.997 35.343 C 16.486 35.343 16.886 34.94 16.886 34.448 C 16.886 33.956 16.486 33.553 15.997 33.553 Z  M 48.003 33.553 C 47.514 33.553 47.113 33.956 47.113 34.448 C 47.113 34.94 47.514 35.343 48.003 35.343 C 48.491 35.343 48.892 34.94 48.892 34.448 C 48.892 33.956 48.491 33.553 48.003 33.553 Z  M 51.559 33.553 C 51.07 33.553 50.67 33.956 50.67 34.448 C 50.67 34.94 51.07 35.343 51.559 35.343 C 52.048 35.343 52.448 34.94 52.448 34.448 C 52.448 33.956 52.048 33.553 51.559 33.553 Z  M 8.846 39.808 C 8.497 39.794 8.171 39.987 8.015 40.303 C 7.859 40.618 7.901 40.996 8.122 41.269 C 8.343 41.542 8.703 41.658 9.041 41.567 C 9.468 41.455 9.748 41.044 9.699 40.603 C 9.65 40.161 9.287 39.823 8.846 39.808 Z  M 55.177 39.808 C 54.778 39.815 54.43 40.085 54.326 40.476 C 54.265 40.705 54.297 40.949 54.415 41.155 C 54.533 41.36 54.727 41.51 54.955 41.571 C 55.265 41.666 55.603 41.584 55.836 41.356 C 56.069 41.127 56.159 40.79 56.072 40.474 C 55.985 40.159 55.734 39.917 55.417 39.843 C 55.339 39.819 55.258 39.808 55.177 39.808 Z  M 11.191 45.637 C 10.877 45.645 10.591 45.819 10.437 46.094 C 10.283 46.369 10.284 46.706 10.44 46.98 C 10.559 47.183 10.753 47.334 10.983 47.396 C 11.208 47.459 11.451 47.428 11.656 47.305 C 11.861 47.189 12.01 46.993 12.069 46.763 C 12.132 46.535 12.1 46.29 11.982 46.085 C 11.821 45.799 11.516 45.627 11.191 45.637 Z  M 52.743 45.637 C 52.367 45.656 52.043 45.911 51.935 46.275 C 51.827 46.638 51.958 47.03 52.263 47.254 C 52.567 47.478 52.978 47.484 53.289 47.27 C 53.6 47.056 53.743 46.668 53.646 46.301 C 53.585 46.072 53.434 45.877 53.228 45.76 C 53.082 45.673 52.913 45.63 52.743 45.637 Z  M 32 49.665 C 31.511 49.665 31.111 50.068 31.111 50.56 C 31.111 51.053 31.511 51.456 32 51.456 C 32.489 51.456 32.889 51.053 32.889 50.56 C 32.889 50.068 32.489 49.665 32 49.665 Z  M 15.038 50.645 C 14.799 50.641 14.568 50.735 14.399 50.907 C 14.233 51.074 14.139 51.301 14.139 51.538 C 14.139 51.775 14.233 52.002 14.399 52.169 C 14.565 52.337 14.791 52.431 15.026 52.431 C 15.261 52.431 15.487 52.337 15.653 52.169 C 15.819 52.002 15.913 51.775 15.913 51.538 C 15.913 51.301 15.819 51.074 15.653 50.907 C 15.492 50.739 15.27 50.645 15.038 50.645 Z  M 48.985 50.645 C 48.746 50.641 48.515 50.736 48.347 50.907 C 48.18 51.074 48.086 51.301 48.086 51.538 C 48.086 51.775 48.18 52.002 48.347 52.169 C 48.513 52.337 48.738 52.431 48.973 52.431 C 49.209 52.431 49.434 52.337 49.6 52.169 C 49.767 52.002 49.86 51.775 49.86 51.538 C 49.86 51.301 49.767 51.074 49.6 50.907 C 49.439 50.739 49.217 50.645 48.985 50.645 Z  M 32 53.246 C 31.511 53.246 31.111 53.649 31.111 54.141 C 31.111 54.633 31.511 55.036 32 55.036 C 32.489 55.036 32.889 54.633 32.889 54.141 C 32.889 53.649 32.489 53.246 32 53.246 Z  M 43.978 54.48 C 43.832 54.487 43.686 54.525 43.557 54.603 C 43.353 54.721 43.203 54.916 43.142 55.145 C 43.081 55.374 43.113 55.618 43.231 55.823 C 43.477 56.253 44.02 56.399 44.446 56.155 C 44.648 56.036 44.797 55.84 44.86 55.609 C 44.923 55.379 44.89 55.133 44.769 54.928 C 44.607 54.644 44.303 54.472 43.978 54.48 Z  M 19.956 54.487 C 19.653 54.501 19.38 54.669 19.227 54.931 C 19.109 55.137 19.077 55.381 19.136 55.61 C 19.198 55.84 19.349 56.036 19.553 56.155 C 19.976 56.374 20.495 56.22 20.732 55.806 C 20.97 55.391 20.842 54.862 20.442 54.603 C 20.294 54.518 20.126 54.477 19.956 54.487 L 19.956 54.487 Z  M 32 56.826 C 31.018 56.826 30.222 57.628 30.222 58.617 C 30.222 59.605 31.018 60.407 32 60.407 C 32.982 60.407 33.778 59.605 33.778 58.617 C 33.778 57.628 32.982 56.826 32 56.826 Z  M 25.776 56.9 C 25.377 56.903 25.03 57.175 24.929 57.564 C 24.802 58.041 25.084 58.531 25.558 58.659 C 26.031 58.786 26.518 58.503 26.645 58.026 C 26.707 57.796 26.675 57.552 26.557 57.345 C 26.439 57.139 26.245 56.989 26.016 56.928 C 25.938 56.909 25.857 56.9 25.776 56.9 L 25.776 56.9 Z  M 38.247 56.9 C 37.965 56.89 37.695 57.015 37.518 57.236 C 37.342 57.458 37.28 57.751 37.351 58.026 C 37.412 58.256 37.561 58.452 37.766 58.57 C 37.971 58.689 38.214 58.721 38.442 58.659 C 38.669 58.598 38.864 58.448 38.982 58.243 C 39.1 58.037 39.132 57.793 39.07 57.564 C 38.971 57.184 38.637 56.915 38.247 56.9 L 38.247 56.9 Z "
                                                fill="rgb(255,255,255)" />
                                        </g>
                                    </svg>

                                    Tiempo
                                </p>
                            </div>
                            <div class="p-3 bg-emerald-600 rounded-b-lg break-words text-white">
                                La optimización de tiempo es fundamental. Por esta razón el diagnóstico es preciso y dá
                                resultados de forma rápida y concisa.
                            </div>
                        </div>
                    </div>



                </div>
                <!--  beneficios del sitio web-->
                <div class="m-5 p-3 alinearT border-2 px-1 py-1 border-slate-200  rounded-md shadow-lg ">

                    <br>
                    <br>

                    <h1 class="w-50 letra text-2xl p-6 text-slate-600 ">¿De qué se trata el sistema y en qué me
                        beneficia?
                    </h1>
                    <br>
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe src="https://www.youtube.com/embed/ckqCNbUF9Ek" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>

        <!--seccion de titulo para visualizacion de imagenes de la villa de san diego de ubaté-->

        <section class="bg-white">
            <div class="bg-white justify-center gap-4  p-3 alinearT">
                <br>
                <h3 class="font-semibold letra text-teal-900 text-3xl">

                    La Villa de San Diego de Ubaté

                </h3>

            </div>

        </section>

        <!--galeria de fotos de la villa de san diego de ubaté-->

        <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="vaca"
                                class="transition ease-in-out delay-150 block object-cover object-center w-full h-full rounded-lg hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fubate1.webp?alt=media&token=76068167-fb74-432f-bbe5-bb8d3e04f0cf">
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="acopio"
                                class="transition ease-in-out delay-150 block object-cover object-center w-full h-full rounded-lg hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fubate2.webp?alt=media&token=1e7c4742-9d7a-4cdc-8d72-3d39f2b2e218">
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="entradaAcopio"
                                class="transition ease-in-out delay-150 block object-cover object-center w-full h-full rounded-lg hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fubate3.webp?alt=media&token=5497467f-d7bf-45ba-96de-4210d3e57d12">
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="iglesia1"
                                class="transition ease-in-out delay-150 block object-cover object-center w-full h-full rounded-lg hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fubate4.webp?alt=media&token=8e47bcb5-0e4d-4786-ba05-17acb016cb7a">
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="iglesia2"
                                class="transition ease-in-out delay-150 block object-cover object-center w-full h-full rounded-lg hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fubate5.webp?alt=media&token=420ebf29-c90f-49e8-8bd0-1313a3cdf8a9">
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="iglesia3"
                                class="transition ease-in-out delay-150 block object-cover object-center w-full h-full rounded-lg hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fubate6.webp?alt=media&token=5d5818ec-006c-419e-ac84-74cd104f4c4e">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--Tutulo de la seccion más los items a elegir y iconos de cursos-->

        <section class="bg-white">
            <div class="bg-white justify-center gap-4  p-3 alinearT">
                <br>
                <h3 class="font-semibold letra text-teal-900 text-3xl">

                    Sección educativa

                </h3>
                <br>
                <div class=" grid justify-items-center grid-cols-3">
                    <div class="text-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fexceldo.webp?alt=media&token=0ac76032-afce-4c7c-b625-a40c919a90fe"
                            class="transition ease-in-out delay-150 rounded-full w-20 mb-4 mx-auto hover:-translate-y-1 hover:scale-110 duration-300"
                            alt="Excel" />
                        <h5 class="text-xl font-medium leading-tight mb-2 ">Excel</h5>
                        <p class="text-gray-500">Tutorial básico</p>
                    </div>
                    <div class="text-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fwordo.webp?alt=media&token=ef63d30c-4111-413a-8680-c0c092ff356e"
                            class="transition ease-in-out delay-150 rounded-full w-20 mb-4 mx-auto hover:-translate-y-1 hover:scale-110 duration-300 "
                            alt="word" />
                        <h5 class="text-xl font-medium leading-tight mb-2">Word</h5>
                        <p class="text-gray-500">Tutorial básico</p>
                    </div>
                    <div class="text-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fpowerpointo.webp?alt=media&token=8b4851c3-0514-4ef4-bd7c-e1b5f2337f26"
                            class="transition ease-in-out delay-150 rounded-full w-20 mb-4 mx-auto hover:-translate-y-1 hover:scale-110 duration-300"
                            alt="power point" />
                        <h5 class="text-xl font-medium leading-tight mb-2">Power Point</h5>
                        <p class="text-gray-500">Tutorial básico</p>
                    </div>
                </div>
                <br>
                <!---iconos de los cursos de cpacitacion educativa-->

                <div class="grid md:grid-cols-2 gap-8 letra">

                    <div class="text-center p-10">

                        <p class="text-justify">
                            Este es un espacio de tutoriales básicos, donde se encuentran herramientas importantes
                            para el desarrollo de documentación, obtención de información a partir de grandes
                            cantidades de datos, presentaciones para evidenciar ideas de negocios o temas a tratar.
                        </p>
                        <p class="text-justify">
                            Las capacitaciones se brindan a partir de la interacción con las herramientas
                            presentadas. Los cursos son básicos y se mostrarán de forma corta y concisa, para que de
                            esta manera se logren entender las
                            principales funciones que contienen estos entornos tecnológicos.
                        </p>

                        <div class="w-full p-1 md:p-2">
                            <br>
                            <img alt="Letrero"
                                class="animate-bounce block object-cover object-center w-full h-full rounded-lg"
                                src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2FimgAprender.webp?alt=media&token=19080191-169e-43ba-8edc-096995abb430">
                        </div>
                    </div>
                    <div class="object-cover p-8">
                        <div class="flex justify-center max-h-100 min-h-100 p-10">
                            <img src="https://firebasestorage.googleapis.com/v0/b/m-subate.appspot.com/o/sistema%2Fpantalla.webp?alt=media&token=9808a40c-40f1-4da5-8e0a-669d3966c508"
                                alt="a">
                        </div>
                    </div>
                </div>


            </div>

        </section>

        <!--formulario para el usuario, llenado para comentarios-->
        <!-- footer-->
        <footer>
            <div class="bg-teal-700 justify-center p-3">
                <div class=" grid md:grid-cols-3">
                    <div class="block p-6 rounded-lg shadow-lg max-w-md">
                        <form>
                            <h3 class="font-semibold letra text-white text-2xl">
                                ¡Envíanos un comentario!
                            </h3>
                            <br>
                            <div class="form-group mb-6">
                                <input type="text"
                                    class="form-control block
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
                                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput7" placeholder="Nombre">
                            </div>
                            <div class="form-group mb-6 letra">
                                <input type="email" class="form-control block
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
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput8" placeholder="Correo electrónico">
                            </div>
                            <div class="form-group mb-6">
                                <input type="email" class="form-control block
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
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput8" placeholder="Correo destino"
                                    value="microandsmall2022@gmail.com" disabled>
                            </div>
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
                                " id="exampleFormControlTextarea13" rows="3"
                                    placeholder="Escribe aquí tu comentario"></textarea>
                            </div>
                            <button type="submit" class="
                                w-full
                                px-6
                                py-2.5
                                bg-teal-600
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
                                ease-in-out">Enviar</button>
                        </form>
                    </div>
                    <!--Creacion del modal para visualizacion de informacion de regimen legal-->
                    <div class="text-center text-white justify-items-center letra">

                        <br>
                        <h2 class="text-xl text-white font-bold">Régimen legal</h2>



                        <a href="#" v-on:click="leyes_uno()" data-bs-toggle="modal" data-bs-target="#exampleModalLong"
                            class="underline decoration-solid">Ley estatutaria 1581 de 2012</a>
                        <br>
                        <a href="#" v-on:click="leyes_dos()" data-bs-toggle="modal" data-bs-target="#exampleModalLong"
                            class="underline decoration-solid">Decreto 045 de 15 de enero de 2021</a>
                        <br>
                        <a href="#" v-on:click="leyes_tres()" data-bs-toggle="modal" data-bs-target="#exampleModalLong"
                            class="underline decoration-solid">Ley Directiva Presidencia 03 de 15 de marzo de 2021</a>
                        <br>
                        <a href="#" v-on:click="leyes_cuatro()" data-bs-toggle="modal"
                            data-bs-target="#exampleModalLong" class="underline decoration-solid">Ley 590 del 2000
                            Artículo 2</a>
                        <br>
                        <a href="#" v-on:click="terminos_condiciones()" data-bs-toggle="modal"
                            data-bs-target="#exampleModalLong" class="underline decoration-solid">Términos y
                            condiciones</a>
                        <br>
                        <!--Derechos de autor-->
                        <p class="text-white letra">COPYRIGHT © 2022</p>

                        <!-- Desarrollo del Modal con caracteristicas y estilo -->
                        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                            id="exampleModalLong" tabindex="-1" aria-labelledby="exampleModalLongLabel"
                            aria-hidden="true">
                            <div class="modal-dialog relative w-auto pointer-events-none">
                                <div
                                    class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                    <div
                                        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                        <h5 class="text-xl font-medium leading-normal text-black"
                                            id="exampleModalLongLabel">
                                            {{ titulo_leyes }}

                                        </h5>
                                        <button type="button"
                                            class="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <!--texto interno del modal-->
                                    <div class="modal-body relative p-4 text-black" style="min-height: 100px">
                                        {{ ley1 }}
                                        <p>{{ parrafos }}</p>
                                        <a v-bind:href="link" class="underline decoration-solid">{{ citas }}</a>

                                    </div>
                                    <div
                                        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                        <button type="button"
                                            class="inline-block px-6 py-2.5 bg-teal-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-600 active:shadow-lg transition duration-150 ease-in-out"
                                            data-bs-dismiss="modal">
                                            Cerrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Informacion de contacto directo-->
                    <div class="text-center d-block">
                        <br>
                        <h2 class="text-xl text-white font-bold">Contacto</h2>
                        <p class="text-white font-medium">
                        <div class="letra text-white">
                            Dirección (Correo físico o postal): Calle 6 Nº 9 - 80
                            <br>
                            PBX: (+57 1) 855 3055 | 56
                            <br>
                            Facultad de ingeniería de Sistemas
                            <br>
                            <a href="mailto:correspondencia.ubate@ucundinamarca.edu.co"
                                class="underline decoration-solid">Correo Institucional</a>
                        </div>
                        <br>
                        <!-- <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                            <div class="container max-w-screen-lg mx-auto"> -->
                        <div class="grid grid-column-5 grid-flow-col gap-5">
                            <div class="flex items-center justify-center">
                                <a href="https://es-la.facebook.com/ucundinamarcaoficial/">
                                    <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div>

                            <div class="flex flex-col justify-center items-center">
                                <a href="https://twitter.com/UCundinamarca">
                                    <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <a href="https://www.linkedin.com/school/ucundinamarcaoficial/">
                                    <svg class="w-6 h-6 text-white bg-withe fill-current"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                        <path
                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                            <div class="flex flex-col justify-center items-center">
                                <a href="https://www.instagram.com/ucundinamarcaoficial/">
                                    <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512">
                                        <path
                                            d="M224 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 160c-28.4 0-51-22.6-51-51s22.6-51 51-51 51 22.6 51 51-22.6 51-51 51zm144-160c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm88 0c0 66.2-53.8 120-120 120H120c-66.2 0-120-53.8-120-120V120C0 53.8 53.8 0 120 0h208c66.2 0 120 53.8 120 120v208z">
                                        </path>
                                    </svg>
                                </a>
                            </div>

                            <div class="flex flex-col justify-center items-center">
                                <a href="https://www.youtube.com/c/UDECANDOTV">
                                    <svg class="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z">
                                        </path>
                                    </svg>

                                </a>
                            </div>
                        </div>
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    </section>
</template>

    <!--Script para habilitar el menu responsive-->

<script>

import navbarGuest from '@/components/navbars/navbarGuest.vue'
export default {

    name: 'menuResponsive',
    components: {
        Navbar: navbarGuest


    },
    data() {
        return {
            ley1: '',
            titulo_leyes: '',
            parrafos: '',
            link: '',
            citas: ''



        }
    },
    methods: {
        leyes_uno() {
            this.titulo_leyes = 'Normatividad'
            this.ley1 = 'Ley estatutaria 1581 de 2012'
            this.parrafos = 'La presente ley tiene como objetivo fundamental desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar, y rectificar la información que se haya recolectado sobre las mismas en bases de datos o archivos. De esta manera, se refiere al articulo 15 de la constitución política; así como el derecho a la información que esta sujeta en el artículo 20 de la misma. Los principios de esta ley sobre protección de datos serán aplicables a todas las bases de datos con los límites que disponga la ley y que estén amparados por la reserva legal.'
            this.link = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981#:~:text=La%20presente%20ley%20tiene%20por,el%20art%C3%ADculo%2015%20de%20la"
            this.citas = '(Función Pública, 2012)'
        },
        leyes_dos() {
            this.titulo_leyes = "Normatividad"
            this.ley1 = 'Decreto 045 de 15 de enero de 2021'
            this.parrafos = 'El gobierno Nacional creó la Comisión Intersectorial para el Desarrollo de la Economía Digital y dispuso que su objetivo principal sería coordinar, orientar y articular funciones y actividades socioeconómicas por medio de las (TIC) para que de esta manera se promueva el desarrollo y la consolidación de la economía digital en Colombia. Además, el articulo 25 del Decreto 1784 del 2019 soporta que el ámbito funcional de la consejería presidencial para asuntos económicos y Transformación Digital debe cumplir con las siguientes funciones: Implementación de la apropiación tecnológica, del comercio electrónico, de la transformación digital, así como adelantar el seguimiento a las actividades concertadas; y asesorar al Gobierno Nacional en materia de desarrollo del ecosistema digital y en la formulación e implementación de la política de transformación digital'
            this.link = "https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=155307"
            this.citas = '(Función Pública, 2021)'
        },
        leyes_tres() {
            this.titulo_leyes = "Normatividad"
            this.ley1 = 'Ley Directiva Presidencia 03 de 15 de marzo de 2021'
            this.parrafos = 'La ley se presenta con el fin de dar cumplimiento al articulo 147 de la ley 1955 de 2019, por el cual se expide el plan nacional de desarrollo “Pacto por Colombia, Pacto por la equidad”, con el fin de disminuir los costos de funcionamiento, acelerar la innovación, brindar entornos confiables digitales para las entidades públicas y mejorar sus procedimientos y servicios. Esta ley presenta diferentes directrices las cuales dos de estas impulsan al desarrollo del proyecto. Las cuales son: Seguridad digital y Gestión de datos, seleccionadas con el fin de fortalecer las capacidades tecnológicas de las micro y pequeñas empresas de la Villa de San Diego de Ubaté.'
            this.link = "https://dapre.presidencia.gov.co/normativa/normativa/DIRECTIVA%20PRESIDENCIAL%2003%20DEL%2015%20DE%20MARZO%20DE%202021.pdf"
            this.citas = '(Duque Márquez, 2021)'
        },
        leyes_cuatro() {
            this.titulo_leyes = "Normatividad"
            this.ley1 = 'Ley 590 del 2000 Artículo 2'
            this.parrafos = 'La ley 590 busca promover el desarrollo integral de las micro, pequeñas y medianas empresas en consideración a sus aptitudes para la generación de empleo, el desarrollo regional, la integración entre sectores económicos, el aprovechamiento productivo de pequeños capitales, realización de sus productos y servicios a nivel nacional e internacional, la formación de capital humano, la asistencia para el desarrollo tecnológico y el acceso a los mercados financieros institucionales y teniendo en cuenta la capacidad empresarial de los colombianos.'
            this.link = "https://mujeresantioquia.gov.co/sites/default/files/ley_590_del_2000.pdf"
            this.citas = '(Congreso de Colombia, 2022)'
        },
        terminos_condiciones() {
            this.titulo_leyes = "Términos y condiciones"
            this.ley1 = 'Políticas para el uso de la plataforma M&S'
            this.parrafos = 'La siguiente información le brindara una serie de ítems acerca de nuestro método de trabajo, y servirán como una guía que se deben tener en cuenta para el uso de la plataforma.' + ' 1)	Material prohibido: - Cualquier medio de comunicación que sea ilegal o fuera de lo    establecido en el contacto. - Cualquier medio de comunicación que viole la privacidad o derechos de autor. - Cualquier medio que contenga un virus o programa hostil. 2)  Derechos de Autor: -Micro and Small Companys es un proyecto realizado en un entorno educativo universitario el cual, todos los contenidos incluyendo, texto, gráficos, imágenes, logos, botones, íconos, archivos de sonido o video, código HTML, CSS, VUE, TAILWINDCSS, etc. están protegidos y son propiedad exclusiva de Micro and Small Companys y de la entidad universitaria. 3) Modificaciones a este convenio -Los actuales términos y condiciones están sujetos a cambios sin previo aviso por parte de Micro and Small Companys. -La información contenida en la plataforma es modificable solamente por el administrador y los desarrolladores. Al ser parte de Micro and Small Companys está aceptando los términos y condiciones, lo cual se debe cumplir o estará en riesgo de demandas o disposiciones dictadas por la ley.'
            this.citas = ''
        }
    }
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

    