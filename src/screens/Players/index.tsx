import { FlatList, Alert } from "react-native";
import React, { useCallback, useState } from "react";
import { Container, Form, HeaderList, NumberofPlayers } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDto } from "@storage/player/playerStorageDto";

type RouteParams = {
  group: string;
};

export default function Players() {
  const [team, setTeam] = useState("Time A");
  const [newPlayerName, setNewPlayerName] = useState("");
  const [players, setPlayers] = useState<PlayerStorageDto[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;
  const navigation = useNavigation();

  function handleBackHome() {
    navigation.navigate("groups");
  }

  function handleChangeTeam(item: string) {
    return setTeam(item);
  }

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }
    const newPlayer = {
      name: newPlayerName,
      team,
    };
    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "não foi possível adicionar");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionado"
      );
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPlayersByTeam();
    }, [team])
  );

  return (
    <Container>
      <Header showBackButton handleBack={handleBackHome} />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
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
