import "flowbite";
import { Router, useRoutes } from "@solidjs/router";
import { routes } from "./utils/routes";
import { AuthProvier } from "./context/auth";
import { BackTop } from "./components/BackTop";

import PublicLayout from "./components/layouts/PublicLayout";
import PrivateLayout from "./components/layouts/PrivateLayout";
// import PrivateNavbar from "./components/layouts/PrivateNavbar";
// import LandingPage from "./pages/landing";
// import Home from "./pages/home";

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

      {/* <Router>
        <AuthProvier>
          <Routes>
            <Route path="/" component={PublicLayout}>
              <Route path="/" component={LandingPage} />
            </Route>
            <Route path="/" component={PrivateLayout}>
              <Route path="/home" component={Home} />
            </Route>
          </Routes>
        </AuthProvier>
      </Router> */}
    </>
  );
}

export default App;
