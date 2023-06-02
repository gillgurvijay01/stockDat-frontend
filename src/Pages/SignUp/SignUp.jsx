import React,{useState} from 'react'
import { UserService } from '../../services/user.service'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../app/slice/loginSlice/loginSlice'
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
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
        UserService.SignUp({email,password}).then((res) => {
            console.log('res', res)
            if (res.status === 200) {
                console.log('Success to login');
                dispatch(login(res.data))
            }
          })
          .catch((error) => {
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
          onChange={handleNameChange}
          fullWidth
        />
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          margin="normal"
          onChange={handleEmailChange}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={handlePasswordChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={submit}
          sx={{ marginTop: '20px' }}
        >
          SignUp
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