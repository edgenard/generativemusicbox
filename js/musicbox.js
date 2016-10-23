
window.onload = function () {
  const view = new View()
  view.deleteDisplay = function () {
    console.log('Delete display')
  }

  view.updateDisplay()// Hello

  view.deleteDisplay() // Delete display

  const view2 = new View()

  view2.updateDisplay() // Hello
  view2.deleteDisplay() // Prototypal Delete Display  
}
