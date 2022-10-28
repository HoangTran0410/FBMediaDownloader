export function reEnableContextMenu() {
  document.oncontextmenu = null;
  window.oncontextmenu = null;
  var elements = document.getElementsByTagName("*");
  for (var id = 0; id < elements.length; ++id) {
    elements[id].oncontextmenu = null;
  }
}
