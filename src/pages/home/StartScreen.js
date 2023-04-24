import React from "react";
import bg from "../../image/bg.png";
import chair from "../../image/img.png";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
const bannerBg = {
  flexGrow: 1,
  //padding: theme.spacing(3),
  height: "100vh",
  textAlign: "center",
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundColor: "rgba(10,58,74,0.2)",
  backgroundBlendMode: " ",
};
const StartScreen = () => {
  return (
    <Box
      sx={bannerBg}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={chair} alt="" sx={{ height: "50%", width: "50%" }} />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
          Category A
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ textTransform: "capitalize" }}
        >
          Category B
        </Button>
      </Stack>
    </Box>
  );
};

export default StartScreen;
