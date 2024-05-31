import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, fetchComments } from '../../redux/action/Action';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import Comments from './Comments';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const comments = useSelector(state => state.comments);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [openComments, setOpenComments] = useState(false)
  const [value, setValue] = React.useState(0);

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
      <Card sx={{ height: 40, display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
        <Button onClick={() => setOpenModal(true)} variant='contained' color='secondary' size='small'>
          Create Post
        </Button>
      </Card>
      <Grid container spacing={2} justifyContent="center">
        {posts && posts.map(post => (
          <Grid item xs={12} sm={6} md={3} key={post.id}>
            <Card sx={{ maxWidth: 500, minHeight: '50vh', height: '290px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3, boxShadow:5 }}>
              <CardContent sx={{ flexGrow: 1 }} >
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography gutterBottom component="div">
                  {post.body}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small" variant='contained' color='secondary' onClick={() => openEditModal(post)}> <ModeEditIcon /></Button>
                <Button size="small" variant='contained' color='secondary' onClick={() => handleDelete(post.id)}><DeleteIcon /></Button>
                <Button size="small" variant='contained' color='secondary' onClick={() => handleComments(post.userId)}><CommentIcon /></Button> 
              </CardActions> */}
              <Box sx={{ width: 400 }}>
                <BottomNavigation
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ display: 'flex', justifyContent: 'center', gap:1, margin:2}}
                >
                <Button size="small" variant='contained' color='secondary' onClick={() => openEditModal(post)}> <ModeEditIcon /></Button>
                <Button size="small" variant='contained' color='secondary' onClick={() => handleDelete(post.id)}><DeleteIcon /></Button>
                <Button size="small" variant='contained' color='secondary' onClick={() => handleComments(post.userId)}><CommentIcon /></Button> 
                </BottomNavigation>
              </Box>
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