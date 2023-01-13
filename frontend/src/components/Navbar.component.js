import * as React from "react";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout.hook";
import { Link } from "react-router-dom";
import { usePodcastsContext } from "../hooks/usePodcastsContext";
import { useAuthContext } from "../hooks/useAuthContext.hook";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Toolbar, Button } from "@mui/material";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";

import TextField from "@mui/material/TextField";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { dispatch } = usePodcastsContext();
  const [addText, setAddText] = useState("");
  const baseURL = "https://podcast-app-fronend.onrender.com";

  const handleClick = () => {
    logout();
  };

  const handleUpdateFeed = async (e) => {
    e.preventDefault();
    // check if user and return if false
    if (!user) {
      throw new Error("Client not logged in");
      return;
    }

    const response = await fetch(baseURL + "/api/podcasts/", {
      mode: "no-cors",
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      // dispatch the new podcast to the context provider and rerender
      dispatch({ type: "UPDATE_PODCASTS", payload: json });
    }
  };

  const handleAddPodcastEnter = async (e) => {
    // check if user and return if false
    if (!user) {
      throw new Error("Client not logged in");
      return;
    }
    if (e.key === "Enter") {
      const response = await fetch(baseURL + "/api/podcasts/", {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify({ url: addText }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        setAddText("");
        // dispatch the new podcast to the context provider and rerender
        dispatch({ type: "ADD_PODCAST", payload: json });
      }
    }
  };

  const resetInput = (e) => {
    e.target.value = "";
  };

  const location = useLocation();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "sans",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PodcastApp
            </Typography>
          </Link>

          {user && location.pathname === "/" && (
            <button onClick={handleUpdateFeed}>Update feed</button>
          )}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PodcastApp
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              display="flex"
              flexDirection={"row"}
              sx={{ flexGrow: 0 }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {user && (
                <>
                  <Typography>{user.email}</Typography>
                  <Button
                    onClick={handleClick}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    <Typography marginRight={3}>Logout</Typography>
                  </Button>
                  <TextField
                    sx={{
                      "& .MuiInputBase-root": {
                        height: "2.5rem",
                        color: "#fff",
                        border: "1px solid #fff",
                        padding: "2px",
                      },
                    }}
                    id="outlined"
                    margin="dense"
                    onFocus={(e) => resetInput(e)}
                    placeholder="Add Feed Url"
                    value={addText}
                    onChange={(e) => setAddText(e.target.value)}
                    variant="outlined"
                    onKeyPress={handleAddPodcastEnter}
                  />
                </>
              )}
              {!user && (
                <>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    <Typography marginRight={3}>Login</Typography>
                  </Link>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <Typography marginRight={3}>Signup</Typography>
                  </Link>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
