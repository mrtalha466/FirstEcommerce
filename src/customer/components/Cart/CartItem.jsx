import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = () => {
    return (
        <>
            <div className='p-5 shadow-lg  rounded-md'>

                <div className="flex items-center">
                    <div className="w-[rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                        <img className='w-full h-full object-cover object-top'
                            src="https://rukminim1.flixcart.com/image/612/612/kb1470w0/jean/x/r/a/30-11274626-roadster-original-imafsgsthk6gdpjg.jpeg?q=70"
                            alt="Cart img" />
                    </div>

                    <div className='ml-5 space-y-5'>
                        {/* <p className='font-bold text-lg'>Roadster</p> */}
                        <p className='font-semibold'>Men Regular Mid Rise Blue Jeans</p>
                        <p className='opacity-70'>Size L,White</p>
                        <p className='opacity-70 mt-2'>Seller: Junaid jamshaid</p>

                        <div className='flex space-x-5 items-center  text-gray-900 pt-6 '>
                            <p className='font-semibold'>Rs,200</p>
                            <p className='opacity-50 line-through'>Rs,250</p>
                            <p className='opacity-50 line-through text-green-600 font-semibold'>5%off </p>
                        </div>
                    </div>

                </div>
                <div className='lg:flex items-center lg:space-x-10 pt-4'>

                    <div className='flex items-center space-x-2'>
                        <IconButton >
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className=' py-1 px-7 rounded-sm'>3 </span>
                        <IconButton sx={{ color: "RGB(145 85 253)" }} >
                            <AddCircleOutlineIcon />
                        </IconButton>

                    </div>
                    <div className=''>
                        <Button sx={{ color: "RGB(145 85 253)" }} >remove</Button>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CartItem