import { Navbar } from "./Navbar";
import Footer from "./Footer";
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
