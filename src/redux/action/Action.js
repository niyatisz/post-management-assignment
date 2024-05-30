
import axios from 'axios';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});
export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error
});
export const AddPost = (title, body) => ({
  type: ADD_POST,
  payload: {
    title,
    body,
  }
});
export const editPost = (id, title, body) => ({
  type: EDIT_POST,
  payload: {
    id,
    title,
    body
  }
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};