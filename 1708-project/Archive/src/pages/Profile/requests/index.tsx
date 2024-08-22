import { useEffect, useState } from "react";
import {
  getAccount,
  handleAcceptRequest,
  handleDeclineRequest,
  handleRequests,
} from "../../../helpers/api";
import { IUser } from "../../../helpers/types";
import { Link } from "react-router-dom";

interface IRequestUser {
  id: number;
  user: IUser;
}

const Requests = () => {
  const [requests, setRequests] = useState<IRequestUser[]>([]);

  useEffect(() => {
    handleRequests().then((response) => {
      console.log(response.payload, "response");

      setRequests(response.payload as IRequestUser[]);
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
  console.log(requests, "reqqq");
  return (
    <div>
      <h1>Requests</h1>
      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        requests.map((el) => (
          <div className="requestsWrapper" key={el.id}>
            <div className="header">
              <div className="avatar">
                <img src={el.user.cover} alt={el.user.name} />
              </div>
              <div className="userInfo">
                <h2>
                  {el.user.name} {el.user.surname}
                </h2>
                <Link to={"/profile/" + el.id} className="viewProfile">
                  See account
                </Link>
              </div>
            </div>
            <div className="actions">
              <button
                className="btn btn-success"
                onClick={() => handleAccept(el.id)}
              >
                Accept
              </button>
              <button
                className="btn btn-danger"
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
