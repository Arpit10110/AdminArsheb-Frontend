import React, { useState } from 'react'
import ProdNav from '../Components/ProdNav'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
const ADDProduct = () => {
    const [age, setAge] = useState('jewellery');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <>
     <ProdNav/>
     <div >
        <form action="">
            <div>
                <h1>Title</h1>
                <input type="text" required/>
            </div>
            <div>
                <h1>Price</h1>
                <input type="text" required/>
            </div>
            <div>
                <h1>Product Type</h1>
                <Select        labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"  value={age} onChange={handleChange} >
                    <MenuItem value={"jewellery"}>Jewellery</MenuItem>
                    <MenuItem value={"mens"}>Men's</MenuItem>
                    <MenuItem value={"womens"}>Women's</MenuItem>
                    <MenuItem value={"footwear"}>Footwear</MenuItem>
                    <MenuItem value={"bags"}>Bag's</MenuItem>
                    <MenuItem value={"hairacc"}>Hair Accessories</MenuItem>
                </Select>
            </div>

        </form>
     </div>
    </>
  )
}

export default ADDProduct