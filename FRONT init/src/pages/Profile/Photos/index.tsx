import { useEffect, useRef, useState } from "react";
import { getAllPosts, handlePostUpload } from "../../../helpers/api";
import { IPost } from "../../../helpers/type";
import { Gallery } from "../../../components/Gallery";
import "../../../index.css";

const Photos = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const photo = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState<string>("");
  const handlePost = () => {
    const file = photo.current?.files?.[0];
    if (file) {
      const form = new FormData();
      form.append("photo", file);
      form.append("content", text);
      handlePostUpload(form).then((res) =>
        setPosts([...posts, res.payload as IPost])
      );
    }
  };

  useEffect(() => {
    getAllPosts().then((response) => {
      console.log(response);
      setPosts(response.payload as IPost[]);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="header">Posts</h1>
      <div className="inputGroup">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={"form-control"}
          placeholder="What's on your mind"
        />
        <input type="file" ref={photo} />
      </div>
      <button onClick={handlePost} className={"btn btn-outline-dark my-3"}>
        Upload
      </button>
      <div className="gallery">
        <Gallery posts={posts} />
      </div>
    </div>
  );
};

export default Photos;
