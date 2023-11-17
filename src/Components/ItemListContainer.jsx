import './ItemListContainer.css'
import { useEffect, useRef, useState } from "react"
import imagenes from '../Imagenes/imagenes'
//import Itemlist from './itemlist'
import Item from './Item'
import { db } from '../firebase/client'
import { doc } from 'firebase/firestore'

const ItemListcontainer = ({categoria}) =>{

    const [cargando, setCargando] = useState(true)
    const [productos, setproduct] = useState ([])

    // const promesa = new Promise((resolve, reject) => {
    //         const productos = [
    //             //Productos de firebase
    //             {Nombre: "Iphone 12", img: imagenes.iphone_12 , precio: 2000, id:1},
    //             {Nombre: "Galaxy A33", img: imagenes.galaxy_a33 , precio: 3000, id:2},
    //             {Nombre: "Galaxy S", img: imagenes.galaxy_s , precio: 4000, id:3},
    //             {Nombre: "Iphone 13", img: imagenes.iphone_13 , precio: 5000, id:4},
    //         ]

    //         setTimeout(() => {
    //             productos.length > 0 ? resolve (productos) :  reject("no hay productos")
    //         }, 1000);
    // });

    // useEffect(() => {
    //     promesa
    //     .then(res => {
    //         console.log(res)
    //         setproduct(res)
    //     })
    //     .catch(error => console.error(error.message))
    // }, [])

if (categoria=="nuevos"){
  useEffect(() => {
    fetch('http://localhost:3000/nuevos')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setproduct(data)
    })
    .catch(e => console.error(e))
    .finally(() => setCargando(false))

  }, [])
}
if (categoria=="Usados"){
  useEffect(() => {
    fetch('http://localhost:3000/Usados')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setproduct(data)
    })
    .catch(e => console.error(e))
    .finally(() => setCargando(false))

  }, [])
}
if (categoria=="Mas_vendidos"){

  useEffect(() => {
    fetch('http://localhost:3000/Mas_vendidos')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setproduct(data)
    })
    .catch(e => console.error(e))
    .finally(() => setCargando(false))

  }, [])
}


    // useEffect(() => {

    //     const productRef = doc(db, "products", "abCWduzrtetJdFGgoRJD")

    //     getDoc(productRef)
    //     .then((snapshot) => {
    //         if(snapshot.exists()){
    //             console.log({ id: snapshot.id, ...snapshot.data()})
    //         }
    //     })

    //     const productsRef = collection(db, "products")
    //     getDocs(productsRef)
    //     .then(snapshot => {
    //         console.log(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    //     })
    //     .catch(e => console.error(e))

    // }, [])

        return(
        <>
            {cargando ? (
                 <>
                <p>Cargando productos..</p>
                </>
            ) : (
                <>
                {productos.map((prod, index) => <Item key={prod.id} category={categoria} producto={prod} />)}
                </>

            )}

        </>
    )
}
export default ItemListcontainer