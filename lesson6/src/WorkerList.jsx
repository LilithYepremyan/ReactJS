import React, { useEffect } from "react";

export const WorkerList = ({ list, total }) => {
  useEffect(() => {
    console.log("mounting");
    return () => console.log("unmounting");
  }, []);

  return (
    <>
      <h3>WorkList {total} AMD</h3>
      {list.map((elm) => (
        <div key={elm.id}>
          <p>{elm.name}</p>
          <strong>
            {elm.salary}
            {elm.position}
          </strong>
        </div>
      ))}
    </>
  );
};
