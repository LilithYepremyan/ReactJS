import { IPost } from "../helpers/types";
import { BASE } from "../helpers/default";
import { handlePostReaction } from "../helpers/api";
import Preview from "./Preview";
import { useState } from "react";

interface Props {
  posts: IPost[];
  onUpdate?: (id: number) => void;
}

export function Gallery({ posts, onUpdate }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<number>(-1);

  const handleReact = (id: number) => {
    handlePostReaction(id).then((response) => {
      console.log(response);
      if (onUpdate) {
        onUpdate(id);
      }
    });
  };

  return (
    <div className="list">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div className="post">
              <img src={BASE + post.picture} />
              <div
                className="cover"
                onClick={() => {
                  setCurrentPost(post.id);
                  setIsOpen(true);
                }}
              ></div>
              <img
                onClick={() => handleReact(post.id)}
                className="like-button"
                src={
                  !post.isLiked
                    ? "https://cdn0.iconfinder.com/data/icons/sweets/128/heart_love_white.png"
                    : "https://cdn0.iconfinder.com/data/icons/sweets/128/heart_love_pink.png"
                }
              />
            </div>

            <p>
              {post.title} <small>({post.likes.length} likes</small>)
            </p>
          </div>
        );
      })}
      {currentPost !== -1 && (
        <Preview
          isOpen={isOpen}
          close={() => setIsOpen(false)}
          post={currentPost}
        />
      )}
    </div>
  );
}
