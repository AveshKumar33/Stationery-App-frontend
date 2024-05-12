import { createTheme } from "@mui/material";

// Create a custom theme
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0028AF",
      dark: "#03014C",
    },
    secondary: {
      main: "#f50057",
      100: "#f4f7ff",
      200: "#06141d",
    },
    background: {
      paper: "#ffffff",
      default: "#f4f7ff",
    },
    grey: {
      50: "#747474",
      100: "#DCDBDD",
      200: "#3E3E3E",
      300: "#696969",
      400: "#00000066",
      500: "#44444F",
      600: "#000000",
      700: "#3C3A36",
      800: "#808080",
      900: "#999",
    },
    error: {
      light: "#DE4437",
      main: "#DE4437",
    },
  },

  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.4,
    },
    subtitle1: {
      // font-size: 1rem
      lineHeight: 1.4,
    },
    subtitle2: {
      // font-size: .875rem
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.4,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          boxShadow: "0rem .125rem .25rem 0rem rgba(0, 0, 0, 0.05)",
          zIndex: 1,
          position: "relative",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            ".MuiInputBase-root ": {
              borderRadius: ".5rem",
            },
            ".MuiInputBase-input": {
              height: "3rem",
              boxSizing: "border-box",
            },
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#D0D5DD",
            },
          },
        },
        {
          props: { variant: "filled" },
          style: {
            ".MuiInputBase-root ": {
              borderRadius: ".5rem",
              border: "1px solid #D0D5DD",
              "&:before": {
                borderBottom: "none",
              },
            },
            ".MuiInputBase-input": {
              height: "3rem",
              boxSizing: "border-box",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            ".MuiInputBase-input": {
              height: "2.4375rem",
              "&:hover": {
                "&:before": {
                  borderBottom: "none",
                },
              },
              "&:focus": {
                "&::after": {
                  borderBottom: "none",
                  display: "none",
                },
              },
            },
          },
        },
      ],
    },

    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            "& .MuiInputBase-root ": {
              borderRadius: "19px",
            },
            ".MuiInputBase-input": {
              height: "3rem",
              boxSizing: "border-box",
            },
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#D0D5DD",
            },
          },
        },
      ],
    },

    MuiCheckbox: {},
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "3rem",
        },
      },
    },

    MuiButtonBase: {
      styleOverrides: {},
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "white",
            backgroundColor: "primary.main",
            borderRadius: "6px",
            fontStyle: "normal",
            boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.12)",
            textTransform: "capitalize",
            fontWeight: 700,
          },
        },
        {
          props: { variant: "text" },
          style: { textTransform: "capitalize" },
        },
        {
          props: { size: "large" },
          style: {
            height: "3rem",
          },
        },
        {
          props: { size: "small" },
          style: {
            height: "2rem",
          },
        },
      ],
    },
    MuiMenu: {
      variants: [
        {
          props: { variant: "menu" },
          style: {
            ".MuiPaper-root": {
              border: ".0625rem solid #D9DDE7",
              color: "#000",
              boxShadow: "0rem 2px .25rem 0rem rgba(0, 0, 0, 0.10)",
              borderRadius: ".3125rem",
              padding: ".625rem",
            },
            ".MuiMenu-list": {
              padding: "0",
            },
            ".MuiMenuItem-root": {
              padding: "0",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          },
        },
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: ".3125rem",
            borderColor: "#D9DDE7",
          },
        },
      ],
    },
  },
});

export default theme;
