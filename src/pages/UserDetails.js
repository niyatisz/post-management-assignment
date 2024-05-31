import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumsByUsers, fetchTodosByUsers, fetchUsers } from '../redux/action/Action';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import Albums from './Albums';
import Todos from './Todo'; 

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openAlbums, setOpenAlbums] = useState(false);
  const [openTodos, setOpenTodos] = useState(false); 

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (id) => {
    setSelectedUser(id);
    dispatch(fetchAlbumsByUsers(id));
    dispatch(fetchTodosByUsers(selectedUser));
  };

  const handleOpenAlbums = () => {
    setOpenAlbums(true);
  };

  
  const handleOpenTodos = () => {
    setOpenTodos(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card
              sx={{ maxWidth: 500, minHeight: '20vh', height: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3 }}
              onClick={() => handleUserClick(user.id)}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                <Typography gutterBottom component="div">
                  {user.email}
                </Typography>
                <Typography gutterBottom component="div">
                  {user.phone}
                </Typography>
                <Typography gutterBottom component="div">
                  {user.username}
                </Typography>
                <Typography gutterBottom component="div">
                  {user.website}
                </Typography>
              </CardContent>
              <Button size="small" variant='outlined' onClick={handleOpenAlbums}>Albums</Button>
              <Button size="small" variant='outlined' onClick={handleOpenTodos}>Todos</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Albums open={openAlbums} onClose={() => setOpenAlbums(false)} userId={selectedUser} />
      <Todos open={openTodos} onClose={() => setOpenTodos(false)} userId={selectedUser} /> 
    </div>
  );
};

export default UserDetails;