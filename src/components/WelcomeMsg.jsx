import { useContext, useEffect, useState } from "react";
import { PostList } from "../store/post-list-store";
import Spinner from "./Spinner";

const WelcomeMsg = () => {
  const { fetching } = useContext(PostList);

  return (
    <>
      {/* {fetching && <Spinner />} */}
      {/* {!fetching && (
        <div className="alert alert-warning m-3" role="alert">
          There are no post to show
        </div>
      )} */}
      {
        <div className="alert alert-warning m-3" role="alert">
          There are no post to show
        </div>
      }
    </>
  );
};

export default WelcomeMsg;
