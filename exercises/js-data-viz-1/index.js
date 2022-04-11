const apps = [
  { name: 'Discord', frequency: 8 },
  { name: 'Messages', frequency: 3 },
  { name: 'Facebook', frequency: 3 },
  { name: 'Instagram', frequency: 2 },
  { name: 'Youtube', frequency: 5 },
]

const container = document.querySelector(".background")
let i = 0;

apps.forEach(app => {
  // creates a new div; appends that div to the container
  const newItem = document.createElement("div")
  const appDiv = container.appendChild(newItem)
  i++;
  newItem.classList.add("app")
  newItem.classList.add("app" + [i])

  const { name, frequency } = app
  appDiv.innerHTML = `${name} - ${frequency}`
  appDiv.style.height = `${frequency * 100}px`
  appDiv.style.width = `${frequency * 100}px`
  console.log(app)
});