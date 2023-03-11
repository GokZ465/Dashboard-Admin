import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, Typography, MenuItem, Select } from "@mui/material";
//import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import "./Login.css";



const Register = ({ history }) => {

  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  //  const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, error } = useSelector(state => state.auth);
    const navigate = useNavigate()

    
    useEffect(() => {

        if (isAuthenticated) {
          console.log("isAuthenticated", isAuthenticated)
          navigate('/');
          }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

    }, [dispatch,  isAuthenticated, error, history ])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("register", e)
        dispatch(register({name, email, password, role}))
        //window.alert($(e.target.name), 'is registered')
        //window.location.reload();
    }

    return (
      <div className="form" style={{
        width: '50% !important'
      }}>
        <form className="login-box" onSubmit={submitHandler}>
          <Box
            marginLeft="auto"
            marginRight="auto"
            width={300}
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2">Register</Typography>
            <div className="user-box" >
            <TextField
              label="Name"
              style={ { color: 'rgb(50, 50, 50)' }}
              type="name"
              id="name_field"
              className="input"
              //color="white"
              value={name}
              onChange={(e) => setName(e.target.value)}          
          />
            <TextField
              label="Email"
              type="email"
              id="email_field"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}          
          />
                                  
                                  
          <TextField
              label="Password"
              type="password"
              id="password_field"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
        <Select
                lable="Role"
                type="role"
                id="role_field"
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: "100%",
                  border: "2px solid white",
                  color: "white"
                }}
                
                >
      <MenuItem value="user">User</MenuItem>
      <MenuItem value="superadmin">Superadmin</MenuItem>
      <MenuItem value="statelevelhead">Statelevelhead</MenuItem>
      <MenuItem value="statelevelcoordinators">Statelevelcoordinators</MenuItem>
      <MenuItem value="districtlevel">Districtlevel</MenuItem>
      <MenuItem value="areahead">Areahead</MenuItem>
      <MenuItem value="designers">Designers</MenuItem>
      <MenuItem value="postchecker">Postchecker</MenuItem>
    
      </Select>                      
    
          <Button
              className="btn"
              type="submit"
          >
          REGISTER
          </Button>
          </div>
          </Box>
        </form>
      </div>
    );
}

export default Register;
