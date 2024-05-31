import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_ALBUMS_BY_USERS,
  FETCH_TODO_BY_USERS,
  FETCH_ALBUMS_BY_USERS_SUCCESS,
  FETCH_TODO_BY_USERS_SUCCESS,
  FETCH_ALBUMS_BY_USERS_FAILURE,
  FETCH_TODO_BY_USERS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../../constant/ActionType";
const initialState = {
  posts: [],
  users: [],
  albums: [],
  todo: [],
  comments: [],
  loading: false,
  error: null,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: null,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      }
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? { ...post, ...action.payload } : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ALBUMS_BY_USERS:
      return {
        ...state,
        loading: true,
      };
      case FETCH_ALBUMS_BY_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          albums: action.payload,
        };
      case FETCH_ALBUMS_BY_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
    case FETCH_TODO_BY_USERS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODO_BY_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: action.payload,
      };
    case FETCH_TODO_BY_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments:action.payload,
        error: null,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postReducer;