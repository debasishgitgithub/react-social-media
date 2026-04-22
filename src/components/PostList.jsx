import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((post) => (
        <Post></Post>
      ))}
    </>
  );
};

export default PostList;
