import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Container, Form, HeaderList, NumberofPlayers } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";

export default function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);

  function handleChangeTeam(item: string) {
    return setTeam(item);
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => handleChangeTeam(item)}
            />
          )}
          horizontal
        />
        <NumberofPlayers>{players.length}</NumberofPlayers>
      </HeaderList>
    </Container>
  );
}
