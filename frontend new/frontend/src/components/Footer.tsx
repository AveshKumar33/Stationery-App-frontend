import { Box, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Box className="bg-white">
        <Grid container spacing={2}>
          <Grid item xs={4} className="px-3">
            <Box>
              <Box>
                <img
                  src={"/Images/avesh.logo.png"}
                  style={{ height: "150px", width: "100%", borderRadius: 10 }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} className="px-3">
            <Box>
              <Box>
                <span className="fw-bold">Address: </span> Sikandra Kanpur Uttar
                Pradesh - 209115
              </Box>
              <Box>
                <span className="fw-bold">Ph No: </span>+91 9045851817
              </Box>
              <Box>
                <span className="fw-bold">Email: </span>
                katiyaravesh333@gmail.com
              </Box>
              <Box>
                Avesh Publishers was established in 1997. Since then, it has
                grown to be the leading academic publisher of low-cost and
                high-quality{" "}
                <Link
                  to={"/about-us"}
                  className="text-primary cursor-pointer text-decoration-none"
                >
                  read more...
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} className="px-3">
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7149.517925152097!2d79.62968649999999!3d26.36665705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399d939ede3b15e9%3A0x80df238a2a612b6a!2sSikandra%2C%20Uttar%20Pradesh%20209125!5e0!3m2!1sen!2sin!4v1715422917690!5m2!1sen!2sin"
                // width={400}
                // height={250}
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="d-flex justify-content-center w-100">
              <span className="fw-bold text-secondary">Developed By</span>
              <span className="ms-2 fw-bold text-danger">Avesh Katiyar</span>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
