export const setUsers = (data) => ({
  type: "SET_USERS",
  data,
});

export const receivePosts = (data) => ({
  type: "SET_POSTS",
  data,
});

export const filterPosts = (id) => ({
  type: "FILTER_POSTS",
  id,
});

export const addPost = (title, body) => ({
  type: "ADD_POSTS",
  payload: {
    title,
    body,
  },
});

export const receiveComment = (data, id) => ({
  type: "SET_COMMENT",
  payload: {
    data,
    id,
  },
});

export const fetchPosts = () => {
  return (dispatch) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts/?_limit=50`)
      .then((response) => response.json())
      .then((json) => dispatch(receivePosts(json)));
  };
};

export const fetchComments = (id) => {
  return (dispatch) => {
    return fetch(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveComment(json, id)));
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) dispatch(filterPosts(id));
    });
  };
};

export const postNew = (title, body) => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      dispatch(addPost(title, body));
    });
  };
};
