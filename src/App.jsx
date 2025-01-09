import React from 'react'
import {HashRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Product from "./Pages/Product.jsx"
import CompletedOrder from "./Pages/CompletedOrder.jsx"
import CancelledOrder from "./Pages/CancelledOrder.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/completed-order' element={<CompletedOrder/>}  />
        <Route path='/cancelled-order' element={<CancelledOrder/>}  />
        <Route path='/allproduct' element={<Product/>}  />
      </Routes>
    </Router>
  )
}

export default App