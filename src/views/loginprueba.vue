<template>
    <div>
        <h1>Ventana de login</h1>
        <button @click="getData()">
        <slot>Hola</slot>
        </button>
        
    </div>
</template>

<script>

import db from "../components/firebase/initFirebase";

//const db = firebase.ref("/tutorials");

export default {
    setup(){
        var docRef = db.collection("usuarios").doc("1234");
        var getOptions = {
           //source: 'cache'
        };
        function getData(){
            docRef.get(getOptions).then((doc) => {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
                console.log("Password document data:", doc.data().contaseña);
            }).catch((error) => {
               console.log("Error getting cached document:", error);
            });
        }
/*         function getData(){

            db.collection("usuarios").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().nit}`);
            if (doc.data().nit=="1234"){
                console.log("Sucesfull")

            }
         });
        });
    } */

        return {getData}
      
        
    }
    
   
    
}


</script>