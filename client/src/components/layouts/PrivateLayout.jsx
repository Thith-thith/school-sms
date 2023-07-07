import { Outlet, useNavigate } from "@solidjs/router";
import PrivateNavbar from "./PrivateNavbar";
import { Show } from "solid-js";
import { useAuth } from "../../context/auth";
import LandingPage from "../../pages/landing";

const PrivateLayout = () => {
  const { value } = useAuth();
  const navigate = useNavigate();

  // if (!value.login) {
  //   navigate("/", { replace: true });
  // }

  return (
    <Show when={!value.login} fallback={<LandingPage />}>
      <PrivateNavbar />
      <Outlet />
    </Show>
  );
};

export default PrivateLayout;
