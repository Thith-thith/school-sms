import { Router, Routes, Route } from "@solidjs/router";
import { LandingPage } from "./pages/landing";
import { About } from "./pages/about";
import { Navbar } from "./components/layouts/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" component={LandingPage} />
          <Route path="/about" component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
