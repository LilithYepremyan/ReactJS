import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { IPost } from "../helpers/type";
import { BASE } from "../helpers/default";
import { deletePost } from "../helpers/api";
import { useEffect, useState } from "react";

interface Props {
  posts: IPost[];
}

export function Gallery({ posts }: Props) {
  const [allPosts, setAllPosts] = useState<IPost[]>(posts);

  useEffect(() => {
    setAllPosts(posts);
  }, [posts]);

  const handleDeletePost = async (id: number) => {
    const response = await deletePost(id);
    setAllPosts((prevState) =>prevState.filter((post) => post.id !== id));
    return response;
  };

  return (
    <MDBRow>
      {allPosts.map((post) => (
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0" key={post.id}>
          <div className="card">
            <p className="card-title">{post.title}</p>
            <div className="card-likes">
              <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-512.png"
                alt="Likes"
              />
              <span>{post.likes.length}</span>
            </div>
            <img src={BASE + post.picture} alt="Post" />
            <button
              onClick={() => handleDeletePost(post.id)}
              className="btn btn-outline-dark card-button"
            >
              Delete
            </button>
          </div>
        </MDBCol>
      ))}
    </MDBRow>
  );
}
