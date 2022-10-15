document.addEventListener("DOMContentLoaded", () => {
  var id = null;
  const car = document.getElementById("car");
  const btn = document.getElementById("journeybtn");
  btn.onclick = moveCar();
  function moveCar() {
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 9950) {
        clearInterval(id);
      } else {
        pos++;
        car.style.left = pos + "px";
      }
    }
  }
});
