import { Typography, useMediaQuery, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
  BannerShopButton,
} from "../../styles/banner";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/foto2.jpg" />
      <BannerContent>
        <Typography variant="h6">
          We take care while you enjoy your free time
        </Typography>
        <BannerTitle variant="h2">Meet our Services</BannerTitle>

        <BannerDescription variant="subtitle">
          descripcion de las casasdescripcion de las casasdescripcion de las
          casasdescripcion de las casasdescripcion de las casasdescripcion de
          las casasdescripcion de las casasdescripcion de las casasdescripcion
          de las casasdescripcion de las casas
        </BannerDescription>
        <BannerShopButton color="primary">View Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
