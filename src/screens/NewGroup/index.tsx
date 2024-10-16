import React, { useState } from "react";
import { Container, Content, Icon } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export default function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleBackHome() {
    navigation.navigate("groups");
  }

  function handleNew() {
    navigation.navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton handleBack={handleBackHome} />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adiconar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          style={{ marginBottom: 16 }}
          onChangeText={setGroup}
        />
        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
}
