const all = document.getElementsByClassName("no");
let count = 0;

window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    console.log(all.length);
}


let setImg = (function(){
    return function() {
        all[count].classList.add('active');
        count++;
    }
})();


const intervalId = setInterval(() =>{
    setImg();
    if(count >= all.length){
      clearInterval(intervalId);
    }}, 200);