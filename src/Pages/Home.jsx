import React from 'react'
import Navbar from "../Components/Navbar.jsx"
import OrderNav from "../Components/OrderNav.jsx"
import PandingOrders from "../Components/PandingOrders.jsx"
const Home = () => {
  return (
    <>
    <Navbar />
    <OrderNav/>
    <PandingOrders/>
    </>
  )
}

export default Home