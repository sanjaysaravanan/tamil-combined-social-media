import { useEffect, useState } from "react";
import PostList from "../component/Posts";
import { createPost, getAllPosts, deletePost } from "../api";
import { useDispatch } from "react-redux";

const PostForm = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createPost({ image, caption });
      setPosts([...posts, data.newPost]);
      setImage("");
      setCaption("");
      dispatch({
        type: "show_msg",
        alert: { msg: "Add Post Success!!!", type: "success" },
      });
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  const deleteAPost = async (id) => {
    await deletePost(id);
    dispatch({
      type: "show_msg",
      alert: { msg: "Post Delete Success!!!", type: "success" },
    });
    setPosts(posts.filter((post) => post.id !== id));
  };

  const loadMyPosts = async () => {
    const data = await getAllPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadMyPosts();
  }, []);

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
        <PostList postData={posts} deleteAPost={deleteAPost} />
      </div>
    </>
  );
};

export default PostForm;
