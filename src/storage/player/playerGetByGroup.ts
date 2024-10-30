import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDto } from "./playerStorageDto";

export async function playerGetByGroup(
  group: string
): Promise<PlayerStorageDto[]> {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const players: PlayerStorageDto[] = storage ? JSON.parse(storage) : [];
    return players;
  } catch (error) {
    throw error;
  }
}
