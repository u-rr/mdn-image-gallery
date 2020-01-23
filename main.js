const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const dark = document.querySelector('.dark');

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
        displayedImage.setAttribute('src', image[i]);
        // console.log("hi");
    };
    // newImage.setAttribute('onclick', changeImage());
};



/* Wiring up the Darken/Lighten button */

btn.onclick = function(){
    if(btn.textContent === "Darken"){
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }




};