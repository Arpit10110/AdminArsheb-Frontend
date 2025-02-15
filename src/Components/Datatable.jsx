import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from '@mui/material';
const Datatable = ({id,date,sn,customername,payment,address,total,status}) => {
    const columns = [
        { id: 'sn', label: 'SN.', minWidth: 50 },
        { id: 'Date', label: 'Date & Time', minWidth: 50 },
        { id: 'customer_name', label: 'Customer Name', minWidth: 50 },
        { id: 'customer_address', label: 'Customer Address', minWidth: 50 },
        { id: 'total', label: 'Total Amount', minWidth: 50 },
        { id: 'payment', label: 'Payment', minWidth: 50 },
        { id: 'status', label: 'Status', minWidth: 50 },
        { id: 'view_more', label: 'View More', minWidth: 50 },
      ];

      const rows = [
        { 
        sn: sn,
        customer_name: customername,
        customer_address: address ,
        Date:date,
        payment: payment,
        total: `₹${total}`,
        status:status
         }
      ];


  return (
   <>
     <TableBody>
    {rows.map((row) => (
      <TableRow hover key={row.sn}>
        {columns.map((column) => (
          <TableCell className='!text-[1.2rem]  ' key={`${row.sn}-${column.id}`}>
            {
              column.id == "view_more" ? 
              <Link className=' text-blue-500   '  href={`#/pending/orderdetail/${id}`} >click here</Link>:
              row[column.id]
            }
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
   </>
  )
}

export default Datatable