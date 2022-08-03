import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.hook";
import Layout from "./components/Layout.component";
import Home from "./pages/Home.pages";
import Signup from "./pages/Signup.page";
import Login from "./pages/Login.page";

import Podcast from "./pages/Podcast.pages";

function App() {
  // get user from useAuthContext hook
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* if user is not logged in send them to the login page */}
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            {/* if user is not logged in send them to the login page */}
            <Route
              path="/:id"
              element={user ? <Podcast /> : <Navigate to="/login" />}
            />
            {/* if user is logged in send them to the home page */}
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            {/* if user is not logged in send them to the home page */}
            <Route
              path="/Login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
