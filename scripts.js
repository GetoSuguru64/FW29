const gifImages = [
    'FW_pics/top_pics.gif',  
    'FW_pics/chara.gif', 
    'FW_pics/g1op.gif', 
    'FW_pics/mega2.gif'  
];

const fullWidthImage = document.querySelector('.full-width-image');
let currentIndex = 0;

function changeImage() {
    fullWidthImage.style.backgroundImage = `url('${gifImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % gifImages.length;
}

setInterval(changeImage, 4000);
changeImage();
