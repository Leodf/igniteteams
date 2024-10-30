import { playerGetByGroup } from "./playerGetByGroup";
import { PlayerStorageDto } from "./playerStorageDto";

export async function playerGetByGroupAndTeam(
  group: string,
  team: string
): Promise<PlayerStorageDto[]> {
  try {
    const storage = await playerGetByGroup(group);
    const players = storage.filter((player) => player.team === team);
    return players;
  } catch (error) {
    throw error;
  }
}
