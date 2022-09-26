let flag = 0;
let imgList = {image1:"logo1.png", image2:"logo2.png", image3:"logo3.png", image4:"ロゴ４.png"};
let num = 0;
let imgPath;
let setImg = (function(){
    return function() {
        num++;
        imgPath = "../images/logo/"+imgList['image'+num];

        if(flag == 0){
            document.querySelector('#test2').src = imgPath;
            document.querySelector('#test1').className = "fadeout";
            document.querySelector('#test2').className = "fadein";
        }
        else{
            document.querySelector('#test1').src = imgPath;
            document.querySelector('#test1').className = "fadein";
            document.querySelector('#test2').className = "fadeout";
        }
        
        
        if(flag == 0){
            flag = 1;
        }
        else{
            flag = 0;
        }

        if (num == 4) {
            num = 0;
        } 
    }
})();

setInterval(function(){
    setImg();
}, 7000)



var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 100,
    slidesPerGroup: 3,
	slidesPerView: 3,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});