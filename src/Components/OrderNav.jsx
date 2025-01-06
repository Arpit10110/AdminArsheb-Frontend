import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const OrderNav = () => {
  return (
    <>
        <div className='w-full justify-center mt-[1rem] flex gap-[3rem] text-[1.5rem] ' >
            <Link to="/" className='py-[0.5rem] px-[1rem] bg-gray-800 text-white rounded-[10px] hover:scale-[1.03] transition-all  '>Pending</Link>
            <Link to="/completed-order" className='py-[0.5rem] px-[1rem] bg-gray-800 text-white rounded-[10px] hover:scale-[1.03] transition-all  '>Completed</Link>
            <Link to="/cancelled-order" className='py-[0.5rem] px-[1rem] bg-gray-800 text-white rounded-[10px] hover:scale-[1.03] transition-all  '>Cancelled</Link>
        </div>
        <Outlet/>
    </>
  )
}

export default OrderNav