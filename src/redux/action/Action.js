
import axios from 'axios';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const FETCH_ALBUMS_BY_USERS = 'FETCH_ALBUMS_BY_USERS';
export const FETCH_TODO_BY_USERS = 'FETCH_TODO_BY_USERS';

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

export const fetchUsersRequest = () => ({
  type: FETCH_POSTS_REQUEST
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload : users
})
export const fetchUsersFailure = (error) => ({
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

export const fetchAlbums = (albums) => ({
  type: FETCH_ALBUMS_BY_USERS,
  payload: albums
});

export const fetchTodo = (todo) => ({
  type: FETCH_TODO_BY_USERS,
  payload: todo
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

export const fetchUsers = () => {
  return async (dispatch) => {
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
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
}

export const fetchTodosByUsers = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
}