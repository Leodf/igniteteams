import { View, Text } from "react-native";
import React from "react";
import { Container, SubTitle, Title } from "./styles";

type HighlightProps = { title: string; subtitle: string };

export default function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
