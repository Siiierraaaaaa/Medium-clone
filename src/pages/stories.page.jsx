import { useState } from "react";

export const Stories = () => {
  const [title, setTitle] = useState("");
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "My First Medium Story"
    }
  ]);

  const addStory = () => {
    if (!title.trim()) return;

    const newStory = {
      id: Date.now(),
      title
    };

    setStories([...stories, newStory]);
    setTitle("");
  };

  const deleteStory = (id) => {
    setStories(
      stories.filter((story) => story.id !== id)
    );
  };

  const editStory = (id) => {
    const newTitle = prompt("Edit your story title:");

    if (!newTitle) return;

    setStories(
      stories.map((story) =>
        story.id === id
          ? { ...story, title: newTitle }
          : story
      )
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "60px auto",
        padding: "20px"
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "30px"
        }}
      >
        Your Stories
      </h1>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "40px"
        }}
      >
        <input
          type="text"
          placeholder="Write a new story title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            flex: 1,
            padding: "14px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            fontSize: "16px"
          }}
        />

        <button
          onClick={addStory}
          style={{
            background: "#000",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Publish Story
        </button>
      </div>

      {stories.map((story) => (
        <div
          key={story.id}
          style={{
            border: "1px solid #eee",
            padding: "24px",
            borderRadius: "12px",
            marginBottom: "20px",
            background: "white"
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              marginBottom: "20px"
            }}
          >
            {story.title}
          </h3>

          <div
            style={{
              display: "flex",
              gap: "12px"
            }}
          >
            <button
              onClick={() => editStory(story.id)}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "1px solid #ddd",
                background: "white",
                cursor: "pointer"
              }}
            >
              Edit
            </button>

            <button
              onClick={() => deleteStory(story.id)}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "none",
                background: "#000",
                color: "white",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};