const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
];
for(let i =0; i <= images.length - 1; i++) {
    image = images;
    // console.log(image[i]);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image[i]);
    thumbBar.appendChild(newImage);

    newImage.onclick = function (){
        console.log("hi");
    };
    // newImage.setAttribute('onclick', changeImage());
};



/* Wiring up the Darken/Lighten button */

