import React from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();
    
/*     useEffect(() => {
        const prom = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Array.find(item => item.id === parseInt(id)));
            },2000);
        });

        prom.then((data) => {
            setItem(data);
        })
        
    },[id]) */


    ///Consulto un documento pasado por ID.
    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", id);
        getDoc(item).then((snapShot) => {
            if(snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
            }
        })
    })

    return (
        <div className="container">
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;