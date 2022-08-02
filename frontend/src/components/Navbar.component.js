import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePodcastsContext } from "../hooks/usePodcastsContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Toolbar } from "@mui/material";
import Container from "@mui/material/Container";

import TextField from "@mui/material/TextField";

const Navbar = () => {
  const { dispatch } = usePodcastsContext();
  const [addText, setAddText] = useState("");

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch("/api/podcasts/", {
        method: "POST",
        body: JSON.stringify({ url: e.target.value }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (response.ok) {
        setAddText("");
        dispatch({ type: "ADD_PODCAST", payload: json });
      }
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
                defaultValue={"Add Feed URL"}
                variant="outlined"
                onKeyPress={handleEnter}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
