import * as React from "react";
import { useState } from "react";
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
            <TextField
              id="filled-helperText"
              label="Add feed URL"
              variant="standard"
              onKeyPress={handleEnter}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
