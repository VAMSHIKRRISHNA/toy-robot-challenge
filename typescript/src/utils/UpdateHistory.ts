import { cmdHistoryRef } from "../Elements";

export const UpdateHistory = (command: string | null): void => {
  if (!command) {
    cmdHistoryRef.innerHTML = "";
    return;
  }
  const cmdHistory = cmdHistoryRef.innerHTML;
  const newCmdHistory = cmdHistory
    ? `${cmdHistory}<span class="cmd_list">${command}</span>`
    : `<span class="cmd_list">${command}</span>`;
  cmdHistoryRef.innerHTML = newCmdHistory;
};
