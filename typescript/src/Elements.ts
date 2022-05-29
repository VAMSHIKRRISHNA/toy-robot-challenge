// Element refs
export const inputRef = document.getElementById("command")! as HTMLInputElement;
export const exeBtnRef = document.getElementById(
  "execute"
)! as HTMLButtonElement;
export const warningRef = document.querySelector(
  ".warning"
)! as HTMLSpanElement;
export const cmdHistoryRef = document.querySelector(
  ".cmd_history"
)! as HTMLDivElement;
export const outputRef = document.querySelector(".output")! as HTMLDivElement;
