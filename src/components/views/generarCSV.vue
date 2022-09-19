<template>
<ul border="1">
<thead>
	<th>Id</th>
	<th>Nombre</th>
	<th>Apellido</th>
	<th>Telefono</th>
</thead>
	<tr v-for="data in all_data ">
		<td>{{data.pregunta1['respuesta']}}</td>
		<td>{{data.fechaCreacion}}</td>
		<td>{{data.nit}}</td>
        <td>{{data.puntajeTotal}}</td>
		
	</tr>
</ul>

</template>

<script>
    //LLamado del navbar2 a la clase
import "firebase/storage";
import "firebase/firestore";
import firebase from "../../components/firebase/initFirebase";
const db = firebase.firestore();




export default {

    name: 'PerfilDeEmpresa',
    data() {
    return {
      all_data: [],
    }
  },
    components: {
       
    },
    
    methods: {
        cargarDatos() {
            db.collection("datos").where("nit", "!=", '6667')
                .get()
                .then((querySnapshot) => {
                    
                    querySnapshot.forEach((doc) => {

                        // doc.data() is never undefined for query doc snapshots
                        
                        
                        this.all_data.push(doc.data())

                        //console.log(doc.id, " => ", doc.data());
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            
        
      

    },
    cambiarDatos(){
        console.log("Toy vivo")
        console.log(this.all_data)
        for (let i = 0; i < this.all_data.length; i++) {
                console.log(`Numero: ${i}`);
        }
        
    this.all_data.forEach(data => {
            console.log("holaquehace")
        
            if(data.pregunta1['respuesta']=='1'){
                data.pregunta1['respuesta']='Ganadería'



            }if(data.pregunta1['respuesta']=='2'){
                data.pregunta1['respuesta']='Minería de carbón' 

            }if(data.pregunta1['respuesta']=='3'){
                data.pregunta1['respuesta']='Comercio' 

            }if(data.pregunta1['respuesta']=='4'){
                data.pregunta1['respuesta']='Arcillas' 

            }if(data.pregunta1['respuesta']=='5'){
                data.pregunta1['respuesta']='Gravas' 

            }if(data.pregunta1['respuesta']=='6'){
                data.pregunta1['respuesta']='Cuero y/o calzado' 

            }if(data.pregunta1['respuesta']=='7'){
                data.pregunta1['respuesta']='Artefactos domésticos' 

            }if(data.pregunta1['respuesta']=='8'){
                data.pregunta1['respuesta']='Equipo y Maquinaria eléctrica y electrónica ' 

            }if(data.pregunta1['respuesta']=='9'){
                data.pregunta1['respuesta']='Lácteos' 

            }if(data.pregunta1['respuesta']=='10'){
                data.pregunta1['respuesta']='Convenio software y servicios asociados' 

            }if(data.pregunta1['respuesta']=='11'){
                data.pregunta1['respuesta']='Servicios de salud' 

            }if(data.pregunta1['respuesta']=='12'){
                data.pregunta1['respuesta']='Financiero' 

            }if(data.pregunta1['respuesta']=='13'){
                data.pregunta1['respuesta']='Telecomunicaciones' 

            }if(data.pregunta1['respuesta']=='14'){
                data.pregunta1['respuesta']='Servicios' 

            }
            console.log(data.pregunta1['respuesta'])
        }
    
    );
            
            

        

    }

    
    


    },
    mounted() {
        this.cargarDatos()
        this.cambiarDatos()
        
  }
}

</script>