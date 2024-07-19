function parseLrc() {
  return lrc.split("\n").map(function (line, index) {
    var parts = line.split("]");

    return {
      time: parseTime(parts[0].substring(1)) || index / 100,
      word: parts[1],
    };
  });
}

function parseTime(timeStr) {
  var parts = timeStr.split(":");

  return +parts[0] * 60 + +parts[1];
}

var lrcData = parseLrc();

var doms = {
  audio: document.querySelector("audio"),
  ul: document.querySelector(".container ul"),
  container: document.querySelector(".container"),
};

function findActiveIndex() {
  var currentTime = doms.audio.currentTime;
  for (var i = 0; i < lrcData.length; i++) {
    if (currentTime < lrcData[i].time) {
      return i - 1;
    }
  }
  return lrcData.length - 1;
}

function creatLrcElement() {
  var frag = document.createDocumentFragment();
  for (var i = 0; i < lrcData.length; i++) {
    var li = document.createElement("li");
    li.textContent = lrcData[i].word;
    frag.appendChild(li);
  }
  doms.ul.appendChild(frag);
}

creatLrcElement();

var containerHeight = doms.container.clientHeight;
var liHeight = doms.ul.children[0].clientHeight;
var maxOffset = doms.ul.clientHeight - containerHeight;

function setOffset() {
  var index = findActiveIndex();
  var offset = liHeight * index + liHeight / 2 - containerHeight / 2;

  if (offset < 0) {
    offset = 0;
  }

  if (offset > maxOffset) {
    offset = maxOffset;
  }

  doms.ul.style.transform = `translateY(-${offset}px)`;

  var li = doms.ul.querySelector(".active");

  if (li) {
    li.classList.remove("active");
  }

  var activeLi = doms.ul.children[index];
  if (!!activeLi) {
    activeLi.classList.add("active");
  }
}

doms.audio.addEventListener("timeupdate", setOffset);
