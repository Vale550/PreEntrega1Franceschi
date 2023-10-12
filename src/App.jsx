import './App.css'
import ItemList from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
//import Contador from './contador/contador'
import imagenes from './Imagenes/imagenes'

function App() {
  return (
    <>
    <NavBar />
    <div className='Item_div_css'>
      <ItemList Nombre="Galaxy S" img={imagenes.galaxy_s} precio={"$"+2000} />
      <ItemList Nombre="Galaxy A33" img={imagenes.galaxy_a33} precio={"$"+3000}/>
      <ItemList Nombre="Iphone 12" img={imagenes.iphone_12} precio={"$"+4000} />
      <ItemList Nombre="Iphone 13" img={imagenes.iphone_13} precio={"$"+5000} />
      <ItemList Nombre="Galaxy S" img={imagenes.galaxy_s} precio={"$"+2000} />
      <ItemList Nombre="Galaxy A33" img={imagenes.galaxy_a33} precio={"$"+3000}/>

    </div>
    </>
  )
}
export default App
