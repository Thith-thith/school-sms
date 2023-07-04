import { Navbar } from "./navbar";
import Footer from "./footer";
import { Outlet } from "@solidjs/router";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
