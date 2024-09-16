import { useEffect, useState } from "react";
import { handleFollowing } from "../../../helpers/api";
import { IUser } from "../../../helpers/types";
import { BASE, DEF } from "../../../helpers/default";
import { Link } from "react-router-dom";

const Followings = () => {
  const [followings, setFollowings] = useState<IUser[]>([]);

  useEffect(() => {
    handleFollowing().then((response) => {
      console.log(response.payload, "111");
      setFollowings(response.payload as IUser[]);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center"  ,paddingTop:"20px"}}>Following</h1>
      {followings?.map((el) => (
        <div className="following">
          <img
            style={{ width: "50px", height: "50px" }}
            src={el.picture ? BASE + el.picture : DEF}
            alt={el.name}
          />
          <div>
            <h3>
              {el.name} {el.surname}
            </h3>
            <Link to={`/profile/${el.id}`}>Go to account</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Followings;
