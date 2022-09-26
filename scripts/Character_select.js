const even = [];//偶数
const odd = [];//奇数
const all = document.querySelectorAll(`[id^='no']`);
window.onload = function() {
    for (var i = 1; i < all.length; ++i) {
        if(i % 2 == 0){
            even.push(document.getElementById("no-" + i));
        }
        else{
            odd.push(document.getElementById("no-" + i));
        }
    }

    var scrollAnimationElm = document.querySelectorAll('.fade2');
    for(var i = 0; i < scrollAnimationElm.length; i++) {
        scrollAnimationElm[i].classList.add('showw');
      }
}
  
  
  
//名前一覧から画像へのアクセス
document.addEventListener('mouseover', function(event) {
    const touch = event.target.id;//触れたもの
    //console.log(touch);

    for (var i = 0; i < odd.length; ++i) {
        if(odd[i].id == touch){
            for (var l = 0; l < even.length; ++l) {
                if(l != i){
                    even[l].classList.toggle('blur');
                }
            }
        }
    }
});

document.addEventListener('mouseout', function(event) {
    const touch2 = event.target.id;//離れたもの
    for (var i = 0; i < odd.length; ++i) {
        if(odd[i].id == touch2){
            for (var l = 0; l < even.length; ++l) {
                if(l != i){
                    even[l].classList.toggle('blur');
                }
            }
        }
    }
});
  
  