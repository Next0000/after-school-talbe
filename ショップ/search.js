//ロード画面の表示

window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

function submit() {
  const results = [];
  const inputText = $(this).val();

  if (inputText) {
    $("#list li").each((index, name) => {
      if (name.textContent.indexOf(inputText) !== -1) {
        results.push(name.textContent);
      }
    });

    $("#info").empty();

    $.each(results, (index, name) => {
      $("#info").append("<li>" + name + "</li>");
    });
  }
  location.href = "output.html";
}