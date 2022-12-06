<template>
  <!--llamado del navBar2 a la clase-->
  <navBar2></navBar2>
    <!--Intregacion de la imagen principal de la empresa-->
 <div>
  
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://images.pexels.com/photos/532568/pexels-photo-532568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
         "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Aprende a utilizar herramientas de Microsoft 365 y Google Workspace.
                </h1>
                <p class="mt-4 text-lg text-blueGray-200">
                  Las herramientas de Microsoft 365 y Google Workspace te proporcionan escalabilidad, 
                  colaboración entre empleados y se puede utilizar desde cualquier dispositivo digital en cualquier lugar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
     <!--sección uno-->
      <section class="pb-20 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <a href="#word">
                  
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                  <svg  href="#word" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>

                  </div>
                  </a>
                  <h6 href="#word" class="text-xl letra"><a href="#word">Word</a></h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                   
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                <a href="#excel">  
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  </div>
                </a>
                  <h6 class="text-xl font-semibold">Excel</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                   
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <a href="#power">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                  </div>
                </a>
                  <h6 class="text-xl font-semibold">PowerPoint</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!--WORD-->
      <section id="word" class="relative py-20 space-y-10 ">
        <!--Encabezadp-->
        <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4 "> 
              <h2 class="text-4xl font-semibold">Word</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                
              </p>
            </div>
          </div>
        <!--Primero-->  
        <div class="container mx-auto px-4 flex lg:max-w-full  justify-center ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/tkd7NUbhkmc" 
                            frameborder="0" 
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                
                <h3 class="text-3xl font-semibold">Documentos en línea</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Subir documentos a drive, para trabajos en grupos, aprovechando
                  las herramientas, facilitando el trabajo y manejos de documentos
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <!--Segundo-->
        <div class="container mx-auto px-4 flex lg:max-w-full   justify-center ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/Jt1NtaXPTfY" 
                            frameborder="0"
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
              
                <h3 class="text-3xl font-semibold">Carta masiva mediante base de datos.</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Mediante una base de datos, se mejora la optimización, para 
                  el manejo de los destinatatios de una carta dirijida masivamente.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <!--Tercero-->
        <div class="container mx-auto px-4 flex lg:max-w-full  justify-center  ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/jmdjjwxgaxw" 
                            frameborder="0"
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold">Herramientas básicas.</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Introducción al uso de las diversas herramientas, para edición e insersión
                  de contenido multimedia, gráficos , tablas, entre otros.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      <section>
     >
      </section>
      <section id="power" class="relative py-20 space-y-10">
        <!--Encabezadp-->
        <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4"> 
              <h2 class="text-4xl font-semibold">PowerPoint</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
               
              </p>
            </div>
          </div>
        <!--Primero-->  
        <div class="container mx-auto px-4 flex lg:max-w-full   justify-center  ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/3vgkp54et2o"
                            frameborder="0"
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                
                <h3 class="text-3xl font-semibold">Presentaciones en línea</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Es un tutorial básico donde se enlazan documentos a Google drive 
                  y One drive (nube) para guardar las presentaciones. 
                </p>
                <!-- <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Amazing page examples
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3"
                        >
                          <i class="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
        <!--Segundo-->
        <div class="container mx-auto px-4 flex lg:max-w-full   justify-center">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/SJxLjtOPV8A"
                            frameborder="0"
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-10">
              
                <h3 class="text-3xl font-semibold">Guía de presentación</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Es un tutorial básico con pasos a seguir para realizar la presentación
                  de tu empresa, te puedes guiar a partir de los ítems.
                </p>
              
              </div>
            </div>
          </div>
        </div>
        <!--Tercero-->
        <div class="container mx-auto px-4 flex lg:max-w-full   justify-center">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/YjA0vROvlQ4"
                            frameborder="0"
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold">Herramientas básicas </h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Es un tutorial básico donde se indica como utilizar las diversas
                  herramientas, para el desarrollo de presentaciones.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="excel" class="relative py-20 space-y-10 bg-blueGray-200 ">
        <!--Encabezadp-->
        <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4 "> 
              <h2 class="text-4xl font-semibold">Excel</h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                
              </p>
            </div>
          </div>
        <!--Primero-->  
        <div class="container mx-auto px-4 flex lg:max-w-full  justify-center ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/mJwPSawhGmU" 
                            frameborder="0" 
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                
                <h3 class="text-3xl font-semibold">Archivos excel en línea</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Es posible aprovechar 
                  el trabajo colaborativo y mejor manejo de la información desde
                   cualquier lugar mediante archivos en línea.
                </p>
               
              </div>
            </div>
          </div>
        </div>
        <!--Segundo-->
        <div class="container mx-auto px-4 flex lg:max-w-full   justify-center ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/-M0uAp5WW-c" 
                            frameborder="0"
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
              
                <h3 class="text-3xl font-semibold">Tablas dinámicas.</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Una tabla dinámica es una herramienta que permite calcular, 
                  analizar y resumir datos, realizando diferentes comparaciones.     
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <!--Tercero-->
        <div class="container mx-auto px-4 flex lg:max-w-full  justify-center  ">
          <div class="items-center flex flex-wrap ">
            <div class="w-full md:w-6/12 lg:max-h-72  mb-12  xl:max-h-52/max-w-xs  ">
            <div class="relative h-0 overflow-hidden max-w-full w-full" style="padding-bottom: 56.25%">
              <iframe
                          src="https://www.youtube.com/embed/CnRRkJPM-nw" 
                            frameborder="0" 
                            allowfullscreen
                            class="absolute top-0 left-0 w-full h-full"
                        ></iframe>
            </div>
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <h3 class="text-3xl font-semibold">Herramientas básicas.</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  
                  Como usar las diversas herramientas básicas proporcionadas por
                   Excel y como hacer uso de acuerdo con la necesidad requerida. 
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
    
    </main>
    
  </div>
</template>
<script>
import navbarCompany from '@/components/navbars/navbarCompany.vue'
export default {

components: {
    navBar2: navbarCompany
}


}

</script>
