const $images = document.getElementById('images')
const $description = document.getElementById('description')
const $overlay = document.querySelector('.overlay')
const $overlayImage = document.querySelector('.overlay-image')
const $button = document.querySelector('.button')

const imageGallery = []

for (let i = 1; i < 16; i++) {

    imageGallery.push(` 
        <div class='image-container' data-number='image${i}'>
            <img src='images/${i}.jpg' class="image">
        </div>
    `)
}

const $image = document.querySelector('.image')

$images.innerHTML = imageGallery.join('')

// Creating the function for interactivity

function interactiveGallery(e) {

    const $clickedImage = e.target.closest('.image')

    $overlayImage.src = $clickedImage.src
    $overlay.classList.add('show')

    $button.addEventListener('click', function () {
        $overlay.classList.remove('show')
    })
}

// Event Delegation, applying the event listener to all images inside $images

$images.addEventListener('click', interactiveGallery)