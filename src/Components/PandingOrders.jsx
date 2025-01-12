import React,{useState,useEffect} from 'react'
import axios from "axios"
const PandingOrders = () => {
    const [isLoading,SetIsLoading] = useState(true);
    const [PendingList,SetPendingList] = useState([])

        const pendingdata = async()=>{
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_Port}/pendingorders`);
            console.log(data);
            
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => {
    //  pendingdata();
    }, [])
    
  return (
    <>
    </>
  )
}

export default PandingOrders