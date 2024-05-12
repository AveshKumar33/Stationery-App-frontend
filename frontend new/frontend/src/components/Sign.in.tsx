import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import linkedIn from "../assets/linkedin.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";

import {
  Box,
  Typography,
  FormControl,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import theme from "./Theme";
import { Link, NavLink } from "react-router-dom";
import FormValidations from "../shared/formValidations";
import FormErrors from "../../types/formErrorsType";
const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<{
    email: string | boolean;
    password: string | boolean;
  }>({ email: false, password: false });
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailValue = emailRef.current?.value || "";
    const passwordValue = passwordRef.current?.value || "";
    const { emailError, passwordError } = FormValidations.validateLoginForm(
      emailValue,
      passwordValue
    );

    setErrorMessage({ email: emailError, password: passwordError });
    if (emailError || passwordError) {
      console.log("invalid email or password......!");
      return;
    }
    console.log("emailValue", emailValue);
    console.log("passwordValue", passwordValue);
    emailRef.current!.value = "";
    passwordRef.current!.value = "";
    navigate("/discover");
  };

  const handleInputChange = (event: any, field: string) => {
    const value = event.target.value;
    let error: any = null;

    if (field === "email") {
      error = FormValidations.validateEmail(value);
    } else if (field === "password") {
      error = FormValidations.validatePassword(value);
    }
    setErrorMessage((prevErrorMessage) => ({
      ...prevErrorMessage,
      [field]: error,
    }));
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-100 h-100 shadow-lg bg-body rounded"
    >
      <Box display="flex" className="h-100">
        <Box width={"50%"} className="rounded-start">
          <img
            className="form-img rounded-start "
            src={
              "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            }
          />
        </Box>
        <Box
          sx={{
            width: "50%",
          }}
          display={"flex"}
          height="100%"
        >
          <Box
            sx={{
              padding: "3.6875rem",
              width: "100%",
              background: theme.palette.background.paper,
              boxShadow: "0rem .25rem 1.5rem rgba(0, 0, 0, 0.05)",
            }}
            borderRadius=".5rem"
          >
            <Typography variant="h6" align="center" mb={1}>
              Sign In to your Account
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: theme.palette.grey[50] }}
            >
              Let's get started! Sign in to access your account.
            </Typography>
            <FormControl sx={{ width: "100%" }}>
              <Box width="100%">
                <label className="font-weight-500">Email Address*</label>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="email"
                  fullWidth
                  sx={{
                    ".MuiInputBase-input": {
                      height: "3rem",
                      boxSizing: "border-box",
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D0D5DD",
                      borderRadius: ".5rem",
                    },
                  }}
                  inputRef={emailRef} // Assign the ref to the email input field
                  error={!!errorMessage.email} // Set error prop based on the presence of emailError
                  onChange={(event) => handleInputChange(event, "email")}
                />
                {errorMessage && (
                  <small style={{ color: "red" }}>{errorMessage.email}</small>
                )}
              </Box>
              <FormControl sx={{ mt: 2 }} variant="outlined">
                <label className="font-weight-500">Password*</label>
                <OutlinedInput
                  id="outlined-adornment-password"
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
                  inputRef={passwordRef}
                  error={!!errorMessage.password}
                  onChange={(event) => handleInputChange(event, "password")}
                  sx={{
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
                {errorMessage && (
                  <small style={{ color: "red" }}>
                    {errorMessage.password}
                  </small>
                )}
              </FormControl>

              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={"Remember Me"}
                  color={theme.palette.grey[50]}
                  sx={{ color: theme.palette.grey[50] }}
                />{" "}
                <Link to="/change-password">
                  <Typography color="primary" component={"span"}>
                    Forgot password?
                  </Typography>
                </Link>
              </Box>
              <Button
                variant="contained"
                sx={{ width: "100%", mt: ".6875rem" }}
                type="submit"
                size="large"
              >
                Login to Continue
              </Button>
            </FormControl>
            <Box className="sign-up-options">
              <Box className="signup-line">
                <hr className="horizontal-line" />
                <Typography
                  variant="subtitle2"
                  component="span"
                  color="initial"
                  style={{ color: theme.palette.grey[50] }}
                >
                  Or Sign Up with
                </Typography>
              </Box>
              <Box
                className="btn-wrapper"
                display={"flex"}
                justifyContent={"space-between"}
                gap="1rem"
              >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    border: ".0625rem solid #D0D5DD",
                    borderRadius: ".5rem",
                    color: theme.palette.grey[600],
                    fontWeight: "600",
                    padding: "0 2.75rem",
                    textTransform: "capitalize",
                  }}
                  startIcon={<img src={google} alt="google-icon" />}
                >
                  Google
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: ".0625rem solid #D0D5DD",
                    borderRadius: ".5rem",
                    color: theme.palette.grey[600],
                    fontWeight: "600",
                    padding: "0 2.75rem",
                    textTransform: "capitalize",
                  }}
                  startIcon={<img src={facebook} alt="facebook-icon" />}
                >
                  Facebook
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    border: ".0625rem solid #D0D5DD",
                    borderRadius: ".5rem",
                    color: theme.palette.grey[600],
                    fontWeight: "600",
                    padding: "0 2.75rem",
                    textTransform: "capitalize",
                  }}
                  startIcon={<img src={linkedIn} alt="linkedIn-icon" />}
                >
                  LinkedIn
                </Button>
              </Box>
              <Typography
                variant="subtitle2"
                color="initial"
                style={{ marginTop: "1.625rem", color: theme.palette.grey[50] }}
                align="center"
              >
                Already have an Account? &nbsp;{" "}
                <NavLink to={"/sign-up"}>
                  {" "}
                  <Typography
                    component={"span"}
                    fontSize={"inherit"}
                    color="primary"
                  >
                    Sign Up
                  </Typography>
                </NavLink>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default Signin;
