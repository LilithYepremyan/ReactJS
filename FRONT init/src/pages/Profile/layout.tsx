import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { handleLogOut, verifyUser } from "../../helpers/api";
import { IUser } from "../../helpers/type";

const Layout = () => {
  const [account, setAccount] = useState<IUser | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    verifyUser().then((response) => {
      if (!response.user) {
        navigate("/login");
      } else {
        setAccount(response.user);
      }
    });
  }, []);

  const logout = () => {
    handleLogOut().then(() => navigate("/login"));
  };

  return (
    account && (
      <>
        <nav>
          <NavLink to="" end>
            Profile
          </NavLink>
          <NavLink to="settings">Settings</NavLink>
          <NavLink to="followers">Followers</NavLink>
          <NavLink to="following">Followings</NavLink>
          <NavLink to="photos">Photos</NavLink>
          <button onClick={logout}>Logout</button>
        </nav>
        <div className="container">
          <Outlet context={{ account, setAccount }} />
        </div>
      </>
    )
  );
};

export default Layout;
