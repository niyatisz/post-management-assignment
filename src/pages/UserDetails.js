import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbumsByUsers, fetchTodosByUsers, fetchUsers } from '../redux/action/Action';
import { Card, CardContent, Typography, Grid, List, ListItem } from '@mui/material';

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const albums = useSelector(state => state.albums);
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (id) => {
    dispatch(fetchAlbumsByUsers(id));
    dispatch(fetchTodosByUsers(id));
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
          <Grid item xs={12} sm={6} md={4} key={user.id} onClick={() => handleUserClick(user.id)}>
            <Card sx={{ maxWidth: 500, minHeight: '20vh', height: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3 }}>
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
            </Card>
          </Grid>
        ))}
      <div>
        <h2>Albums</h2>
        <List>
          {albums && albums.map(album => (
            <Typography key={album.id}>{album.title}</Typography>
          ))}
        </List>
        <h2>Todos</h2>
        <List>
          {todos && todos.map(todo => (
            <ListItem key={todo.id}>{todo.title}</ListItem>
          ))}
        </List>
      </div>
      </Grid>
    </div>
  );
};

export default UserDetails;
