import { Directions } from "../types";
import { GetPosition, UpdatePosition } from "./Position";
import { UpdateHistory } from "./UpdateHistory";
import { warningRef } from "../Elements";

const gridSize = 5;
export const MoveRobot = (): void => {
  const { dir, isRobotPlaced, xpos, ypos } = GetPosition();
  let moveError = null;
  let x = xpos;
  let y = ypos;

  if (!isRobotPlaced || x === undefined || y === undefined) {
    moveError = "To move, place the robot first";
    UpdateHistory(null);
  } else {
    if (dir === Directions.East) {
      x = x >= gridSize - 1 ? x : x + 1;
    } else if (dir === Directions.North) {
      y = y >= gridSize - 1 ? y : y + 1;
    } else if (dir === Directions.South) {
      y = y === 0 ? y : y - 1;
    } else if (dir === Directions.West) {
      x = x === 0 ? x : x - 1;
    }
    moveError =
      x === xpos && y === ypos ? "Robot can't be moved off the table" : null;
  }
  if (!moveError) {
    UpdatePosition({
      xpos: x,
      ypos: y,
    });
    UpdateHistory("MOVE");
  } else {
    warningRef.innerHTML = moveError;
  }
};
