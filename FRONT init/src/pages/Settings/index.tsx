import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
      <h1>Settings</h1>

      <div className="box">
        <h4> Change Privacy</h4>
        <Link to={"/profile/ChangePrivacy"} className="changeBtn">
          Change Privacy
        </Link>
      </div>

      <div className="box">
        <h4>Change Login</h4>

        <Link to={"/profile/ChangeLogin"} className="changeBtn">
          Change Login
        </Link>
      </div>

      <div className="box">
        <h4>Change Password</h4>

        <Link to={"/profile/ChangePassword"} className="changeBtn">
          Change Password
        </Link>
      </div>
    </>
  );
};

export default Settings;
