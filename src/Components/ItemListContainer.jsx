import { useState } from "react"
import './ItemListContainer.css'

const ItemList = ({Nombre, img, precio}) =>{

    return(
        <>
            <div className="divitem">
                <img className="img" src={img}  />
                <p className="txt">{Nombre}</p>
                <p className="txt">Precio: {precio}</p>
            </div>
        </>
    )
}
export default ItemList