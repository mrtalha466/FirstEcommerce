import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, login } from '../../State/Auth/Action';

const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch=useDispatch();

    // useEffect(()=>{
    //         if(jwt){
    //             dispatch(getUser(jwt))
    //         }
    //     },[jwt,auth.jwt])

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        };

        dispatch(login(userData))
        // console.log("userData", userData);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <Grid container spacing={3} >

                    <Grid item xs={12} >
                        <TextField
                            required
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
                            Login
                        </Button>

                    </Grid>

                </Grid>
            </form>

               <div className='flex justify-center flex-col items-center'>
                            <div className='py-3 flex items-center'>
                                <p>if you don't have account </p>
                                <Button
                                    className='ml-5 ' size='small'
                                    onClick={() => navigate('/register')}>
                                    Register
                                </Button>
            
                            </div>
                        </div>
        </>
    )
}

export default LoginForm;
