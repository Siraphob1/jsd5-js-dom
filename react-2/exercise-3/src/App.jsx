import usePost from "./hook/usePost";
import "./App.css";

function App() {

  const { get, remove } = usePost();

  const Remove =(id) =>{
    remove(id)
  }

  return (
    <div id="app">
      <h1>Enter Data</h1>
    
      <PostContainer />
      <FeedSection data={get()} Remove={Remove}/>
    </div>
  );
}

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-avatar" src="avatar.jpg" alt="Your Avatar" />
        <div className="post-author">You</div>
      </div>
      <div className="post-content">
        <textarea
          className="post-input"
          placeholder="What's on your mind?"
        ></textarea>
      </div>
      <div className="post-actions">
        <button className="post-button">Post</button>
      </div>
    </div>
  );
};

const FeedSection = (props) => {
  const posts = props.data
  const Remove = props.Remove

  return (
    <div className="feed">    
    {posts.map((element) => {
      return(
        <Post key={element.author} data={element} Remove={Remove} />
      )
    })}
  </div>
  );
};

const Post = (props) => {
  const post  = props.data
  
  return (
    <div className="post">
    <div className="post-header">
      <img
        className="post-avatar"
        src={post.avatar}
        alt="User 1"
      />
      <div>
        <div className="post-author">{post.author}</div>
        <div className="post-time">{post.time}</div>
      </div>
    </div>
    <div className="post-content">{post.content}</div>
    <img
      className="post-image"
      src={post.image}
      alt="Post 1"
    />
    <button onClick={()=> props.Remove(post.id)}>Delete</button>
  </div>
  );
};

export default App;
