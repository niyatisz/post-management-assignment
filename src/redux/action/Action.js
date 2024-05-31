
import axios from 'axios';
import { ADD_POST, DELETE_POST, EDIT_POST, FETCH_ALBUMS_BY_USERS, FETCH_ALBUMS_BY_USERS_FAILURE, FETCH_ALBUMS_BY_USERS_SUCCESS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_TODO_BY_USERS, FETCH_TODO_BY_USERS_FAILURE, FETCH_TODO_BY_USERS_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, } from '../../constant/ActionType';


/* POSTS CRUD OPERATION */
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

/* USER LISTING AND ITS ALBUMS AND TODOS VIEW */
export const fetchUsersRequest = () => ({
  type: FETCH_USER_REQUEST
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users
})
export const fetchUsersFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error
});
export const fetchAlbums = () => ({
  type: FETCH_ALBUMS_BY_USERS
});
export const fetchAlbumSuccess = (albums) => ({
  type: FETCH_ALBUMS_BY_USERS_SUCCESS,
  payload: albums
})
export const fetchAlbumFailure = (error) => ({
  type: FETCH_ALBUMS_BY_USERS_FAILURE,
  payload: error
});

export const fetchTodo = () => ({
  type: FETCH_TODO_BY_USERS
});
export const fetchTodoSuccess = (todo) => ({
  type: FETCH_TODO_BY_USERS_SUCCESS,
  payload: todo
});

export const fetchTodoFailure = (error) => ({
  type: FETCH_TODO_BY_USERS_FAILURE,
  payload: error
});
export const fetchCommentsRequest = () => ({
  type: FETCH_COMMENTS_REQUEST
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error
});


/* API CALLING */
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
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
}
export const fetchAlbumsByUsers = (id) => {
  return async (dispatch) => {
    dispatch(fetchAlbums())
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
      dispatch(fetchAlbumSuccess(response.data));
    } catch (error) {
      dispatch(fetchAlbumFailure(error.message));
    }
  };
}
export const fetchTodosByUsers = (id) => {
  return async (dispatch) => {
    dispatch(fetchTodo())
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
      dispatch(fetchTodoSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodoFailure(error.message));
    }
  };
}

export const fetchComments = (userId) => {
  return async (dispatch) => {
    dispatch(fetchCommentsRequest());
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`);
      dispatch(fetchCommentsSuccess(response.data));
    } catch (error) {
      dispatch(fetchCommentsFailure(error.message));
    }
  };
};


