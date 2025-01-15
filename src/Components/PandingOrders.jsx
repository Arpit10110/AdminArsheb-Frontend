import React,{useState,useEffect} from 'react'
import axios from "axios"
import Datatable from './Datatable';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const PandingOrders = () => {
    const [isLoading,SetIsLoading] = useState(true);
    const [PendingList,SetPendingList] = useState([])

    const columns = [
        { id: 'sn', label: 'SN.', minWidth: 50 },
        { id: 'Date', label: 'Date & Time', minWidth: 50 },
        // { id: 'customer_name', label: 'Customer Name', minWidth: 50 },
        { id: 'customer_address', label: 'Customer Address', minWidth: 50 },
        { id: 'total', label: 'Total Amount', minWidth: 50 },
        { id: 'payment', label: 'Payment', minWidth: 50 },
        { id: 'status', label: 'Status', minWidth: 50 },
        { id: 'view_more', label: 'View More', minWidth: 50 },
      ];

        const pendingdata = async()=>{
        try {
            const {data} = await axios.get(`${import.meta.env.VITE_Port}/pendingorders`);
            console.log(data);
            SetPendingList(data.data);
            SetIsLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
     pendingdata();
    }, [])
    
  return (
    <>
    {
        isLoading?<div className='text-[4rem] font-semibold flex justify-center items-center min-h-[60vh]'>
            <h1>Loading....</h1>
        </div>:
    <div className='w-full pt-[2rem] flex flex-wrap justify-around gap-y-[3rem] pb-[5rem] mt-[3rem]' >
               <Paper sx={{ width: '95%', overflow: 'visible'  }}>
               <TableContainer sx={{ maxHeight: 'none' }}>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow >
                        {columns.map((column) => (
                            <TableCell
                            className='!text-[1.4rem] !font-semibold !text-center '
                            key={column.id}
                            align={column.align || 'left'}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    {
                PendingList.map((i,index)=>{
                    return(
                        <Datatable key={index} date={i.orderdate} sn={index+1} total={i.totalprice} payment={i.payment} address={i.address}/>
                    )
                })
            }
                    </Table>
               </TableContainer>
               </Paper>
    </div>
    }
    </>
  )
}

export default PandingOrders