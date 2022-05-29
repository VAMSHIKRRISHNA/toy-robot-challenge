import { ExecCommand } from "./utils/ExecCommand";
import { exeBtnRef, inputRef } from "./Elements";

exeBtnRef.addEventListener("click", () => ExecCommand(inputRef.value));
