import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Orderetails = () => {
    return (
        <>
            <div className='px:5 lg:px-20'>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>

            <Grid  className='space-y-5 px-10' container>
                {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-lg rounded-md p-5 border border-gray-300'
                    sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>

                        <div className='flex items-center space-x-4' >
                            <img className='w-[5rem] h-[5rem] object-cover object-top'
                                src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
                                alt="Orderdetal" />


                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Men Regular Mid Rise Black Jeans</p>
                                <p className='opacity-50 space-x-5 text-xs font-semibold'>
                                    <span>Color: Blue</span>
                                    <span>Size: L</span>
                                </p>
                                <p>Seller: John thoms</p>
                                <p>3060</p>
                            </div>
                        </div>

                    </Grid>

                    <Grid item>

                        <Box className="text-purple-500">
                            <StarBorderIcon sx={{ fontSize: "2rem" }}
                                className='px-2' />
                            <span>Rate & Review Products</span>
                        </Box>

                    </Grid>

                </Grid>)}
                

            </Grid>

        </>
    )
}

export default Orderetails
