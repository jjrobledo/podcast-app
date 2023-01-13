import * as React from "react";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext.hook";

import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

const UpdatePodcastInput = () => {
  console.log(window.location.pathname.substring(1));
  const { user } = useAuthContext();
  const baseURL = "https://podcast-app.onrender.com";

  const [addText, setAddText] = useState("");

  const handleAddPodcastEnter = async (e) => {
    // check if user and return if false
    if (!user) {
      throw new Error("Client not logged in");
      return;
    }
    if (e.key === "Enter") {
      const response = await fetch(
        baseURL + "/api/podcasts/" + window.location.pathname,
        {
          mode: "no-cors",
          method: "PATCH",
          body: JSON.stringify({
            _id: window.location.pathname.substring(1),
            title: e.target.value,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        setAddText("");
      }
    }
  };
  return (
    <Card sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <TextField
        sx={{
          "& .MuiInputBase-root": {
            height: "2.5rem",
            color: "#000",
            border: "1px solid #000",
            margin: "3px",
            padding: "2px",
          },
        }}
        id="outlined"
        margin="dense"
        defaultValue="Update feed title"
        variant="outlined"
        onKeyPress={handleAddPodcastEnter}
      />
    </Card>
  );
};

export default UpdatePodcastInput;
