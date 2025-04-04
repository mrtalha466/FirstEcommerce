import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Form } from 'react-router-dom'

const DeliveryAddressForm = () => {

  const handleSubmit = (e) => {

    e.preventDefault();

    const data = new FormData(e.currentTarget)

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get('lastName'),
      address: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zipcode: data.get("zipcode"),
      mobile: data.get('phoneNumber'),
    }
    console.log('address', address)
  }
  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border border-gray-300 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button sx={{ mt: '2', bgcolor: 'black' }} size='large' variant='contained'>Deliver Here</Button>
          </div>

        </Grid>
        <Grid item xs={12} lg={7}>

          <Box className='border border-gray-300 rounded-s-md shadow-md p-5'>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    id='adddress'
                    name='address'
                    label='Address'
                    fullWidth
                    autoComplete='given-name'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='city'
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='state'
                    name='state'
                    label='State/Provine/Region'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='zipcode'
                    name='zipcode'
                    label='Zip/Postal Code'
                    fullWidth
                    autoComplete='shipping postal code'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='phoneNumber'
                    name='phoneNumber'
                    label='Phone Number'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{ py: 1.5, mt: '2', bgcolor: 'black' }}
                    size='large'
                    variant='contained'
                    type='submit'>
                    Deliver Here
                  </Button>

                </Grid>


              </Grid>
            </form>

          </Box>

        </Grid>


      </Grid>


    </>
  )
}

export default DeliveryAddressForm
