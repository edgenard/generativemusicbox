

const View = function (canvas) {
  this.canvas = canvas
  this.surface = canvas.getContext('2d')
  this.width = canvas.width
  this.height = canvas.height
}

View.prototype.updateDisplay = function () {
  const {width, height, surface} = this
  surface.clearRect(0, 0, width, height)
  surface.fillStyle = '#707070'
  surface.fillRect(0, 0, width, height)

  this.drawCircle({x: 300, y: 150, radius: 100, opacity: 0.5}  )
}


View.prototype.handleClick = function (event) {
  const {x, y} = event
  console.log(this)
  this.drawCircle({x, y, radius: 100, opacity: 0.5})
}

View.prototype.drawCircle = function ({x, y, radius, opacity}) {
  const surface = this.surface
  surface.beginPath()
  // x and y are the center of the arc
  // radius is the radius
  // 0 is the starting angle
  // 2*Math.PI is the ending angle. This ending angle is what makes it a circle
  surface.arc(x, y, radius,0, 2*Math.PI)
  surface.fillStyle = `rgba(${x % 256}, ${y % 256}, ${ x * y % 256}, ${opacity})`
  surface.fill()

}
