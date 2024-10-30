import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDto } from "./playerStorageDto";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playerGetByGroup } from "./playerGetByGroup";
import { AppError } from "@utils/AppError";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDto,
  group: string
) {
  try {
    const storagePlayers = await playerGetByGroup(group);
    const playerAlreadyExists = storagePlayers.filter(
      (player) => player.name === newPlayer.name
    );
    if (playerAlreadyExists.length > 0) {
      throw new AppError(
        `${newPlayer.name} já está adicionada em um time aqui.`
      );
    }
    const storage = JSON.stringify([...storagePlayers, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
