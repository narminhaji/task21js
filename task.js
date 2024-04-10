
const sliderImage = document.getElementById("slider-img");
const iconLeft = document.querySelector(".fa-angle-left");
const iconRight = document.querySelector(".fa-angle-right");

fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(data => {
        const images = data.map(p => p.image);
        let i = 0;
        showImage();

        function showImage(){
            sliderImage.src = images[i];
        }
        
        iconRight.addEventListener("click", () => {
            i = i < images.length - 1 ? i + 1 : 0;
            showImage();
        });
        
        iconLeft.addEventListener("click", () => {
            i = i > 0 ? i - 1 : images.length - 1;
            showImage();
        });
    });
