import { useEffect, useState } from "react";
import {
  handleAcceptRequest,
  handleDeclineRequest,
  handleRequests,
} from "../../../helpers/api";
import { IUser } from "../../../helpers/types";

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

  return (
    <div>
      <h1>Requests</h1>
      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        requests.map((el) => (
          <div key={el.id}>
            <h2>
              {el.name} {el.surname}
            </h2>
            <img src={el.picture} alt={el.name}></img>
            <div>
              {/* <button onClick={() => handleAccept(el.id)}>Accept</button> */}
              {/* <button onClick={() => handleDecline(el.id)}>Decline</button> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Requests;
