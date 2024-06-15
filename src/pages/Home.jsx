import { useEffect, useState } from "react";
import PostList from "../component/Posts";
import { getOtherPosts } from "../api";
import { useDispatch } from "react-redux";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();

  const loadMyPosts = async () => {
    dispatch({ type: "open_loading" });
    const data = await getOtherPosts();
    setPosts(data);
    dispatch({ type: "stop_loading" });
  };

  useEffect(() => {
    loadMyPosts();
  }, []);

  return (
    <div style={{ margin: 24 }}>
      <PostList postData={posts} />
    </div>
  );
};

export default Home;
