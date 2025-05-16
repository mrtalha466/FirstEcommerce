import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../State/Auth/Action';
import { Store } from '@mui/icons-material';


const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth}=useSelector(Store=>Store)

    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt))
        }
    },[jwt,auth.jwt])
    

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
        }
        dispatch(register(userData))
        // console.log("userData", userData);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <Grid container spacing={3} >
                    <Grid item xs={12} sm={6} >
                        <TextField
                            required
                            type='text'
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                        />

                    </Grid>

                    <Grid item xs={12} sm={6} >
                        <TextField
                            required
                            type='text'
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                        />

                    </Grid>

                    <Grid item xs={12} >
                        <TextField
                            required
                            type='email'
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="Email"
                        />

                    </Grid>

                    <Grid item xs={12}  >
                        <TextField
                            required
                            type='password'
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="Password"
                        />

                    </Grid>

                    <Grid item xs={12} >
                        <Button
                            className='bg-[#955FD] w-full'
                            type="submit"
                            variant="contained"
                            color="primary"
                            size='large'
                            sx={{ padding: '.8rem 0', bgcolor: '#955FD' }}
                        >
                            Register
                        </Button>

                    </Grid>

                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you have already account ?</p>
                    <Button
                        className='ml-5 ' size='small'
                        onClick={() => navigate('/login')}>
                        Login
                    </Button>

                </div>
            </div>
        </>
    )
}

export default RegisterForm
