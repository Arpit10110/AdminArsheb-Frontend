import React from 'react'
import {HashRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Product from "./Pages/Product.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/allproduct' element={<Product/>}  />
      </Routes>
    </Router>
  )
}

export default App