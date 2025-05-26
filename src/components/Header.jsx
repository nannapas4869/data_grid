import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <nav className="navbar shadow-md">
        <Link to="/">Column_def</Link>
    </nav>
    </>
  )
}

export default Header