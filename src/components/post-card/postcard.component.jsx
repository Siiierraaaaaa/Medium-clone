import "./postcard.css";

export const PostCard = ({ post, onDelete }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className="post-actions">
        <button>Edit</button>
        <button onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
};