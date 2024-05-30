// postReducer.js
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    ADD_POST,
    EDIT_POST,
    DELETE_POST
  } from '../action/Action';
  const initialState = {
    posts: [],
    loading: false,
    error: null
  };
  const postReducer = (state = initialState, action) => {
    console.log('action: ', action);
    console.log('state: ', state);
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
          error: null
        };
      case FETCH_POSTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case ADD_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
      // case EDIT_POST:
      //   return {
      //     ...state,
      //     posts: state.posts.map(post => {
      //       if (post.id === action.payload.id) {
      //         return action.payload;
      //       }
      //       return post;
      //     })
      //   };
      case EDIT_POST:
        return {
          ...state,
          posts: state.posts.map(post =>
            post.id === action.payload.id ? { ...post, ...action.payload } : post
          )
        };
      // case DELETE_POST:
      //   return {
      //     ...state,
      //     posts: state.posts.filter(post => post.id !== action.payload)
      //   };
        case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
      default:
        return state;
    }
  };
  export default postReducer;