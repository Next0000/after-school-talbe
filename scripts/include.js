const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "../../include/header.html", true);
includeHeader.onreadystatechange = function () {
  if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHTML = includeHeader.responseText;
    const header = document.querySelector("#header");
    header.insertAdjacentHTML("afterbegin", headerHTML);
  }
};

const includeHead = new XMLHttpRequest();
includeHead.open("GET", "../../include/head.html", true);
includeHead.onreadystatechange = function () {
  if (includeHead.readyState === 4 && includeHead.status === 200) {
    const headHTML = includeHead.responseText;
    const head = document.querySelector("#head");
    head.insertAdjacentHTML("afterbegin", headHTML);
  }
};

includeHeader.send();
includeHead.send();