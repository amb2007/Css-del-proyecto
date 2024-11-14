import { useEffect, useState } from "react";
import { app } from "./db";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import axios from "axios";
import Footer from "./footer"
const db = getFirestore(app);
function CategoriaEspecifica() {

    const [Data, setData] = useState([])

    axios.get("http://localhost:3000/movies")
    .then(res => {setData(prev=>[...prev,res.data])})


 useEffect(async()=>{
    for(let i=0;Data.length<700;i++){
        await setDoc(doc(db, "Peliculas",Data[i].Title ), {
            Title: Data[i].Title ,
            Genre: Data[i].Genre    
          });  
    }
        
},[Data])
 
    return (
        <div>
            <h1>Categoría Específica</h1>;
        </div>
        
    )

  }
  export default CategoriaEspecifica;
  