function processImage() {
    const imageFile = document.querySelector("input[type=file]").files[0];
    const memeDiv = document.createElement("div");
    const image = document.createElement("img");
    const topText = document.querySelector("input[name= top-text]");
    const topTextP = document.createElement("p");
    topTextP.classList.add("top-text");
    const bottomText = document.querySelector("input[name= bottom-text");
    const bottomTextP = document.createElement("p");
    bottomTextP.classList.add("bottom-text");

    topTextP.innerText = topText.value;
    bottomTextP.innerText = bottomText.value

    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = function() {
        const imageUrl = reader.result;
        image.src = imageUrl;
    }

    memeDiv.appendChild(topTextP);
    memeDiv.appendChild(bottomTextP);
    memeDiv.appendChild(image);
    memeDiv.classList.add("added-image");

    const memeArea = document.querySelector(".meme-area");
    memeArea.appendChild(memeDiv);
}

const formButton = document.querySelector(".meme-form button");
formButton.addEventListener('click', function(e) {
    e.preventDefault();
    processImage();
});