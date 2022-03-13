var myhour, myminute, mysecond;

function flipNumber(el, newnumber) {
  var thistop = el.find(".top").clone();
  var thisbottom = el.find(".bottom").clone();
  thistop.addClass("new");
  thisbottom.addClass("new");
  thisbottom.find(".text").text(newnumber);
  el.find(".top").after(thistop);
  el.find(".top.new").append(thisbottom);
  el.addClass("flipping");
  el.find(".top:not(.new").find(".text").text(newnumber);
  setTimeout(function () {
    el.find(".bottom:not(.new)").find(".text").text(newnumber);
  }, 500);
}

function setTime() {
  $(".flipper").removeClass("flipping");
  $(".flipper .new").remove();
  var date = new Date();
  var seconds = date.getSeconds().toString();
  if (seconds.length == 1) {
    seconds = "0" + seconds;
  }
  var minutes = date.getMinutes().toString();
  if (minutes.length == 1) {
    minutes = "0" + minutes;
  }
  var hours = date.getHours().toString();
  if (hours.length == 1) {
    hours = "0" + hours;
  }

  if ($(myhour[0]).text() !== hours) {
    flipNumber($(myhour[0]).closest(".flipper"), hours);
  }
  if ($(myminute[0]).text() !== minutes) {
    flipNumber($(myminute[0]).closest(".flipper"), minutes);
  }
  if ($(mysecond[0]).text() !== seconds) {
    flipNumber($(mysecond[0]).closest(".flipper"), seconds);
  }

  setTimeout(function () {
    setTime();
  }, 500);
}

$(function () {
  myhour = $(".clock .flipper:nth-child(1) div:not(.new) .text");
  myminute = $(".clock .flipper:nth-child(2) div:not(.new) .text");
  mysecond = $(".clock .flipper:nth-child(3) div:not(.new) .text");
  setTime();
});
