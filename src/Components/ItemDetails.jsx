import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react"
import './ItemDetails.css'

const ItemDetails = ({}) =>{

  
    const [contador, setContador] = useState(1)

    const suma = () => {
        setContador(contador + 1)
    }
    
    const resta = () => {
        contador > 1 && setContador(contador - 1)
    }
    const [producto, setproduct] = useState ([])

    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:3000${location.pathname}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setproduct(data)
        })
        .catch(e => console.error(e))    
      }, [])

    return(
      <>

        <div className="divcsss">
            <img className="imgcsss" src={`http://localhost:5173/src/Imagenes/${producto.img}`} />
            <h1 className="h2csss">Nombre:</h1>
            <h2  className="h2csss">{producto.Nombre}</h2>
            <h1 className="h2csss">Precio:</h1>
            <h2  className="h2csss">{producto.precio}</h2>

        </div>
        <div className="divcsss2">
            <button className="btnmenos" onClick={resta}>-</button>
            <p className="num">{contador}</p>
            <button className="btnmas" onClick={suma}>+</button>
            <div className="divcsss3">
              <button className="btncart">Añadir al carrito</button>
            </div>
        </div>
        </>

    )
}
export default ItemDetails