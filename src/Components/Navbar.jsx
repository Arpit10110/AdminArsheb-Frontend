import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between py-[2rem] px-[2rem] items-center ' >
        <Link to="/" className='text-[2.5rem]' >Admin</Link>
        <div className='flex gap-[2rem] ' >
            <Link className='text-[1.5rem] hover:text-blue-300 hover:scale-[1.03] transition-all ' to="/">Orders</Link>
            <Link className='text-[1.5rem] hover:text-blue-300 hover:scale-[1.03] transition-all ' to="/allproduct">Products</Link>
            <Link className='text-[1.5rem] hover:text-blue-300 hover:scale-[1.03] transition-all ' to="/customer">Customers</Link>
        </div>
    </nav>
  )
}

export default Navbar