import "flowbite";
import { Router, useRoutes } from "@solidjs/router";
import { routes } from "./utils/routes";
import { AuthProvier } from "./context/auth";
import { BackTop } from "./components/BackTop";

import PublicLayout from "./components/layouts/PublicLayout";
import PrivateLayout from "./components/layouts/PrivateLayout";

function App() {
  const Routes = useRoutes(routes);

  return (
    <>
      <AuthProvier>
        <Router>
          <Routes />
          <BackTop />
        </Router>
      </AuthProvier>
    </>
  );
}

export default App;
