import { useState } from "react";
import { useLogin } from "../hooks/useLogin.hook";

import { Box, Typography, TextField, Button, Link } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleLoginEnter = async (e) => {
    if (e.key === "Enter") {
      await login(email, password);
    }
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
            Login
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
            onKeyPress={handleLoginEnter}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Button
            variant="contained"
            sx={{ marginTop: 4 }}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Login
          </Button>
          <Link href="/signup" underline="hover">
            <Button sx={{ marginTop: 4 }}>Signup</Button>
          </Link>
          {error && <Typography style={{ color: "red" }}>{error}</Typography>}
        </Box>
      </form>
    </div>
  );
};

export default Login;
