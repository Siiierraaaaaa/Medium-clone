import { useEffect, useReducer } from "react";
import { PostCard } from "../components/post-card/postcard.component";

const initialState = {
  loading: true,
  posts: [],
  error: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        posts: action.payload,
        error: ""
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        posts: [],
        error: "Something went wrong."
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(
          (post) => post.id !== action.payload
        )
      };

    default:
      return state;
  }
}

export const Home = () => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data
          });
        })
        .catch(() => {
          dispatch({
            type: "FETCH_ERROR"
          });
        });
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_POST",
      payload: id
    });
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px"
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          marginBottom: "10px"
        }}
      >
        Home Feed
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "40px"
        }}
      >
        Discover stories, thinking, and expertise
        from writers on any topic.
      </p>

      {state.loading && <p>Loading posts...</p>}

      {state.error && <p>{state.error}</p>}

      {state.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};