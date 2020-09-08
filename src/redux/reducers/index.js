import { assignUsers } from "../../utils";

const initialState = {
  users: [],
  posts: [],
  comments: {},
  activeComments: [],
  activePostId: undefined,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.data,
      };
    case "SET_POSTS":
      const postsWithUsers = assignUsers({
        assignableList: action.data,
        users: state.users,
      });

      return { ...state, posts: postsWithUsers };
    case "FILTER_POSTS":
      return { ...state, posts: state.posts.filter((p) => p.id !== action.id) };
    case "ADD_POSTS":
      const userId = Math.floor(Math.random() * 10);
      const { title, body } = action.payload;
      return {
        ...state,
        posts: [
          {
            title,
            body,
            id: state.posts.length + 1,
            userId,
            user: state.users.find((u) => u.id === userId),
          },
          ...state.posts,
        ],
      };
    case "SET_COMMENT":
      if (state.activePostId === action.payload.id) {
        return state;
      }
      if (state.comments[action.payload.id]) {
        return {
          ...state,
          activeComments: state.comments[action.payload.id],
          activePostId: action.payload.id,
        };
      }
      return {
        ...state,
        comments: {
          ...state.comments,
          [action.payload.id]: action.payload.data,
        },
        activeComments: action.payload.data,
        activePostId: action.payload.id,
      };
    default:
      return state;
  }
}

export default rootReducer;
