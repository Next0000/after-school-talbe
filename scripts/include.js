const includeHeader = new XMLHttpRequest();
includeHeader.open("GET", "/after-school-talbe/include/header.html", true);
includeHeader.onreadystatechange = function () {
  if (includeHeader.readyState === 4 && includeHeader.status === 200) {
    const headerHTML = includeHeader.responseText;
    const header = document.querySelector("#header");
    header.insertAdjacentHTML("afterbegin", headerHTML);
  }
};

const includefooter = new XMLHttpRequest();
includefooter.open("GET", "/after-school-talbe/include/footer.html", true);
includefooter.onreadystatechange = function () {
  if (includefooter.readyState === 4 && includefooter.status === 200) {
    const footerHTML = includefooter.responseText;
    const footer = document.querySelector("#footer");
    footer.insertAdjacentHTML("afterbegin", footerHTML);
  }
};

const includeHead = new XMLHttpRequest();
includeHead.open("GET", "/after-school-talbe/include/head.html", true);
includeHead.onreadystatechange = function () {
  if (includeHead.readyState === 4 && includeHead.status === 200) {
    const headHTML = includeHead.responseText;
    const head = document.querySelector("#head");
    head.insertAdjacentHTML("afterbegin", headHTML);
  }
};

includeHeader.send();
includefooter.send();
includeHead.send();