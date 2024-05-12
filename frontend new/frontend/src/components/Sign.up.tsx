import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import linkedIn from "../assets/linkedin.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  OutlinedInput,
} from "@mui/material";
import theme from "./Theme";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink, useNavigate } from "react-router-dom";
import FormValidations from "../shared/formValidations";
import FormErrors from "../../types/formErrorsType";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  /** fill the form data**/
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /**  Check for empty fields and update formErrors accordingly **/
    const validationErrors = {
      firstName: FormValidations.validateField("firstName", formData.firstName),
      lastName: FormValidations.validateField("lastName", formData.lastName),
      email: FormValidations.validateField("email", formData.email),
      password: FormValidations.validateField("password", formData.password),
    };

    // Update the errors state
    setErrors(validationErrors);

    if (
      validationErrors.firstName === true &&
      validationErrors.lastName === true &&
      validationErrors.email === true &&
      validationErrors.password === true
    ) {
      console.log("form data  ---", formData);
      navigate("/confirm-mail");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Update the error message for the input field
    setErrors((prevErrors: any) => ({
      ...prevErrors,
      [name]: FormValidations.validateField(name, value) as string,
    }));
  };

  useEffect(() => {}, [formData, errors]);

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
          padding: "59px",
          maxWidth: "640px",
          width: "90%",
          background: theme.palette.background.paper,
          boxShadow: "0rem .25rem 1.5rem rgba(0, 0, 0, 0.05)",
        }}
        borderRadius="8px"
      >
        <Typography variant="h1" align="center" mb={1}>
          Create Account
        </Typography>
        <Typography variant="subtitle1" align="center">
          We value your trust and are committed to ensuring a smooth and secure
          account creation process
        </Typography>
        <form onSubmit={handleSignUp} style={{ margin: "auto" }}>
          <FormControl sx={{ width: "100%", mt: "26px" }}>
            <Box width="100%" marginTop="16px">
              <label className="font-weight-500">First Name*</label>
              <TextField
                id="outlined-basic"
                className="input-field"
                variant="outlined"
                sx={{ mt: "16px", borderRadius: "1rem" }}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={
                  typeof errors.firstName == typeof "string" ? true : false
                }
              />
              {errors.firstName && (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              )}
            </Box>
            <Box width="100%" marginTop="16px">
              <label className="font-weight-500">Last Name*</label>
              <TextField
                id="outlined-basic2"
                variant="outlined"
                sx={{ mt: "16px" }}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={typeof errors.lastName == typeof "string" ? true : false}
              />
              {errors.lastName && (
                <span style={{ color: "red" }}>{errors.lastName}</span>
              )}
            </Box>

            <Box width="100%" marginTop="16px">
              <label className="font-weight-500">Email Address*</label>
              <TextField
                id="outlined-basic3"
                variant="outlined"
                sx={{ mt: "16px" }}
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={typeof errors.email == typeof "string" ? true : false}
                type="email"
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </Box>

            <FormControl sx={{ mt: 4 }} variant="outlined">
              <label className="font-weight-500">Password*</label>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={typeof errors.password == typeof "string" ? true : false}
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
                  mt: "16px",
                  ".MuiInputBase-input": {
                    height: "48px",
                    boxSizing: "border-box",
                  },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#D0D5DD",
                    borderRadius: "8px",
                  },
                }}
              />
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </FormControl>

            <FormControlLabel
              sx={{ mt: 2 }}
              control={<Checkbox defaultChecked />}
              label={
                <p>
                  I Agree to all &nbsp;
                  <Typography component={"a"} color="primary">
                    terms and conditions
                  </Typography>
                </p>
              }
            />

            <Button
              variant="contained"
              type="submit"
              sx={{ width: "100%", mt: "11px" }}
              size="large"
            >
              Get Started
            </Button>
          </FormControl>
        </form>
        <Box className="sign-up-options">
          <Box className="signup-line" style={{ margin: "2.25rem 0" }}>
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
              sx={{
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
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
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
                color: theme.palette.grey[600],
                fontWeight: "600",
                padding: "0 2.75rem",
                textTransform: "capitalize",
              }}
              size="large"
              startIcon={<img src={facebook} alt="facebook-icon" />}
            >
              Facebook
            </Button>
            <Button
              variant="outlined"
              sx={{
                border: "1px solid #D0D5DD",
                borderRadius: "8px",
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
            Already have an Account?{" "}
            <NavLink to={"/sign-in"}>
              <Typography
                component={"span"}
                fontSize={"inherit"}
                color="primary"
              >
                Sign In
              </Typography>
            </NavLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
