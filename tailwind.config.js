//forma para trabajar en tailwind 

module.exports = {
  mode: 'jit',

  purge: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}',],  //procesamiento para buscar aarchivos, transforma y optimiza
  darkMode: false, //habilitar propiedades

  theme: {
    extend: {
<<<<<<< HEAD
      brackgroundImage: theme => ({
        'imgg-pattern': 'url(../src/assets/imgBlanca.png)'
      })




=======
      
>>>>>>> c52b4c536956508751fd93558ecdf28636e5d14a
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