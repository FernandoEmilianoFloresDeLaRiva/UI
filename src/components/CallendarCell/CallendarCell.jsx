

import { useState } from 'react'
import './CallendarCell.css'

export default function CallendarCell({day, month, year, dayOrders, setSuccess}) {

    const [orders, setOrders] = useState(dayOrders)

    const addOrder = (e) =>{
    
        const order = e.dataTransfer.getData('order')
        const hour = e.dataTransfer.getData('hour')
        orders.push({order: order, hour: hour})
        setOrders([...orders])

        setSuccess(true)

    }



    return(
        <>
        
        {
            (day !== 0) ? (
                <td className='calendarCell' onDrop={addOrder} onDragOver={(e) => {e.preventDefault()}}> 
                    <span className='day'>
                        {day}-{month}-{year}
                    </span>
                    {
                        orders.map(order => {
                            return <span className='orderSpan'>
                                    <span>#{order.order}</span>
                                    <span>{order.hour}</span>
                                </span>
                        })
                    }
                </td>

            ): (
                <td className='disabled'>
                    
                </td>
            )
            
        }
        </>
    )
}

