const images =[
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg"
];

const todayImage = images[Math.floor(Math.random()*images.length)];



function init(){
    const bgImg = document.createElement("img");
    bgImg.src = todayImage;
    bgImg.id = "background";

    document.body.appendChild(bgImg);
}

init();