import { SET_POST } from "./actionType";

export const postReducer = (state, action) => {
  const {
    type,
    payload: { post },
  } = action;
  switch (type) {
    case SET_POST: {
      return {
        ...state,
        listPost: post,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
