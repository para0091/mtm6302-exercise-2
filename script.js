
const $images = document.getElementById('images')

const images = []

for (let i=1; i<11; i++) {
    images.push(`<div id="image-container">
    <img src="images/${i}.jpg" class="image">
    <button class="more">Learn More</button>
    </div>`)
}

$images.innerHTML += images.join('')



