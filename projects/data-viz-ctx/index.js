
// set up the canvas and initalize them as global constants
const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")

// begin drawing on canvas
const date1 = drawRectangle(150, 250, 150, '#EC9F05')
drawLine(150, 250, 450, 350, 'white')
const date2 = drawRectangle(450, 350, 255, "#FB7BA2")
drawLine(450, 350, 400, 800, 'white')
const date3 = drawCircle(400, 800, 120, "#FB7BA2")
drawLine(400, 800, 800, 750, 'white')
const date4 = drawCircle(800, 750, 90, "#FB7BA2")
drawLine(800, 750, 1000, 450, 'white')
const date5 = drawCircle(1000, 450, 150, "#FB7BA2")
drawLine(1000, 450, 1200, 100, 'white')
const date6 = drawRectangle(1200, 100, 240, "#FB7BA2")
drawLine(1200, 100, 1500, 400, 'white')
const date7 = drawRectangle(1500, 400, 120, "#FB7BA2")
drawLine(1500, 400, 1250, 600, 'white')
const date8 = drawRectangle(1250, 600, 120, "#FB7BA2")
drawLine(1250, 600, 1600, 800, 'white')
const finish = drawCircle(1600, 800, 60, "#FB7BA2")

// a function that draws a filled rec at x and y
function drawRectangle(x, y, size, color) {
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.fillRect(x, y, size, size)
}

// a function that draws a filled circle at x and y
function drawCircle(x, y, r, color) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fillStyle = color
  ctx.fill()
}

// a function that draws a line at x and y
function drawLine(x1, y1, x2, y2, color) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineWidth = 3
  ctx.strokeStyle = color
  ctx.stroke()
}