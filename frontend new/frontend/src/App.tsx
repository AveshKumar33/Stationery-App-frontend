import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Home from "./pages/client/home/Home";
import Author from "./pages/client/author/Author";
import AboutUs from "./pages/client/about_us/AboutUs";
import ContactUs from "./pages/client/contact_us/ContactUs";
import OrderFrom from "./pages/client/order_from/OrderFrom";
import Catalogue from "./pages/client/catalogue/Catalogue";
import BecomeAnAuthor from "./pages/client/become_an_author/BecomeAnAuthor";
import Cart from "./pages/client/cart/Cart";
import OrderList from "./pages/client/Order/OrderList";
import OrderDetails from "./pages/client/Order/OrderDetails";
import BookDetails from "./pages/client/book/BookDetails";
import Checkout from "./pages/client/checkout/Checkout";
import Shop from "./pages/client/shop/Shop";
import SideDrawer from "./components/SideDrawer";
import SignIn from "./components/Sign.in";
import SignUp from "./components/Sign.up";
import AddBook from "./pages/admin/book/AddBook";
import BookList from "./pages/admin/book/BookList";
import EditBook from "./pages/admin/book/EditBook";
import ChangePassword from "./components/ChangePassword";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  console.log("toggleSidebar", toggleSidebar);

  return (
    <>
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} className="custom-navbar">
              <Navbar setToggleSidebar={setToggleSidebar} />
            </Grid>
            {toggleSidebar && (
              <Grid item xs={2} className="sidebar">
                <SideDrawer />
              </Grid>
            )}

            <Grid
              item
              xs={toggleSidebar ? 10 : 12}
              className="main-screen p-0"
              style={{ background: "#F5F5F5" }}
            >
              <Routes>
                {/**client routes  */}
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/author" element={<Author />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/orderfrom" element={<OrderFrom />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/become-an-author" element={<BecomeAnAuthor />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/order-list" element={<OrderList />} />
                <Route path="/order/:id" element={<OrderDetails />} />
                <Route path="/book/:id" element={<BookDetails />} />
                <Route path="/checkout" element={<Checkout />} />
                {/**common routes  */}

                {/**admin routes  */}
                <Route path="/admin/add-book" element={<AddBook />} />
                <Route path="/admin/book" element={<BookList />} />
                <Route path="/admin/book/:id" element={<EditBook />} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
        {/* <Box className={"full-page-container bg-white"} padding={"2rem"}> */}
        <Routes>
          <Route
            path="/sign-in"
            element={
              <>
                <Box
                  className={"full-page-container bg-white"}
                  padding={"2rem"}
                >
                  <SignIn />
                </Box>
              </>
            }
          />
          <Route
            path="/sign-up"
            element={
              <>
                <Box
                  className={"full-page-container bg-white"}
                  padding={"2rem"}
                >
                  <SignUp />
                </Box>
              </>
            }
          />
          <Route
            path="/change-password"
            element={
              <>
                <Box
                  className={"full-page-container bg-white"}
                  padding={"2rem"}
                >
                  <ChangePassword />
                </Box>
              </>
            }
          />
        </Routes>
        {/* </Box> */}
      </Router>
    </>
  );
};

export default App;
