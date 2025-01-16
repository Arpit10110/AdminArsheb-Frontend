import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const ProdNav = () => {
  return (
   <>
   <Navbar/>
      <div className='w-full justify-center mt-[1rem] flex gap-[3rem] text-[1.5rem] ' >
            <Link to="/allproduct" className='py-[0.5rem] px-[1rem] bg-gray-800 text-white rounded-[10px] hover:scale-[1.03] transition-all  '>ALL Products</Link>
            <Link to="/addproduct" className='py-[0.5rem] px-[1rem] bg-gray-800 text-white rounded-[10px] hover:scale-[1.03] transition-all  '>ADD Product</Link>
        </div>
        <Outlet/>
   </>
  )
}

export default ProdNav