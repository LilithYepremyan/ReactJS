import { useEffect, useState } from "react";
import { handleFollowing } from "../../../helpers/api";
import { IUser } from "../../../helpers/types";
import { DEF } from "../../../helpers/default";

const Followings = () => {
  const [following, setFollowing] = useState<IUser[]>([]);

  useEffect(() => {
    handleFollowing().then((response) => {
      setFollowing(response.payload as IUser[]);
      console.log(response.payload, "payload");
    });
  }, []);

  return (
    <div>
      <h1>Following</h1>
      {following.map((el) => (
        <div className="following">
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

export default Followings;
