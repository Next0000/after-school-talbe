window.addEventListener('scroll', () => {
    //idがkeyvisualの要素を取得
    let elem = document.getElementById('keyvisual');
    //現在のスクロール位置を取得して、10で除算
    let scrollY = window.scrollY/15;
    //上で取得した値と画像幅を加算して、elemの背景サイズに設定
    if( 100 <= (50+scrollY)){
        scrollY = 50;
    }
    elem.style.width = 50 + scrollY + '%';
  });
