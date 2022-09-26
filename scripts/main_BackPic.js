let imgList = {image1:"yami.jpg", image2:"numa.jpg", image3:"yuki.jpg", image4:"daiya.jpg"};
let num = 0;
let imgPath;

window.onload = function() {
    num = 1 + Math.floor( Math.random() * 4 );
    imgPath = "images/backpic/"+imgList['image'+num];
    document.querySelector('#pic2').src = imgPath;

    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}