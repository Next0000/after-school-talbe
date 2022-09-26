//シナリオページに関する処理

const book_number = [];
const msg_number = [];

for (var i = 1; i < 8; ++i) {
    book_number.push(document.getElementById("no-" + i));
    msg_number.push(document.getElementById("no--" + i));
}

document.addEventListener('mouseover', function(event) {
    const touch = event.target.id;//触れたもの
    //console.log(touch);

    for (var i = 0; i < book_number.length; ++i) {
        if(book_number[i].id == touch){
            msg_number[i].classList.toggle('show_msg');

            const title = msg_number[i].firstElementChild;
            title.classList.toggle('show_title');
        }
    }
});

document.addEventListener('mouseout', function(event) {
    const touch2 = event.target.id;//離れたもの
    console.log("touch2");
    for (var i = 0; i < book_number.length; ++i) {
        if(book_number[i].id == touch2){
            msg_number[i].classList.toggle('show_msg');
        }
    }
});
  
  