import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const { signup } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/post-details');
    }
  }, [navigate]); 

  const onSubmit = (data) => {
    signup(data);
    navigate('/');
  };
  const password = watch('password', '');
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
        <Typography variant="h4" gutterBottom sx={{ margin: 2 }}>Sign Up</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.firstName}
            helperText={errors.firstName ? "This field is required" : ""}
            {...register("firstName", { required: true })}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.lastName}
            helperText={errors.lastName ? "This field is required" : ""}
            {...register("lastName", { required: true })}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.email}
            helperText={errors.email ? "This field is required" : ""}
            {...register("email", { required: true })}
          />
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber ? "This field is required" : ""}
            {...register("mobileNumber", { required: true })}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.password}
            helperText={errors.password ? "This field is required" : ""}
            {...register("password", { required: true })}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ margin: 2 }}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword ? (errors.confirmPassword.type === 'required' ? "This field is required" : "Passwords do not match") : ""}
            {...register("confirmPassword", { required: true, validate: (value) => value === password })}
          />
          <Button type="submit" variant="contained" color="secondary" sx={{ margin: 2 }}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};
export default Signup;
