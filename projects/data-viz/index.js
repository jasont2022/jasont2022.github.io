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

const container = document.querySelector(".background")
let i = 0

// create a canvas for the study session shapes
studySessions.forEach(studySession => {
  const newItem = document.createElement("div")
  const dateDiv = container.appendChild(newItem)
  i++;
  newItem.classList.add("date")
  newItem.classList.add("date" + [i])

  const { date, day, top, left, totalMins, cis545, cis188, dsgn234, engl135, ealc064 } = studySession
  dateDiv.innerHTML = `${date}`
  dateDiv.style.height = `${totalMins}px`
  dateDiv.style.width = `${totalMins}px`
  dateDiv.style.position = 'absolute'
  dateDiv.style.top = `${top}px`
  dateDiv.style.left = `${left}px`

  dateDiv.addEventListener("mouseover", () => {
    dateDiv.innerHTML = `${day} \n Total Mins: ${totalMins} \n Data Science: ${cis545} \n DevOps: ${cis188} \n Art of the Web: ${dsgn234} \n English: ${engl135} \n Sushi and Ramen: ${ealc064}`
  });
  dateDiv.addEventListener("mouseleave", () => {
    dateDiv.innerHTML = `${date}`
  });
})

// create a button to toggle between div elements
const button = document.createElement("div")
const buttonDiv = container.appendChild(button)
buttonDiv.classList.add("button")
buttonDiv.innerHTML = 'Learn More'