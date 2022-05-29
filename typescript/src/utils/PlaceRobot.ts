import { Directions } from "../types";
import type { Command } from "../types";
import { UpdatePosition } from "./Position";
import { warningRef } from "../Elements";
import { UpdateHistory } from "./UpdateHistory";

export const PlaceRobot = (command: Command): void => {
  let placeError = null;
  const { dir, xpos, ypos } = command;
  UpdateHistory(null);
  if (dir === undefined || xpos === undefined || ypos === undefined) {
    placeError = "Command Exception: expected four arguments";
  } else {
    if (!Number.isInteger(xpos) || !Number.isInteger(ypos)) {
      placeError = "Command Exception: X and Y positions must be integers";
    }

    if (xpos < 0 || ypos < 0 || xpos >= 5 || ypos >= 5) {
      placeError = "Command Exception: positions are off the table";
    }

    const facingDirections = Object.values(Directions) as string[];
    if (!dir || !facingDirections.includes(dir)) {
      placeError = `Command Exception: facing direction must be one of ${Object.values(
        facingDirections
      ).join(", ")}`;
    }
  }
  if (!placeError) {
    UpdatePosition({
      dir,
      isRobotPlaced: true,
      xpos,
      ypos,
    });
    UpdateHistory(`PLACE ${xpos}, ${ypos}, ${dir}`);
  } else {
    warningRef.innerHTML = placeError;
  }
};
