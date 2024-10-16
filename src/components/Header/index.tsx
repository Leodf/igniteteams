import React from "react";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import LogoIMg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
  handleBack?: () => void;
};

export default function Header({
  showBackButton = false,
  handleBack,
}: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={LogoIMg} />
    </Container>
  );
}
