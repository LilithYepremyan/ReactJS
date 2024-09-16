import { useEffect, useState } from "react";
import {
  handleAcceptRequest,
  handleDeclineRequest,
  handleRequests,
} from "../../../helpers/api";
import { IUser } from "../../../helpers/types";
import "../../../index.css";

import { DEF, BASE } from "../../../helpers/default";

const Requests = () => {
  const [requests, setRequests] = useState<IUser[]>([]);

  useEffect(() => {
    handleRequests().then((response) => {
      setRequests(response.payload as IUser[]);
    });
  }, []);

  const handleAccept = async (id: number) => {
    await handleAcceptRequest(id);
    setRequests(requests.filter((el) => el.id !== id));
  };

  const handleDecline = async (id: number) => {
    await handleDeclineRequest(id);
    setRequests(requests.filter((el) => el.id !== id));
  };

  console.log(requests, "requests");

  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <h1>Requests</h1>
      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        requests.map((el) => (
          <div className="requestContainer" key={el.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "15px",
                margin: 0,
              }}
            >
              <img
                style={{ width: "50px", height: "50px" }}
                src={el.user.picture ? BASE + el.user?.picture : DEF}
                alt={el.user.name}
              ></img>
              <h4>
                {el.user.name} {el.user.surname}
              </h4>
              </div>

              <div>
                <button
                  style={{ margin: "0 10px" }}
                  className="btn btn-primary btn-md"
                  onClick={() => handleAccept(el.id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-secondary btn-md"
                  onClick={() => handleDecline(el.id)}
                >
                  Decline
                </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Requests;
