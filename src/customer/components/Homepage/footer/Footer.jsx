import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-alice-carousel'

const Footer = () => {

    return (
        <>
            <Grid className='bg-black text-white text-center mt-10 '
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 ' variant='h6' >
                        {""}
                        company
                    </Typography>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            About
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            {""}

                            Blog
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Press
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Jobs
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Patners
                        </button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 ' variant='h6' >
                        {""}
                        Solutions
                    </Typography>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Market
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Analytics
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Commerce
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            insights
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Support
                        </button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 ' variant='h6' >
                        {""}
                        Documentation
                    </Typography>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Gudies
                            </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Api Status
                        </button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 ' variant='h6' >
                        {""}
                        Legal
                    </Typography>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Claims
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Privacy Policy
                        </button>
                    </div>
                    <div>
                        <button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Terms and Conditions
                        </button>
                    </div>

                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component="p" align="center" >
                        {""}
                        &copy;  {""}
                        {new Date().getFullYear()} {""}
                        All rights reserved.
                    </Typography>
                    <Typography variant='body2' component="p" align="center" >
                        {""}
                        Made By Talha Akram
                    </Typography>
                    <Link className='hover:underline' href='https://www.hanlystore.com'
                        target='blank' color='inherit' underline="always">
                        Hanly Store
                    </Link>
                </Grid>

            </Grid>

        </>
    )
}

export default Footer