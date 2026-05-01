import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({});

const reducer = (state, action) => {
  let newPostData = state;
  switch (action.type) {
    case "DELETE_POST":
      newPostData = state.filter((post) => post.id !== action.payload.postId);
      break;
    case "ADD_INITIAL_POST":
      newPostData = action.payload;
      break;
    case "ADD_POST":
      newPostData = [action.payload, ...state];
      break;
  }

  return newPostData;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducer, []);
  // const [fetching, setFetching] = useState(false);

  const addPost = (postData) => {
    const data = postData;

    dispatchPostList({
      type: "ADD_POST",
      payload: data,
    });
  };

  // const addInitialPosts = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_INITIAL_POST",
  //     payload: posts,
  //   });
  // };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  // useEffect(() => {
  //   const controller = new AbortController();

  //   // setFetching(true);
  //   fetch("https://dummyjson.com/posts", { signal: controller.signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // addInitialPosts(data.posts);
  //       // setFetching(false);
  //     });

  //   return () => controller.abort(); // Cleanup: cancels call on unmount/re-run
  // }, []);

  const value = {
    postList,
    addPost,
    deletePost,
    // fetching,
  };

  return <PostList.Provider value={value}>{children}</PostList.Provider>;
};

export default PostListProvider;
