import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/loginPage" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
