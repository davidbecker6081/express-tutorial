const btn = document.querySelector('button');
const main = document.querySelector('main');

const fetchSunsets = () => {
  fetch('http://localhost:3000/sunsets')
    .then(response => response.json())
    .then(parsedResponse => {
      const newImage = document.createElement('img')
      newImage.src = parsedResponse.sunsets
      main.appendChild(newImage)
    })
}

btn.addEventListener('click', () => {
  fetch('http://localhost:3000/json')
    .then(response => response.json())
    .then(parsedResponse => {
      const newElement = document.createTextNode(parsedResponse.name);

      main.appendChild(newElement)
    })

  fetchSunsets()
})
