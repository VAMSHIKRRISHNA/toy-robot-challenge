import { RoboState } from "../types";
import { warningRef, outputRef } from "../Elements";
import { UpdateHistory } from "./UpdateHistory";

let roboState: RoboState = {
  isRobotPlaced: false,
};

export const UpdatePosition = (state: RoboState): void => {
  roboState = { ...roboState, ...state };
};

export const ReportPosition = (): void => {
  const { dir, isRobotPlaced, xpos, ypos } = roboState;

  let reportError = null;
  if (!isRobotPlaced) {
    reportError = "To report, place the robot first";
    warningRef.innerHTML = reportError;
    UpdateHistory(null);
    outputRef.style.display = "none";
    return;
  }
  outputRef.style.display = "block";
  outputRef.innerHTML = `Final position of the Robot is at :  ${xpos}, ${ypos}, ${dir}`;
  roboState.isRobotPlaced = false;
};

export const GetPosition = (): RoboState => {
  return roboState;
};
