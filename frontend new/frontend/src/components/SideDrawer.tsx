import React from "react";
import { Link } from "react-router-dom";
import { ListItemIcon } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WidgetsIcon from "@mui/icons-material/Widgets";

const SideDrawer = () => {
  return (
    <List>
      <ListItem className="cursor-pointer" component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" className="text-secondary" />
      </ListItem>
      <ListItem className="cursor-pointer" component={Link} to="/about-us">
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" className="text-secondary" />
      </ListItem>
      <ListItem className="cursor-pointer" component={Link} to="/shop">
        <ListItemIcon>
          <ShoppingBagIcon />
        </ListItemIcon>
        <ListItemText primary="Shop" className="text-secondary" />
      </ListItem>
      <ListItem className="cursor-pointer" component={Link} to="/author">
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Author" className="text-secondary" />
      </ListItem>
      <ListItem className="cursor-pointer" component={Link} to="/orderfrom">
        <ListItemIcon>
          <AddShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Order From" className="text-secondary" />
      </ListItem>
      <ListItem
        className="cursor-pointer"
        component={Link}
        to="/become-an-author"
      >
        <ListItemIcon>
          <PersonAddAltIcon />
        </ListItemIcon>
        <ListItemText primary="Become An Author" className="text-secondary" />
      </ListItem>
      <ListItem className="cursor-pointer" component={Link} to="/catalogue">
        <ListItemIcon>
          <WidgetsIcon />
        </ListItemIcon>
        <ListItemText primary="Our Catalogue" className="text-secondary" />
      </ListItem>
      <ListItem className="cursor-pointer" component={Link} to="/contact-us">
        <ListItemIcon>
          <ContactsIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Us" className="text-secondary" />
      </ListItem>
    </List>
  );
};

export default SideDrawer;
