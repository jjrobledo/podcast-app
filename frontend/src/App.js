import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.component";
import Home from "./pages/Home.pages";
import Signup from "./pages/Signup.page";
import Login from "./pages/Login.page";

import Podcast from "./pages/Podcast.pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Podcast />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
