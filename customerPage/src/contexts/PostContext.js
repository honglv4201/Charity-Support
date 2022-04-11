import { createContext, useReducer } from "react";
import { postReducer } from "../reducers/PostReducer";
import axios from "axios";
import { apiUrl } from "./constants";
import { SET_POST } from "../reducers/actionType";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(postReducer, {
    listPost: [],
    isLoading: true,
  });

  const getPost = async () => {
    try {
      const postData = await axios.get(`${apiUrl}/post`);
      console.log("hong log post", postData.data);
      if (postData.data.success) {
        dispatch({
          type: SET_POST,
          payload: {
            post: postData.data.post,
          },
        });
      }
      return postData.data;
    } catch (error) {
      return error.response;
    }
  };
  const dataReturn = { postState, getPost };
  return (
    <PostContext.Provider value={dataReturn}>{children}</PostContext.Provider>
  );
};
export default PostContextProvider;
