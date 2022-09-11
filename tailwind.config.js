//forma para trabajar en tailwind 

module.exports = {
  mode: 'jit',

  purge: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}',],  //procesamiento para buscar aarchivos, transforma y optimiza
  darkMode: false, //habilitar propiedades

  theme: {
    extend: {
      
    },
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  
  variants: {
    extend: {},
  },
}