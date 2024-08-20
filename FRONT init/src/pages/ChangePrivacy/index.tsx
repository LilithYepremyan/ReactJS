import { useEffect, useState } from "react";
import { handleUserPrivacy } from "../../helpers/api";

const ChangePrivacy = () => {
  const [privacy, setPrivacy] = useState<string>("");

  const handlePrivacyChange = () => {
    if (privacy) {
      const newPrivacy = privacy === "private" ? "public" : "private";
      handleUserPrivacy().then(() => {
        setPrivacy(newPrivacy);
      });
    }
  };

  useEffect(() => {
    handleUserPrivacy().then((res) => setPrivacy(res.status));
  }, []);

  return (
    <>
      <h1>Settings</h1>
      <div className="box">
        <h4>Account privacy</h4>

        <div>
          <p style={{ color: "blueviolet" }}>
            Status: {privacy == "private" ? "Private" : "Public"}
          </p>
          {privacy == "private" ? (
            <img
              onClick={handlePrivacyChange}
              style={{
                width: "30px",
                paddingBottom: "10px",
                cursor: "pointer",
              }}
              alt="private"
              src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/lock-alt-512.png"
            ></img>
          ) : (
            <img
              onClick={handlePrivacyChange}
              style={{
                width: "30px",
                paddingBottom: "10px",
                cursor: "pointer",
              }}
              alt="public"
              src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/unlock-alt-512.png"
            ></img>
          )}
        </div>

        <button className="changeBtn" onClick={() => handlePrivacyChange()}>
          Change Status
        </button>
      </div>
    </>
  );
};

export default ChangePrivacy;
