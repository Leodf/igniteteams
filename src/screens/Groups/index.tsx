import React from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";

export default function Groups() {
  return (
    <>
      <Container>
        <Header />
        <Highlight title="Turmas" subtitle="jogue com sua turma" />
        <GroupCard title="Nova turma" />
      </Container>
    </>
  );
}
