

const View = function (canvas) {
  this.canvas = canvas
  this.surface = canvas.getContext('2d')
  this.width = canvas.width
  this.height = canvas.height
  this.circles = []
  this.frameRate = 1000 / 30
  this.maxRadius = 100
}

View.prototype.updateDisplay = function () {
  this.clearDisplay()

  this.drawCircles()
}

View.prototype.drawCircles = function () {
  this.circles.forEach((circle) => {
    const {x, y, radius, opacity} = circle
    if (radius < this.maxRadius) {
      this.drawCircle({x, y, radius, opacity})
      circle.radius += 1
      circle.opacity =  radius / 100
    } else {
      circle.radius = 0
      circle.opacity = 0.1
    }

  })

}

View.prototype.clearDisplay = function () {
  const {width, height, surface} = this
  surface.clearRect(0, 0, width, height)
  surface.fillStyle = '#707070'
  surface.fillRect(0, 0, width, height)
}

View.prototype.drawCircle = function ({x, y, radius, opacity}) {
  const {surface} = this
  surface.beginPath()
  // x and y are the center of the arc
  // radius is the radius
  // 0 is the starting angle
  // 2*Math.PI is the ending angle. This ending angle is what makes it a circle
  surface.arc(x, y, radius,0, 2*Math.PI)
  surface.fillStyle = `rgba(${x % 256}, ${y % 256}, ${ x * y % 256}, ${opacity})`
  surface.fill()

}


View.prototype.handleClick = function (event) {
  const {x, y} = event
  this.circles.push({x, y, radius: 1, opacity: 0.1})
  this.updateDisplay()

}
