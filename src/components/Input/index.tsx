import React from "react";
import { Container } from "./styles";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export default function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme();
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  );
}
