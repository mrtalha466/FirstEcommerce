import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate=useNavigate()

    const handleCheckOut=()=>{
        navigate("/Checkout?step=2")
    }
    return (
        <>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2 '>
                   {[1,1,1].map((item)=><CartItem />)}
                </div>

                <div className='px-5 sticky top-0 h-[100vh] lg:mt-0'>
                    <div className="border-gray-300 border">
                        <div className=' uppercase font-bold opacity-60 pb-4'>Price Details</div>
                        <hr />
                        <div className='space-y-3 p-3 font-semibold'>
                            <div className="flex justify-between pt-3 ">
                                <span>Price</span>
                                <span >4697</span>
                            </div>
                            <div className="flex justify-between pt-3 ">
                                <span>Discount</span>
                                <span className='text-green-500'> -3410</span>
                            </div>
                            <div className="flex justify-between pt-3 ">
                                <span>Delivery Charges</span>
                                <span className='text-green-500'>Free</span>
                            </div>
                            <div className="flex justify-between pt-3 ">
                                <span>Total Amount</span>
                                <span className='text-green-500'>1278</span>
                            </div>
                            <Button onClick={handleCheckOut} variant='contained' className='w-full mt-5' sx={{mt: "1rem", py: ".7rem", px: "2.5rem", bgcolor: "black", color: "white" }}>
                                    Checkout
                                </Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart