import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

export async function groupRemoveByName(groupName: string): Promise<void> {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter((group) => group !== groupName);
    await Promise.all([
      AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups)),
      AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`),
    ]);
  } catch (error) {
    throw error;
  }
}
