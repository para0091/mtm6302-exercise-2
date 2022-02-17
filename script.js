
// Targeting elements
const $images = document.getElementById('images')
const $description = document.getElementById('description')

const imageGallery = []

// Generate the image by incrementing id by each time
for (let i = 1; i < 11;i++){
    
    imageGallery.push(` 
        <div class='image' id='image${i}'>
        <div>
            <a href="#"><img src='images/${i}.jpg' class="each-img"></a>
            <h3>Photo #${i}</h3>           
        </div>
        </div>
    `)
}

$images.innerHTML = imageGallery.join('')

const $imageList = document.querySelectorAll('.image')

for (const image of $imageList){
        
    image.children[0].addEventListener('click', function(e) {
       
    $images.innerHTML = image.children[0].innerHTML + `<button class='back-button' onclick="location.reload()">Go Back</button>`
    
    $images.id = "big-image"
    
    })
}










 