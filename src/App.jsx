import './App.css'
import Cart from './Components/Cart';
import ItemDetails from './Components/ItemDetails';
import ItemListcontainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
//import Contador from './contador/contador'
import imagenes from './Imagenes/imagenes'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route extract path="/" element={ <div className='Item_div_css'> <ItemListcontainer categoria="nuevos" /></div>}/>
        <Route extract path="/nuevos" element={ <div className='Item_div_css'> <ItemListcontainer categoria="nuevos" /></div>}/>
        <Route extract path="/Usados" element={ <div className='Item_div_css'> <ItemListcontainer categoria="Usados" /></div>}/>
        <Route extract path="/Mas_vendidos" element={ <div className='Item_div_css'> <ItemListcontainer categoria="Mas_vendidos" /></div>}/>
        
        <Route extract path="/nuevos/:id" element={ <ItemDetails />}/>
        <Route extract path="/Usados/:id" element={ <ItemDetails />}/>
        <Route extract path="/Mas_vendidos/:id" element={ <ItemDetails />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App