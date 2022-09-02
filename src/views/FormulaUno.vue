<template>
   <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>
  <form @submit="submitForm">
    <div>
      <label for="name">Nombre</label>
      <input type="text" id="name" v-model.trim="formValues.name" />
    </div>
    <div>
      <label for="profile">Perfil </label>
      <textarea id="profile" v-model="formValues.profileSummary"></textarea>
    </div>
    <div>
      <label for="country">Ciudad de residencia</label>
      <select id="country" v-model="formValues.country">
        <option value="">Selecciona su ciudad</option>
        <option value="Ubate">Ubate</option>
        <option value="Carupa">Carupa</option>
        <option value="Cucunuba">Cucunuba</option>
      </select>
    </div>
    <div>
      <label for="pais">Pais</label>
      <select id="pais"  multiple v-model="formValues.pais">
        <option value="">Pais</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Colombia">Colombia</option>
        <option value="Chile">Chile</option>
      </select>
    </div>
    
    <div>
      <input
        id="remoteWork"
        type="checkbox"
        v-model="formValues.remoteWork"
        true-value="si"
        false-value="no"
      />
      <label for="remoteWork">¿Trabajaria remotamente?</label>
    </div>
        <!--Selección de varias opciones-->
    <div>
      <label>Seleccione que lenguajes maneja</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>
    <!--Varias opciones 1respuesta-->
    <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">5-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        v-model="formValues.yearsOfExperience"
      />
      <label for="10+">10+</label>
    </div>
    <!--Boton-->
      <div>
        <button>Submit</button>
      </div>
  </form>

</template>
<script>
export default{
  name: 'FormulaUno',
  data(){
    return{
      formValues:{
        name: '',
        profileSummary:'',
        country:'',
        pais:[],
        remoteWork:false,
        skillSet: [],
        yearsOfExperience: ''
      }
    }
  },
  methods:{
    submitForm(event){
        event.preventDefault()
        console.log('Datos alojador', this.formValues)
    }
  },

}

</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    margin-top: 60px;
  }
  .underline {
    text-decoration: underline;
  }
  .promoted {
    font-style: italic;
  }
  .new {
    color: olivedrab;
  }
  .sold-out {
    color: red;
  }
  label {
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
  }
  
  input + label {
    font-weight: bold;
    display: inline-flex;
    margin-right: 20px;
  }
  
  input[type='text'],
  textarea,
  select {
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>