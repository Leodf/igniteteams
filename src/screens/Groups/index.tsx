import React from "react";
import { Container, Title } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";

export default function Groups() {
  return (
    <>
      <Container>
        <Header />
        <Highlight title="Turmas" subtitle="jogue com sua turma" />
      </Container>
    </>
  );
}
