
import { collection, getDocs } from "firebase/firestore";
import {db } from "../../repositories/config";
import { useEffect, useState } from 'react';
import { QuerySnapshot } from "firebase/firestore";
import { addDoc } from "firebase/firestore";


export const Products = () => {

    const [products, setProducts] = useState([]);
    const getProducts = async () =>{
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
         console.log(querySnapshot.docs.map(doc => doc.data() ));

   const productsData = []
   querySnapshot.forEach((doc) => {
    productsData.push({id: doc.id, ...doc.data()})
   })
   setProducts(productsData)
        
    }
    const addProduct = async (product) => {
        const docRef = await addDoc(collection(db, "products"),{  
            name: product.name,
            price: product.price,
            stock: product.stock
        });
        console.log("Document written with ID: ", docRef.id);
    }

    useEffect(() => {
        getProducts();
    }, [])
  return (
    <div>Products</div>
  )
}
