export type Command = {
  cmd: string;
  dir: Directions;
  xpos: number;
  ypos: number;
};

export enum BaseCommands {
  Place = "PLACE",
  Left = "LEFT",
  Right = "RIGHT",
  Move = "MOVE",
  Report = "REPORT",
}

export enum Directions {
  East = "EAST",
  West = "WEST",
  North = "NORTH",
  South = "SOUTH",
}

export interface RoboState {
  dir?: Directions;
  isRobotPlaced?: boolean;
  xpos?: number;
  ypos?: number;
}
