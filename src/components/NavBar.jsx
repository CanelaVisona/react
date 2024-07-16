import React from "react"
import CartWidgets from "../components/CartWidgets.jsx/CartWidgets"
const NavBar = () => {
    return (
        <div>
            <h1>VamosChe</h1> 
            <ul>
                <li><a href="">Home</a>
                <a href="">Cursos</a>
                <a href="">Tienda</a>
                <a href="">Juegos</a></li>
            </ul>
            <CartWidgets />
        </div>

    )
}

export default NavBar