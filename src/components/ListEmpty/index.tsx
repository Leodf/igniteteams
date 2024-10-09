import React from "react";
import { Container, Message } from "./styles";

type ListEmptyProps = {
  message: string;
};

export default function ListEmpty({ message }: ListEmptyProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
