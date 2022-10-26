import * as funcs from "./scripts.js";
import { runScriptInCurrentTab } from "./utils.js";

let container = document.querySelector("#list");
for (let key in funcs) {
  let button = document.createElement("button");
  button.innerText = key;
  button.onclick = () => runScriptInCurrentTab(funcs[key]);
  container.appendChild(button);
  container.appendChild(document.createElement("br"));
}
