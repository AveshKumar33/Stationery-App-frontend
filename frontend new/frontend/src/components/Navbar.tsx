import { Avatar, Box } from "@mui/material";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LogoutIcon from "@mui/icons-material/Logout";
import linkedIn from "../assets/linkedin.svg";

interface NavbarProps {
  setToggleSidebar: Function; // Adjust the type according to what setToggleSidebar does
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const Navbar: React.FC<NavbarProps> = ({ setToggleSidebar }) => {
  return (
    <Box className="d-flex justify-content-between align-items-center w-100 h-100 px-3">
      <Box
        className="cursor-pointer"
        component="div"
        onClick={() => setToggleSidebar((prev: boolean) => !prev)}
      >
        <LunchDiningIcon />
      </Box>
      <Box className="d-flex align-items-center justify-content-center gap-2">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
      <Box className="d-flex align-items-center justify-content-center gap-2">
        <Avatar alt="Remy Sharp" src={linkedIn} />
        <LoginIcon />
        <LogoutIcon />
      </Box>
    </Box>
  );
};

export default Navbar;
