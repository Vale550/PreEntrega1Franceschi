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
