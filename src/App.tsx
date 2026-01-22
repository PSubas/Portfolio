import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SocialPlatformCaseStudy from "./pages/SocialPlatformCaseStudy";
// import AIChatCaseStudy from "./pages/AIChatCaseStudy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/social-platform"
          element={<SocialPlatformCaseStudy />}
        />
        {/* <Route
          path="/projects/ai-chat"
          element={<AIChatCaseStudy />}
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
