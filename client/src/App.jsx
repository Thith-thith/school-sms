import { Router, useRoutes } from "@solidjs/router";
import "flowbite";
import { routes } from "./utils/routes";
import { AuthProvier } from "./context/auth";
import { BackTop } from "./components/BackTop";

function App() {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <AuthProvier>
        <Routes />
        <BackTop />
      </AuthProvier>
    </Router>
  );
}

export default App;
