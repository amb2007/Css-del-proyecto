import { useEffect } from "react";
import { app } from "./db";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import axios from "axios";
const db = getFirestore(app);
function CategoriaEspecifica({selectedgenre}) {
    /*
    const
    axios.get("http://localhost:3000/movies")
    .then((res) => )
 useEffect(async()=>{
    for(let i=0;i<700;i++){
        await setDoc(doc(db, "Peliculas", ), {
            Title: "12 Angry Men",
            Genre: "Crime, Drama"   
          });  
    }
        
},[])
 
    return (
        <div>
            <h1>Categoría Específica</h1>;
            <Footer /> {Footer}
        </div>
        
    )
    */
  }
  export default CategoriaEspecifica;
  