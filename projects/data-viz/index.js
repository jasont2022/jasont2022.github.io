// an array of study objects
const studySessions = [
  { date: '4/6', day: 'Wednesday', totalMins: 150, left: 50, top: 50, cis545: 75, cis188: 0, dsgn234: 0, engl135: 75, ealc064: 0 },
  { date: '4/7', day: 'Thursday', totalMins: 255, left: 300, top: 100, cis545: 75, cis188: 90, dsgn234: 90, engl135: 0, ealc064: 0 },
  { date: '4/8', day: 'Friday', totalMins: 240, left: 150, top: 450, cis545: 120, cis188: 0, dsgn234: 0, engl135: 0, ealc064: 120 },
  { date: '4/9', day: 'Saturday', totalMins: 180, left: 500, top: 400, cis545: 0, cis188: 0, dsgn234: 90, engl135: 0, ealc064: 90 },
  { date: '4/10', day: 'Sunday', totalMins: 300, left: 700, top: 100, cis545: 90, cis188: 0, dsgn234: 0, engl135: 135, ealc064: 75 },
  { date: '4/11', day: 'Monday', totalMins: 240, left: 1200, top: 0, cis545: 0, cis188: 0, dsgn234: 120, engl135: 120, ealc064: 0 },
  { date: '4/12', day: 'Tuesday', totalMins: 120, left: 1150, top: 350, cis545: 0, cis188: 0, dsgn234: 0, engl135: 120, ealc064: 0 },
  { date: '4/13', day: 'Wednesday', totalMins: 120, left: 950, top: 550, cis545: 0, cis188: 120, dsgn234: 0, engl135: 0, ealc064: 0 },
]

const colorArray = [
  { code: 'CIS 545', name: 'Data Science', color: '#EC9F05' },
  { code: 'CIS 188', name: 'DevOps', color: '#FFDD00' },
  { code: 'DSGN 234', name: 'Art of the Web', color: '#FB7BA2' },
  { code: 'ENGL 135', name: 'English', color: '#FBA8A4' },
  { code: 'EALC 064', name: 'Sushi and Ramen', color: '#E899DC' },
]

// get the background container
const container = document.querySelector(".background")
let i = 0

// create a canvas for the study session shapes
// studySessions.forEach(studySession => {
//   const newItem = document.createElement("div")
//   const dateDiv = container.appendChild(newItem)
//   i++;
//   newItem.classList.add("date")
//   newItem.classList.add("date" + [i])

//   const { date, day, top, left, totalMins, cis545, cis188, dsgn234, engl135, ealc064 } = studySession
//   dateDiv.innerHTML = `${date}`
//   dateDiv.style.height = `${totalMins}px`
//   dateDiv.style.width = `${totalMins}px`
//   dateDiv.style.position = 'absolute'
//   dateDiv.style.top = `${top}px`
//   dateDiv.style.left = `${left}px`

//   dateDiv.addEventListener("mouseover", () => {
//     dateDiv.innerHTML = `${day} \n CirTotal Mins: ${totalMins} \n Data Science: ${cis545} \n DevOps: ${cis188} \n Art of the Web: ${dsgn234} \n English: ${engl135} \n Sushi and Ramen: ${ealc064}`
//   });
//   dateDiv.addEventListener("mouseleave", () => {
//     dateDiv.innerHTML = `${date}`
//   });
// })

// create a button to toggle between div elements
const button = document.createElement("div")
const buttonDiv = container.appendChild(button)
buttonDiv.classList.add("button")
buttonDiv.innerHTML = 'Learn More!'

// create a legend section
const legend = document.createElement("div")
const legendDiv = container.appendChild(legend)
legendDiv.classList.add("legend")
legendDiv.innerHTML = 'Legend'

const shapes = document.createElement("div")
const shapesDiv = legend.appendChild(shapes)
shapesDiv.classList.add("shapes")

// create a weekday div
const square = document.createElement("div")
const squareDiv = shapes.appendChild(square)
squareDiv.classList.add("shape")
squareDiv.innerHTML = 'Weekday'

// create a weekend div
const circle = document.createElement("div")
const circleDiv = shapes.appendChild(circle)
circleDiv.classList.add("shape")
circleDiv.classList.add("weekend")
circleDiv.innerHTML = 'Weekend'

const shape = document.createElement("div")
const shapeDiv = shapes.appendChild(shape)
shapeDiv.classList.add("shape")
shapeDiv.classList.add("weekend")
shapeDiv.classList.add("size")
shapeDiv.innerHTML = 'Size = Total Mins'

// create a color code section
const colors = document.createElement("div")
const colorsDiv = legend.appendChild(colors)
colorsDiv.classList.add("colors")

// create individual color block
colorArray.forEach(colorItem => {
  const newItem = document.createElement("div")
  const colorDiv = colorsDiv.appendChild(newItem)
  i++;
  newItem.classList.add("color")
  newItem.classList.add("color" + [i])

  const { name, color, code } = colorItem
  colorDiv.innerHTML = `${name}`
  colorDiv.style.backgroundColor = `${color}`

  colorDiv.addEventListener("mouseover", () => {
    colorDiv.innerHTML = `${code}`
  });
  colorDiv.addEventListener("mouseleave", () => {
    colorDiv.innerHTML = `${name}`
  });
})
