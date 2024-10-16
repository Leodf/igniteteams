import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Container, Form, HeaderList, NumberofPlayers } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);
  const navigation = useNavigation();

  function handleBackHome() {
    navigation.navigate("groups");
  }

  function handleChangeTeam(item: string) {
    return setTeam(item);
  }

  return (
    <Container>
      <Header showBackButton handleBack={handleBackHome} />
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
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}
