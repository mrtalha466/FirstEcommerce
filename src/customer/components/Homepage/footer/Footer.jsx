import { Button, Grid, Typography } from '@mui/material'
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
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            About
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Blog
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Press
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Jobs
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Patners
                        </Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 ' variant='h6' >
                        {""}
                        Solutions
                    </Typography>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Market
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Analytics
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Commerce
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            insights
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Support
                        </Button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 ' variant='h6' >
                        {""}
                        Documentation
                    </Typography>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Gudies
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Api Status
                        </Button>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5 ' variant='h6' >
                        {""}
                        Legal
                    </Typography>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Claims
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Privacy Policy
                        </Button>
                    </div>
                    <div>
                        <Button className='pb-5 ' variant='h6' gutterBottom>
                            {""}
                            Terms and Conditions
                        </Button>
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
                        Made By Talha Akram ❤️
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