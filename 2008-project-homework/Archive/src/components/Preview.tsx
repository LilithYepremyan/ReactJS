import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { handleAddComment, handlePostById } from "../helpers/api";
import { IPost, IComment } from "../helpers/types";
import { BASE, DEF } from "../helpers/default";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IProps {
  isOpen: boolean;
  close: () => void;
  postId: number;
}

export function Preview({ isOpen, close, postId }: IProps) {
  const [postInfo, setPostInfo] = useState<IPost | null>(null);
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    handlePostById(postId).then((response) => {
      setPostInfo(response.payload as IPost);
    });
  }, [postId]);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (comment) {
        await handleAddComment(postId, comment);
        setComment("");
        const updatedPost = await handlePostById(postId);
        setPostInfo(updatedPost.payload as IPost);
      }
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h3>{postInfo?.title}</h3>
        <div className="postInfo">
          <div style={{ width: "100%" }}>
            <img src={BASE + postInfo?.picture} alt="img" />
          </div>
          <div>
            <h4>
              {postInfo?.likes.length} likes, {postInfo?.comments.length}{" "}
              comments
            </h4>
            <strong>Likes:</strong>
            <div className="likesWrapper">
              {postInfo?.likes &&
                postInfo?.likes.map((el) => (
                  <div
                    key={el.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "5px 0",
                      gap: "10px",
                    }}
                  >
                    <div className="img-avatar">
                      <img
                        src={el.picture ? BASE + el.picture : DEF}
                        alt="img"
                      />
                    </div>
                    <Link to={"/profile/" + el.id}>
                      {el.name} {el.surname}
                    </Link>
                  </div>
                ))}
            </div>
            <div className="likesWrapper">
              <strong>Comments:</strong>
              <div>
                {postInfo?.comments &&
                  postInfo?.comments.map((el) => (
                    <div
                      key={el.id}
                      style={{
                        border: "1px solid gray",
                        borderRadius: "5px",
                        margin: "10px 0",
                      }}
                    >
                      <h6>{el.user.name} says:</h6>
                      <small>{el.content}</small>
                    </div>
                  ))}
              </div>
            </div>
            <textarea
              style={{ height: "50px" }}
              onKeyDown={handleKeyDown}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What do you think?"
            ></textarea>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
