import PropTypes from "prop-types";

const Post = ({
  userName,
  image,
  caption,
  likes,
  deleteAPost = () => undefined,
  id,
  profilePic,
}) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="card mb-4">
      <img
        src={image}
        style={{ height: 300, objectFit: "contain" }}
        className="card-img-top"
        alt={caption}
      />
      <div className="card-body">
        <div className="row">
          <img
            className="col-4"
            style={{ objectFit: "contain" }}
            src={profilePic}
            alt={userName}
          />
          <h5 className="col-8 card-title">{userName}</h5>
        </div>
        <p
          className="card-text"
          style={{
            maxWidth: "100%",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {caption}
        </p>
        <p className="card-text">
          <small className="text-muted">{likes} likes</small>
        </p>
        {localUser.email === userName && (
          <i
            role="button"
            className="fa-solid fa-trash-can fa-2x"
            onClick={() => deleteAPost(id)}
          ></i>
        )}
        {localUser.email !== userName && (
          <i className="fa-regular fa-heart"></i>
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  deleteAPost: PropTypes.func,
  id: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
};

// eslint-disable-next-line react/prop-types
const PostList = ({ postData = [], deleteAPost = () => undefined }) => {
  return (
    <div className="container">
      <div className="row">
        {postData.map((post, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <Post
              userName={post.userName}
              image={post.image}
              caption={post.caption}
              likes={post.likes}
              id={post.id}
              deleteAPost={deleteAPost}
              profilePic={post.profilePic}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
