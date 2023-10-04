import React,{useState,useEffect} from 'react'
import { UserService } from '../../services/user.service'
import { useSelector, useDispatch } from 'react-redux'
import { login,logout } from '../../app/slice/loginSlice/loginSlice'
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {BeatLoader} from 'react-spinners';
import { useSnackbar } from 'notistack';
const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const submit = () =>{
        setIsLoading(true)
        if(!email){
            enqueueSnackbar("Fill the Email Column", { variant: 'warning' })
            setIsLoading(false)
            return;
        }
        else  if(!name){
            enqueueSnackbar("Fill the Name Column", { variant: 'warning' })
            setIsLoading(false)
            return;
        }
        else if(!password){
            enqueueSnackbar("Fill the Password Column", { variant: 'warning' })
            setIsLoading(false)
            return;
        }
        UserService.SignUp({email,name,password}).then((res) => {
            console.log('res', res)
            if (res.status === 200) {
                console.log('Success to login');
                dispatch(login(res.data))
                setIsLoading(false);
            }
          })
          .catch((error) => {
            setIsLoading(false);
            console.log('error', error)
            console.log('Failed to login')
        });
  
    }
  return (
        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',


      }}
    >
      <Container maxWidth="sm" >
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            backgroundColor: '#fff',
          }}
      >
        <Typography variant="h4" gutterBottom>
         Sign Up
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          onChange={handleEmailChange}
          disabled = {isLoading}
          fullWidth
        />
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          margin="normal"
          onChange={handleNameChange}
          disabled = {isLoading}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          disabled = {isLoading}
          onChange={handlePasswordChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={submit}
          disabled = {isLoading}
          sx={{ marginTop: '20px' }}
        >
            {isLoading ? <BeatLoader color="hsla(210, 79%, 46%, 1)" />
:         "SignUp"
}
        </Button>
        <Typography
            variant="body2"
            align="left"
            sx={{
              marginTop: '10px',
              cursor: 'pointer',
              '&:hover': {
                color: 'blue',
              },
            }}
            // onClick = {()=>dispatch(logout())}
            onClick= {()=>navigate('/')}
          >
            Existing user? Click here to Log in
          </Typography>
      </Box>
    </Container>
    </Box>
  )
}

export default SignUp