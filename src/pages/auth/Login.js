import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/post-details');
    }
  }, [navigate]); 

  const onSubmit = (data) => {
    login(data);
    navigate('/post-details');
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