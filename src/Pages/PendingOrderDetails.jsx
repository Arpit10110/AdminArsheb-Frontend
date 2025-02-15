import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import Loading from '../Components/Loading';
import { useNavigate } from 'react-router-dom';
const PendingOrderDetails = () => {
    const naviagate = useNavigate();
    const Paramdata = useParams();
    const [Isloading,SetIsloading] = useState(true);
    const [Orderdata,SetOrderdata] = useState();

    const getorderdetail = async(id)=>{
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_Port}/orderdetails`,{
                id: id
            })
            SetOrderdata(data.data);
            SetIsloading(false);
        } catch (error) {
            SetIsloading(false);
            console.log(error)
        }
    }

        const acceptorder = async()=>{
            try {
                const {data} = await axios.post(`${import.meta.env.VITE_Port}/acceptorder`,{
                    id: Paramdata.id
                })
                console.log(data);
                naviagate("/");
            } catch (error) {
                console.log(error)
            }
        }





    useEffect(() => {
        getorderdetail(Paramdata.id)
    }, [])
    

  return (
    <>
    <Navbar/>
    {
        Isloading?<Loading/>:
        <div className='flex justify-between flex-wrap px-[2rem] mt-[5rem] items-baseline mb-[10rem] ' >   

            <div className='w-[40%] flex gap-[2rem] flex-col bg-gray-800 rounded-[1rem] p-[1rem] ' >
            <h1 className='text-[2.5rem] t text-red-500 ' >Product Info</h1>
                <div className='flex flex-col gap-[2rem] ' >
                    {
                        Orderdata.cart.map((i,index)=>{
                            return(
                                <div className='flex text-[2rem] gap-[1rem] bg-gray-700 rounded-md  overflow-hidden '  key={index} >
                                    <img className='w-[20%] object-contain rounded-[5px] h-[15vh] '  src={i.img} alt={i.title} />
                                    <div className='flex flex-col gap-[1rem] justify-center '>
                                        <h1>{i.title}</h1>
                                       <div className='flex gap-[1rem]'>
                                        <h1>Price:- ₹{i.price}</h1>
                                        <h1>Qty:- {i.qty}</h1>
                                       </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                 <div className='flex flex-col gap-[1rem]' >
                    <h1 className='text-[2.5rem] text-red-500 '  >Payment Info</h1>
                    <div className='text-[2rem] flex flex-col gap-[1rem] '>
                        <h1>Total price:- ₹{Orderdata.totalprice} </h1>
                        <h1>Shipping price:- ₹{Orderdata.shipping} </h1>
                        <h1>Total Amount Paid:- ₹{Orderdata.total} </h1>
                    </div>
                 </div>
            </div>
           <div className='w-[50%] flex flex-col gap-[3rem] '>
                <div className='flex gap-[2rem] flex-col bg-gray-800 rounded-[1rem] p-[1rem]  ' >
                        <h1 className='text-[2.5rem] text-center text-red-500 ' >Customer Info</h1>
                        <div className='text-[2rem] flex gap-[1rem] flex-col' >
                            <h2>Name:- {Orderdata.user.name}</h2>
                            <h2>email:- {Orderdata.user.email}</h2>
                            <h2>phone:- {Orderdata.user.phone}</h2>
                            <h2>Shipping Address:- {Orderdata.address}</h2>
                        </div>
                </div>
                <div className='flex gap-[2rem] flex-col bg-gray-800 rounded-[1rem]  py-[2rem]'>
                    <h1 className='text-[2.5rem] text-red-500  text-center'>Order Action</h1>
                    <div className='flex justify-center items-center gap-[5rem]' >
                        <button className='px-[1rem] py-[0.5rem] text-[2rem] bg-green-600 rounded-md text-white hover:scale-[1.02] transition-all ' onClick={acceptorder}  >Accept Order</button>
                        <button className='px-[1rem] py-[0.5rem] text-[2rem] bg-red-600 rounded-md text-white hover:scale-[1.02] transition-all ' >Cancel Order</button>
                    </div>
                </div>
           </div>

        </div>
    }
    </>
  )
}

export default PendingOrderDetails