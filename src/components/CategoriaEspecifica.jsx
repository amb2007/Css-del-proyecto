import { useEffect, useState } from "react";
import { app } from "./db";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import axios from "axios";
import Footer from "./footer"
const db = getFirestore(app);
function CategoriaEspecifica() {
    // const [Data, setData] = useState([])
    // async function fetchData() {
    //     try {
    //       const docRef = doc(db, "Peliculas", Title);
    //       const docSnap = await getDoc(docRef);
    //       if (docSnap.exists()) {
    //           setData(docSnap.data());
    //       } else {
    //         console.log("No se encontró el documento");
    //       }
    //     } catch (error) {
    //       console.error("Error al obtener el documento:", error);
    //     }
    //   }
    //   fetchData();
    return (
        <div>
            <h1>Categoría Específica</h1>;
        </div>

    )

}
export default CategoriaEspecifica;
