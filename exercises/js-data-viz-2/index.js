const studySessions = [
  { date: '4/6', totalMins: 150, cis545: 75, cis188: 0, ese451: 0, dsgn234: 0, dsgn266: 0, engl135: 75, ealc064: 0 },
  { date: '4/7', totalMins: 255, cis545: 75, cis188: 90, ese451: 0, dsgn234: 90, dsgn266: 0, engl135: 0, ealc064: 0 },
  { date: '4/8', totalMins: 240, cis545: 120, cis188: 0, ese451: 0, dsgn234: 0, dsgn266: 0, engl135: 0, ealc064: 120 },
  { date: '4/9', totalMins: 180, cis545: 0, cis188: 0, ese451: 0, dsgn234: 90, dsgn266: 0, engl135: 0, ealc064: 90 },
]

const colorMap = {
  cis545: '#ACB6E5',
  cis188: '#86FDE8',
  ese451: '#81FBB8',
  dsgn234: '#28C76F',
  dsgn266: '#ABDCFF',
  engl135: '#0396FF',
  ealc064: '#9708CC',
}

const container = document.querySelector(".background")
let i = 0

studySessions.forEach(studySession => {
  // creates a new div; appends that div to the container
  const newItem = document.createElement("div")
  const dateDiv = container.appendChild(newItem)
  i++;
  newItem.classList.add("date")
  newItem.classList.add("date" + [i])

  const { date, totalMins, cis545, cis188, ese451, dsgn234, dsgn266, engl135, ealc064 } = studySession
  dateDiv.innerHTML = `Date: ${date} - Total Minutes Spent Studying: ${totalMins}`
  dateDiv.style.height = `${totalMins * 2}px`
  dateDiv.style.width = `${totalMins * 2}px`
})