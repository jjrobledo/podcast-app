import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.hook";
import Layout from "./components/Layout.component";
import UserFeed from "./pages/UserFeed.page";
import Signup from "./pages/Signup.page";
import Login from "./pages/Login.page";
import { PlayerProvider } from "./context/Player.context";

import Podcast from "./pages/Podcast.page";

function App() {
  // get user from useAuthContext hook
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <PlayerProvider>
            <Routes>
              {/* if user is not logged in send them to the login page */}
              <Route
                path="/"
                element={user ? <UserFeed /> : <Navigate to="/login" />}
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
          </PlayerProvider>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
