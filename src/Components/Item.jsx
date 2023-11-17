import { Link } from 'react-router-dom'
import './Item.css'
import ItemDetails from './ItemDetails'

const Item = ({category, producto}) =>{

    return(
        <div className='divcss'>
            <img className='imgcss' src={`http://localhost:5173/src/Imagenes/${producto.img}`} />
            <h2 className='h2css'>{producto.Nombre}</h2>
            <h2 className='h2css'>{producto.precio}</h2>
            <a href={`${category}/${producto.id}`} >
            <input type="button" value="Mas detalles"/> 
             </a>
        </div>

    )
}
export default Item