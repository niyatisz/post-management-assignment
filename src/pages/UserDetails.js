import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddPost, deletePost, editPost, fetchPosts } from '../redux/action/Action';
import { Button, Card, CardActions, CardContent, CardHeader, Typography, Grid } from '@mui/material';
import CreatePost from './CreatePost';
// import EditPost from './EditPost';
const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const openEditModal = () => {
    setOpenModal(true);
  };
  const handleEdit = () => {
    setOpenModal(true);
  };

  const handleDelete = () => {
    dispatch(deletePost(posts.id));
  }
  return (
    <div>
      <Card sx={{ height: 50, display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={openEditModal}>
          Create Post
        </Button>
      </Card>
      <Grid container spacing={2} justifyContent="center">
        {posts && posts.map(post => (
          <Grid item xs={12} sm={6} md={3} key={post.id}>
            <Card sx={{ maxWidth: 500, minHeight: '50vh',height: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3 }}>
              {/* <CardHeader title="Posts" /> */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography gutterBottom component="div">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='outlined' onClick={handleEdit}>Edit</Button>
                <Button size="small" variant='outlined' onClick={()=> handleDelete(post.id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CreatePost open={openModal} onClose={() => setOpenModal(false)} />
      {/* <EditPost open={openModal} onClose={() => setOpenModal(false)} /> */}
    </div>
  );
};
export default Post;