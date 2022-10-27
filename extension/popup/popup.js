import { scripts } from "./scripts/index.js";
import { runScriptFileInCurrentTab, runScriptInCurrentTab } from "./utils.js";

let container = document.querySelector("#list");
for (let s of scripts) {
  let button = document.createElement("button");
  button.innerText = s.name;
  if (s.file) {
    button.onclick = () => runScriptFileInCurrentTab(s.file);
  } else if (s.func) {
    button.onclick = () => runScriptInCurrentTab(s.func);
  } else {
    button.onclick = () => alert("empty script");
  }
  container.appendChild(button);
  container.appendChild(document.createElement("br"));
}
