import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SocialPlatformCaseStudy from "./pages/SocialPlatformCaseStudy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/social-platform"
          element={<SocialPlatformCaseStudy />}
        />
      </Routes>
    </Router>
  );
}

export default App;
