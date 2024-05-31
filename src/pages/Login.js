import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const setUser = useContext(AuthContext);

  const onSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem('users'))
    const user = existingUsers.find(user => user.email === data.email && user.password === data.password);


    if (user) {
      alert('Login successful!');
      localStorage.setItem('isLoggedIn', true)
      navigate('/post-details')
      setUser(user);
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Box sx={{ maxWidth: 500, boxShadow: 6, margin: 2, padding: 5 }}>
        <Typography variant="h4" gutterBottom sx={{ margin: 2 }}>Login</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.email}
            helperText={errors.email ? "This field is required" : ""}
            {...register('email', { required: true })}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.password}
            helperText={errors.password ? "This field is required" : ""}
            {...register('password', { required: true })}
          />
          <Button type="submit" variant="contained" color="secondary" sx={{ margin: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;