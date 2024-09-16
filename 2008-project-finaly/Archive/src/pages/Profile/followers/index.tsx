import { useEffect, useState } from "react";
import { handleFollowers } from "../../../helpers/api";
import { IUser } from "../../../helpers/types";
import { BASE, DEF } from "../../../helpers/default";
import { Link } from "react-router-dom";

const Followers = () => {
  const [followers, setFollowers] = useState<IUser[]>();
  useEffect(() => {
    handleFollowers().then((response) => {
      console.log(response.payload, "res payload");
      setFollowers(response.payload as IUser[]);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Followers</h1>
      {followers?.map((el) => (
        <div className="follower">
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

export default Followers;
