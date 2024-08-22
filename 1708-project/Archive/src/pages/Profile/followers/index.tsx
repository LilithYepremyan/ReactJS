import { useEffect, useState } from "react";
import { handleFollowers } from "../../../helpers/api";
import { IUser } from "../../../helpers/types";
import { DEF } from "../../../helpers/default";

const Followers = () => {
  const [followers, setFollowers] = useState<IUser[]>([]);

  useEffect(() => {
    handleFollowers().then((response) => {
      setFollowers(response.payload as IUser[]);
      console.log(response.payload, "pay");
    });
  }, []);

  return (
    <div>
      <h1>Followers</h1>
      {followers.map((el) => (
        <div className="follower">
          <img
            style={{ width: "50px", height: "50px" }}
            src={el.picture ? el.picture : DEF}
            alt={el.name}
          />
          <h3>
            {el.name} {el.surname}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Followers;
