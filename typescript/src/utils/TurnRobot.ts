import { BaseCommands, Directions } from "../types";
import type { Command } from "../types";
import { GetPosition, UpdatePosition } from "./Position";
import { warningRef } from "../Elements";
import { UpdateHistory } from "./UpdateHistory";

export const TurnRobot = (command: Command): void => {
  const { dir, isRobotPlaced } = GetPosition();
  const { cmd } = command;
  let newDir: Directions | undefined = dir;

  if (isRobotPlaced && dir) {
    if (dir === Directions.East) {
      newDir = cmd === BaseCommands.Left ? Directions.North : Directions.South;
    }
    if (dir === Directions.North) {
      newDir = cmd === BaseCommands.Left ? Directions.West : Directions.East;
    }
    if (dir === Directions.South) {
      newDir = cmd === BaseCommands.Left ? Directions.East : Directions.West;
    }
    if (dir === Directions.West) {
      newDir = cmd === BaseCommands.Left ? Directions.South : Directions.North;
    }
    UpdatePosition({
      dir: newDir,
      isRobotPlaced: true,
    });
    UpdateHistory(cmd);
  } else {
    warningRef.innerHTML = "To turn, place the robot first";
    UpdateHistory(null);
  }
};
