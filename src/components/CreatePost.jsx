import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate, Form, redirect } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const titleElement = useRef(null);
  const bodyElement = useRef(null);
  const reactionsElement = useRef(null);
  const userIdElement = useRef(null);
  const tagsElement = useRef(null);

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();
  //   const title = titleElement.current.value;
  //   const body = bodyElement.current.value;
  //   const reactions = reactionsElement.current.value;
  //   const userId = userIdElement.current.value;
  //   const tags = tagsElement.current.value.split(",");
  //   const post = {
  //     title,
  //     body,
  //     reactions: { likes: reactions, dislikes: 0 },
  //     userId,
  //     tags,
  //   };

  //   fetch("https://dummyjson.com/posts/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(post),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addPost(post);
  //       navigate("/");

  //       titleElement.current.value = "";
  //       bodyElement.current.value = "";
  //       reactionsElement.current.value = "";
  //       userIdElement.current.value = "";
  //       tagsElement.current.value = "";
  //     });
  // };

  return (
    <Form className="create-post" method="post">
      <div className="form-group mb-3">
        <label htmlFor="title" className="mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="Enter Title"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="body" className="mb-2">
          Body
        </label>
        <input
          type="text"
          name="body"
          className="form-control"
          id="body"
          placeholder="Enter body"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="reactions" className="mb-2">
          Reactions
        </label>
        <input
          type="reactions"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="Enter reactions"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="userId" className="mb-2">
          UserId
        </label>
        <input
          type="userId"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter userId"
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="tags" className="mb-2">
          Tags
        </label>
        <input
          type="tags"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Enter tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export const formSubmitHandler = async ({ request }) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  updates.tags = updates.tags.split(",");
  const { addPost } = useContext(PostList);

  console.log(updates);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  })
    .then((res) => res.json())
    .then((data) => {
      addPost(updates);
      return redirect("/");
    });
};

export default CreatePost;
