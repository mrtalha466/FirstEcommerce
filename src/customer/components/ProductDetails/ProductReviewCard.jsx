import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height:56, bgcolor: "black" }}>T</Avatar>
                    </Box>

                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className='text-lg font-bold'>Talha</p>
                            <p className='opacity-70 font-semibold text-sm'>Mar, 20, 2025</p>
                        </div>
                    </div>

                    <Rating value={4.5} name='half-rating' readOnly precision={.5} />
                    <p>Nice Product I Love ❤️ U</p>
                </Grid>

            </Grid>
        </> 
  )
}

export default ProductReviewCard