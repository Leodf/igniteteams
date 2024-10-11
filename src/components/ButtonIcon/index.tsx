import { TouchableOpacityProps } from "react-native";
import React from "react";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export default function ButtonIcon({
  icon,
  type = "PRIMARY",
  ...rest
}: ButtonIconProps) {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
