const ageLabel = document.getElementsByClassName("ageLabel");

function ageLabelUpdate() {
  var d = new Date();
  if (d.getMonth() > 7 || (d.getMonth() == 7 && d.getDate() >= 18)) {
    ageLabel[0].innerHTML = (d.getFullYear() - 2004).toString();
  } else {
    ageLabel[0].innerHTML = (d.getFullYear() - 2005).toString();
  }
}

window.setInterval(ageLabelUpdate, 1);
