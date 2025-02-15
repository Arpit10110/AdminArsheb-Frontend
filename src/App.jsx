import React from 'react'
import {HashRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Product from "./Pages/Product.jsx"
import ADDProduct from "./Pages/ADDProduct.jsx"
import CompletedOrder from "./Pages/CompletedOrder.jsx"
import CancelledOrder from "./Pages/CancelledOrder.jsx"
import PendingOrderDetails from "./Pages/PendingOrderDetails.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/completed-order' element={<CompletedOrder/>}  />
        <Route path='/cancelled-order' element={<CancelledOrder/>}  />
        <Route path='/allproduct' element={<Product/>}  />
        <Route path='/addproduct' element={<ADDProduct/>}  />
        <Route path='/pending/orderdetail/:id' element={<PendingOrderDetails/>}  />
      </Routes>
    </Router>
  )
}

export default App