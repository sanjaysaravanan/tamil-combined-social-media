import PropTypes from "prop-types";

const Post = ({ userName, image, caption, likes }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={caption} />
      <div className="card-body">
        <h5 className="card-title">{userName}</h5>
        <p className="card-text">{caption}</p>
        <p className="card-text">
          <small className="text-muted">{likes} likes</small>
        </p>
      </div>
    </div>
  );
};

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

const postData = [
  {
    userName: "travel_blogger",
    image:
      "https://tiesinstitute.com/wp-content/uploads/2021/01/shutterstock_268004744-2.jpg",
    caption:
      "Exploring the beautiful landscapes of New Zealand! #travel #adventure",
    likes: 1500,
  },
  {
    userName: "foodie_chef",
    image:
      "https://img.freepik.com/free-photo/side-view-cook-making-delicious-pasta_23-2150690631.jpg",
    caption: "Homemade pasta with a creamy garlic sauce 🍝 #foodie #cooking",
    likes: 2300,
  },
  {
    userName: "fitness_guru",
    image:
      "https://img.freepik.com/free-photo/achievement-muscle-gym-man-active_1139-707.jpg",
    caption: "Morning workout to kickstart the day! #fitness #healthyliving",
    likes: 3200,
  },
];

const PostList = () => {
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
