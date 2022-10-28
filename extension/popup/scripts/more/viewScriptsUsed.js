export function viewScriptsUsed() {
  let scripts = document.getElementsByTagName("SCRIPT"),
    tx = "",
    sr = [];

  for (i = 0; i < scripts.length; i++) {
    let script = scripts.item(i);
    if (script.text) tx += script.text;
    else sr.push(script.src);
  }

  newTab = window.open();
  newTab.document.write(
    `<textarea id="t" style='width="99%";height="99%";borderStyle="none";'>
        ${sr.join("\n")}\n\n-----\n\n${tx}
        </textarea>
        
        <script src="https://beautifier.io/js/lib/beautify.js"></script>
        <script>
            with(document.getElementById("t")){
                value = js_beautify(value);
            };
        </script>`
  );
  newTab.document.close();
}
