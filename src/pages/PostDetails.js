import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, fetchComments } from '../redux/action/Action';
import { Button, Card, CardActions, CardContent, Typography, Grid } from '@mui/material';
import CreatePost from './CreatePost';
import EditPost from './EditPost'; // Import the CommentsModal component
import Comments from './Comments';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const comments = useSelector(state => state.comments);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openComments,setOpenComments] = useState(false)

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const openEditModal = (post) => {
    setSelectedPost(post);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleComments = (userId) => {
    dispatch(fetchComments(userId));
    setOpenComments(true); // Open the modal when fetching comments
  };

  return (
    <div>
      <Card sx={{ height: 50, display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => setOpenModal(true)}>
          Create Post
        </Button>
      </Card>
      <Grid container spacing={2} justifyContent="center">
        {posts && posts.map(post => (
          <Grid item xs={12} sm={6} md={3} key={post.id}>
            <Card sx={{ maxWidth: 500, minHeight: '50vh', height: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3 }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography gutterBottom component="div">
                  {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='outlined' onClick={() => openEditModal(post)}> <ModeEditIcon /></Button>
                <Button size="small" variant='outlined' onClick={() => handleDelete(post.id)}><DeleteIcon /></Button>
                <Button size="small" variant='outlined' onClick={() => handleComments(post.userId)}><CommentIcon /></Button> 
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CreatePost open={openModal} onClose={() => setOpenModal(false)} />
      <Comments open={openComments} comments={comments} onClose={() => setOpenComments(false)} /> 
      {selectedPost && <EditPost open={openModal} onClose={() => setOpenModal(false)} post={selectedPost} />}
    </div>
  );
};

export default Post;