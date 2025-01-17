import React, { useCallback, useState } from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGetAll } from "@storage/group/groupGetAll";
import Loading from "@components/Loading";

export default function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <>
      <Container>
        <Header />
        <Highlight title="Turmas" subtitle="jogue com sua turma" />
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={groups}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message="Que tal cadastrar a primeira turma" />
            )}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
          />
        )}
        <Button title="Criar Nova turma" onPress={handleNewGroup} />
      </Container>
    </>
  );
}
