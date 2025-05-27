import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <nav className="navbar shadow-md">
        <Link to="/">นิยาม Column</Link>
        <Link to="/column-visible">Column Visible</Link>
        <Link to="/row" >Row</Link>
    </nav>
    </>
  )
}

export default Header