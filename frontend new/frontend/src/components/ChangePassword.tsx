import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import theme from "./Theme";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: "100%", minHeight: "100vh", padding: "3.125rem 0" }}
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Box
        sx={{
          padding: "3.6875rem",
          maxWidth: "40rem",
          width: "90%",
          background: theme.palette.background.paper,
          boxShadow: "0rem .25rem 1.5rem rgba(0, 0, 0, 0.05)",
        }}
        borderRadius=".5rem"
      >
        <Typography variant="h1" align="center" mb={1}>
          Change your Password
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: theme.palette.grey[50] }}
        >
          Enter a new password below to change your password.
        </Typography>
        <FormControl sx={{ width: "100%", mt: "1.625rem" }}>
          <FormControl sx={{ mt: 4 }} variant="outlined">
            <label className="font-weight-500">Old Password*</label>
            <OutlinedInput
              id="old-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                mt: "1rem",
                ".MuiInputBase-input": {
                  height: "3rem",
                  boxSizing: "border-box",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0D5DD",
                  borderRadius: ".5rem",
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ mt: 4 }} variant="outlined">
            <label className="font-weight-500">New Password*</label>
            <OutlinedInput
              id="new-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                mt: "1rem",
                ".MuiInputBase-input": {
                  height: "3rem",
                  boxSizing: "border-box",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0D5DD",
                  borderRadius: ".5rem",
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ mt: 4 }} variant="outlined">
            <label className="font-weight-500">Confirm New Password*</label>
            <OutlinedInput
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              sx={{
                mt: "1rem",
                ".MuiInputBase-input": {
                  height: "3rem",
                  boxSizing: "border-box",
                },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D0D5DD",
                  borderRadius: ".5rem",
                },
              }}
            />
          </FormControl>

          <Button
            variant="contained"
            size="large"
            sx={{ width: "100%", mt: "26px" }}
            onClick={() => navigate("/sign-in")}
          >
            Change Password
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default ChangePassword;
