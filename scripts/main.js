//ロード画面の表示

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  const op = document.getElementById('opRoll');
  op.classList.add('opRoll');

  const logo = document.getElementById('titlemark');
  logo.classList.add('move2');

  const texts = document.getElementById('title');
  texts.classList.add('move1');

  const texts2 = document.getElementById('title2');
  texts2.classList.add('move1');

  const texts3 = document.getElementById('title3');
  texts3.classList.add('move1');

  const texts4 = document.getElementById('title4');
  texts4.classList.add('move1');

}

