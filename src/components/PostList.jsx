import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListContext);
  const postList = useLoaderData(); // postLoader is defined in main.jsx and is used to fetch the posts data before rendering the PostList component. The fetched data is then passed to the component via the useLoaderData hook.
  return (
    <>
      {postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {postList.map((post) => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
      // addInitialPosts(data.posts);
      // setFetching(false);
    });
};

export default PostList;
