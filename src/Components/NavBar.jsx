import { useState } from "react"
import './NavBar.css'
import { Link } from "react-router-dom"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListcontainer from "./ItemListContainer";

const NavBar = ({}) =>{

    return(
        <>
            <div className="div">
                <a href="/" className="texto">Consigue tu telefono!</a>

                <a href="nuevos"><input className="button-54" type="button" value="Nuevos"/></a>
                <a href="Usados"><input className="button-54" type="button" value="Usados"/></a>
                <a href="Mas_vendidos"><input className="button-54" type="button" value="Mas vendidos"/></a>

                <button className="btn_cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    45
                </button>

            </div>
        </>
    )
}
export default NavBar