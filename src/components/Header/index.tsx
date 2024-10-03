import React from "react";
import { Container, Logo } from "./styles";
import LogoIMg from "@assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Logo source={LogoIMg} />
    </Container>
  );
}
