import React from "react";
import { Container, Name, Icon } from "./styles";
import ButtonIcon from "@components/ButtonIcon";

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export default function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
}
