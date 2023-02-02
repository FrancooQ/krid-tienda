import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore, query, where} from "firebase/firestore";



const ItemListContainer = ({greeting}) => {

    const [prod, setProd] = useState([]);
    const {id} = useParams();

    /*     useEffect(() => {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Array.filter(item => item.category === id) : Array);
            },2000);
        });

        prom.then((data) => {
            setProd(data);
        })
        
    },[id]) */
    

    /* PROCESO DE CARGA DE NUESTROS PRODUCTOS A LA COLECCION */
    /*     useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        Array.forEach((item) => {
            addDoc(itemsCollection, {name:item.name, image:item.image, category:item.category, description:item.description, price:item.price, stock:item.stock, initial:item.inital, genero: item.genero, marca: item.marca});
        })
    }, []) */

    //Consulto a nuestra coleccion de datos
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        
        /// Filtro por category, sino collection completa.
        getDocs(q).then((snapShot) => {
            setProd(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
        });
    }, [id])



    return(
        <div className="container">
            <div className="row">  
                <ItemList prod={prod}/>
            </div>
        </div>
    )
}

export default ItemListContainer; 