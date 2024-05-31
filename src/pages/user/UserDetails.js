import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumsByUsers, fetchTodosByUsers, fetchUsers } from '../../redux/action/Action';
import { Card, CardContent, Typography, Grid, Button, Box, BottomNavigation } from '@mui/material';
import Albums from './Albums';
import Todos from './Todo';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AlbumIcon from '@mui/icons-material/Album';

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openAlbums, setOpenAlbums] = useState(false);
  const [openTodos, setOpenTodos] = useState(false);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (id) => {
    setSelectedUser(id);
    dispatch(fetchAlbumsByUsers(id));
    dispatch(fetchTodosByUsers(id));
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
          <Grid item xs={12} sm={6} md={3} key={user.id}>
            <Card
              sx={{ maxWidth: 500, minHeight: '20vh', height: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3, boxShadow:5 }}
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
              {/* <CardActions>
              <Button size="small" variant='contained' color='secondary' onClick={handleOpenAlbums}>Albums</Button>
              <Button size="small" variant='contained' color='secondary' onClick={handleOpenTodos}>Todos</Button>
              </CardActions> */}
              <Box sx={{ width: 400 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ display: 'flex', justifyContent: 'center', gap: 1, margin: 1 }}
                >
                  <Button size="small" variant='contained' color='secondary' onClick={handleOpenAlbums} startIcon={<AlbumIcon />}>Albums</Button>
                  <Button size="small" variant='contained' color='secondary' onClick={handleOpenTodos} startIcon={<ListAltIcon/>}>Todos</Button>
                </BottomNavigation>
              </Box>
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