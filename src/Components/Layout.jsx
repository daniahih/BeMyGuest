import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const hiddenPaths = ["/loginPage", "/register"];
  const isNavbarHidden = hiddenPaths.includes(location.pathname);

  return (
    <>
      {!isNavbarHidden && <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
