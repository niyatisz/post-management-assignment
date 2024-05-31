import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link href="/post-details" color="inherit" underline="none">
            <Typography variant="h6" component="div">
              Post
            </Typography>
          </Link>
          <Link
            href="/user-details"
            color="inherit"
            underline="none"
            sx={{ marginLeft: "20px", flexGrow: 1 }}
          >
            <Typography variant="h6" component="div">
              User
            </Typography>
          </Link>
          {isLoggedIn ? (
            <Button color="inherit" variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Link href="/" color="inherit" underline="none">
                <Button color="inherit" variant="outlined" sx={{ margin: 1 }}>
                  Login
                </Button>
              </Link>
              <Link href="/signup" color="inherit" underline="none">
                <Button color="inherit" variant="outlined" sx={{ margin: 1 }}>
                  Signup
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}