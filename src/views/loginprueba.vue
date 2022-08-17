<template>
    <div>
        <h1>
            Ventana de login
        </h1>
    </div>
</template>

<script>
import "../components/firebase/initFirebase";

console.log(db)

//import { collection, getDocs } from "firebase/firestore";

db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

</script>