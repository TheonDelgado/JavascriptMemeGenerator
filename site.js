function processImage() {
    
    const memeDiv = document.createElement("div");
    const image = document.createElement("img");
    const topTextP = document.createElement("p");
    const topText = document.querySelector("input[name= top-text]");
    const bottomText = document.querySelector("input[name= bottom-text");
    const imageFile = document.querySelector("input[type=file]").files[0];

    if(topText.value == 0|| bottomText.value == 0 || imageFile == null) { return; }

    topTextP.classList.add("top-text");
    
    const bottomTextP = document.createElement("p");
    bottomTextP.classList.add("bottom-text");

    if(topText.value != 0)
    {
        topTextP.innerText = topText.value;
    }
    if(bottomText.value != 0)
    {
       bottomTextP.innerText = bottomText.value;
    }
    

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

    topText.value = "";
    bottomText.value = ""
    document.querySelector("input[type=file]").value = null;
}

const formButton = document.querySelector(".meme-form button");
formButton.addEventListener('click', function(e) {
    e.preventDefault();
    processImage();
});