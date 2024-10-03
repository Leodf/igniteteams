import React from "react";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import LogoIMg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoIMg} />
    </Container>
  );
}
