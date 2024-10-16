import { TouchableOpacityProps } from "react-native";
import React from "react";
import { Container, FilterStylesProps, Title } from "./styles";

type FilterProps = TouchableOpacityProps &
  FilterStylesProps & {
    title: string;
  };

export default function Filter({
  title,
  isActive = false,
  ...rest
}: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
