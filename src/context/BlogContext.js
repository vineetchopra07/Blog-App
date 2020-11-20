import { call } from 'react-native-reanimated';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'editblogpost':
      return state.map((blogpost)=> {

        return blogpost.id === action.payload.id
        ? action.payload
        : blogpost;
      });
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    if(callback){
      callback();
    }
  };
};
const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};
const editBlogPost = dispatch => {
  return (id , title , content , callback  ) => {
     dispatch({type:'editblogpost' , payload: {id , title , content}})
  };
  if(callback){
    callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost , editBlogPost},
  [{title:'TEXT POST ', content:'TEST CONTENT'  , id:1}]
);
