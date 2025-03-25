import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate()
    return (
        <>
            <div onClick={()=>navigate("/account/order/${5")} className='p-5 shadow-md shadow-black hover:shadow-lg border border-gray-300'>

                <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                    <Grid item xs={6} >
                        <div className="flex cursor-pointer">
                            <img
                                className='w-[5rem] h-[5rem] object-cover object-top'
                                src="https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/n/u/v/free-sleeveless-new-designer-embroidred-sequins-heavy-work-original-imaggbwhhhnmhxxd.jpeg?q=70"
                                alt="" />

                            <div className="ml-5 space-y-2">
                                <p>Printed Stitched Lehenga Choli</p>
                                <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                                <p className='opacity-50 text-xs font-semibold'>Colour:Black</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}>
                        <p>3,399</p>
                    </Grid>
                    <Grid item xs={4}>
                        {true &&
                            <div>
                                <p>
                                    <AdjustIcon
                                        className='mr-2 text-sm text-green-500'
                                        sx={{ width: "15px", height: "15px" }} />
                                    <span>
                                        Delivered On Mar 31
                                    </span>
                                </p>
                                <p className='text-xs'>Your Item Has Been Delivered</p>
                            </div>}
                        {false && <p>
                            <span>
                                Expected Delivered On Mar 31
                            </span>
                        </p>}
                    </Grid>
                </Grid>
            </div>


        </>
    )
}

export default OrderCard
