import { BaseCommands } from "../types";
import type { Command } from "../types";
import { PlaceRobot } from "./PlaceRobot";
import { MoveRobot } from "./MoveRobot";
import { TurnRobot } from "./TurnRobot";
import { ReportPosition } from "./Position";
import { outputRef, warningRef } from "../Elements";

export const ExecCommand = (plaintext: string): void => {
  const [cmd, xpos, ypos, dir] = plaintext.trim().toUpperCase().split(/[ ,]+/);
  const modCommand = {
    cmd,
    dir: dir || undefined,
    xpos: xpos ? parseInt(xpos, 10) : undefined,
    ypos: ypos ? parseInt(ypos, 10) : undefined,
  } as Command;
  const allowedCommands = Object.values(BaseCommands) as string[];
  warningRef.innerHTML = "";
  outputRef.style.display = "none";
  let cmdError = null;
  if (allowedCommands.includes(cmd)) {
    switch (cmd) {
      case BaseCommands.Place:
        PlaceRobot(modCommand);
        break;
      case BaseCommands.Move:
        MoveRobot();
        break;
      case BaseCommands.Left:
      case BaseCommands.Right:
        TurnRobot(modCommand);
        break;
      case BaseCommands.Report:
        ReportPosition();
        break;
      default:
        cmdError = `Base command type ${cmd} is not allowed`;
    }
  } else {
    cmdError = `Command Exception, Please use one of: ${Object.values(
      BaseCommands
    ).join(", ")}`;
  }
  cmdError && (warningRef.innerHTML = cmdError);
};
