import React, { useState } from 'react'
import ProdNav from '../Components/ProdNav'
import axios from "axios"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const ADDProduct = () => {
  const [open, setOpen] = useState(false);
    const [Producttitle, SetProducttitle] = useState('');
    const [ProductPrice, SetProductPrice] = useState('');
    const [ProductDesc, SetProductDesc] = useState('');
    const [Producttype, SetProducttype] = useState('');
    const [ProductImage,SetProductImage] = useState([]);


    const submitproduct = async(e)=>{
      e.preventDefault();
      try {
        const {data} = await axios.post(`${import.meta.env.VITE_Port}/addproducts`,{
          producttitle:Producttitle,
          productprice:ProductPrice,
          productdesc:ProductDesc,
          producttype:Producttype,
          productimage:ProductImage
        })
        console.log(data);
        alert("Product added successfully");
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

    const UpladImage = async(e)=>{
      setOpen(true);
      try {
        const Image=e.target.files[0];
        const data = new FormData();
        data.append("file",Image);
        data.append("upload_preset","arsheb");
        data.append("cloud_name","dblybkghe");
        console.log("this is "+data)
        const res = await axios.post("https://api.cloudinary.com/v1_1/dblybkghe/image/upload",data)
        setOpen(false);
        alert("--Image Uploaded---")
        const imageurl = res.data.secure_url;
        SetProductImage([...ProductImage, imageurl])
      } catch (error) {
        setOpen(false);
        console.log(error)
      }
  
    }
    
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
     <ProdNav/>
     <div className='w-full flex justify-center items-center'  >
        <form onSubmit={submitproduct}  className='w-[50%] bg-gray-900 rounded-md mt-[5rem] flex flex-col gap-[1rem] text-[1.5rem] p-[1rem] ' >
            <div className='w-full' >
                <h1>Title</h1>
                <input onChange={(e)=>{SetProducttitle(e.target.value)}} className='w-full p-[0.3rem] rounded-md bg-[#ffffff3b] text-white border-none focus:outline-none  '  type="text" required/>
            </div>
            <div className='w-full'>
                <h1>Price</h1>
                <input onChange={(e)=>{SetProductPrice(e.target.value)}} className='w-full p-[0.3rem] rounded-md bg-[#ffffff3b] text-white border-none focus:outline-none  ' type="text" required/>
            </div>
            <div className='w-full flex gap-[2rem] '>
                <h1>Product Type</h1>
                <select className=' p-[0.3rem] rounded-md text-white bg-gray-600  focus:outline-none ' name='producttype' onChange={(e)=>{
                  SetProducttype(e.target.value);
                }}  required>
                  <option value=""  >--Select Product Type--</option>
                  <option value="Jewellery" >Jewellery</option>
                  <option value="mens">Men's</option>
                  <option value="womens">Women's</option>
                  <option value="footwear">footwear</option>
                  <option value="bags">bags</option>
                  <option value="hairacc">Hair Accessories</option>
                </select>
            </div>
            <div className='w-full'>
               <h1>Product Desc</h1>
               <textarea onChange={(e)=>{SetProductDesc(e.target.value)}}  className='w-full h-[15vh] p-[0.3rem] rounded-md bg-[#ffffff3b] text-white border-none focus:outline-none  ' type="text" required/>
            </div>
            <div className='w-full flex gap-[2rem] '>
               <h1>Product Image</h1>
               <input onChange={UpladImage}   type="file" required/>
            </div>
            <div className='w-full flex gap-[2rem] '>
               <h1>Product Image</h1>
               <input onChange={UpladImage}   type="file" />
            </div>
            <div className='w-full flex gap-[2rem] '>
               <h1>Product Image</h1>
               <input onChange={UpladImage}   type="file" />
            </div>
              <button className='m-auto cursor-pointer bg-black text-white px-[1rem] py-[0.5rem] rounded-md ' >Add the product</button>
        </form>
     </div>
    </>
  )
}

export default ADDProduct