
window.onload = function () {
  const canvas = document.getElementById('canvas')
  const view = new View(canvas)
  view.clearDisplay()// Hello

  canvas.addEventListener('click', view.handleClick.bind(view))
  setInterval(view.updateDisplay.bind(view), view.frameRate)
}
