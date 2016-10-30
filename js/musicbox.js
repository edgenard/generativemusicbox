
window.onload = function () {
  const canvas = document.getElementById('canvas')
  const view = new View(canvas)
  view.updateDisplay()// Hello

  canvas.addEventListener('click', view.handleClick.bind(view))

}
