import { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={4}
          borderRadiut={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            Signup
          </Typography>
          <TextField
            type={"email"}
            variant="standard"
            placeholder="Email"
            margin="normal"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            type={"password"}
            variant="standard"
            placeholder="Password"
            margin="normal"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button
            variant="contained"
            sx={{ marginTop: 4 }}
            onClick={handleSubmit}
          >
            Signup
          </Button>
          <Link href="/login" underline="hover">
            <Button sx={{ marginTop: 4 }}>Login</Button>
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
