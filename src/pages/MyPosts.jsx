import { useState } from "react";
import PostList from "../component/Posts";

const PostForm = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ image, caption });
    setImage("");
    setCaption("");
  };

  return (
    <>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="url"
            className="form-control"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="caption" className="form-label">
            Caption
          </label>
          <textarea
            className="form-control"
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
      </form>
      <div style={{ margin: 16 }}>
        <PostList />
      </div>
    </>
  );
};

export default PostForm;
