document.addEventListener("DOMContentLoaded", () => {
  var id = null;
  const car = document.getElementById("car");
  const btn = document.getElementById("journeybtn");
  btn.addEventListener("click", moveCar);
});

function moveCar(id) {
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const t3 = document.getElementById("t3");
    const t4 = document.getElementById("t4");
    const t5 = document.getElementById("t5");
    const t6 = document.getElementById("t6");
    const t7 = document.getElementById("t7");
    const t8 = document.getElementById("t8");
    const t9 = document.getElementById("t9");
    const t10 = document.getElementById("t10");
    t1.classList.add('pause');
    t1.style.content = "url(./assets/live_tree.png)";
    t1.classList.remove('dead');
    t1.classList.add('live');
    t2.classList.add('pause');
    t2.style.content = "url(./assets/live_tree.png)";
    t2.classList.remove('dead');
    t2.classList.add('live');
    t3.classList.add('pause');
    t3.style.content = "url(./assets/live_tree.png)";
    t3.classList.remove('dead');
    t3.classList.add('live');
    t4.classList.add('pause');
    t4.style.content = "url(./assets/live_tree.png)";
    t4.classList.remove('dead');
    t4.classList.add('live');
    t5.classList.add('pause');
    t5.style.content = "url(./assets/live_tree.png)";
    t5.classList.remove('dead');
    t5.classList.add('live');
    t6.classList.add('pause');
    t6.style.content = "url(./assets/live_tree.png)";
    t6.classList.remove('dead');
    t6.classList.add('live');
    t7.classList.add('pause');
    t7.style.content = "url(./assets/live_tree.png)";
    t7.classList.remove('dead');
    t7.classList.add('live');
    t8.classList.add('pause');
    t8.style.content = "url(./assets/live_tree.png)";
    t8.classList.remove('dead');
    t8.classList.add('live');
    t9.classList.add('pause');
    t9.style.content = "url(./assets/live_tree.png)";
    t9.classList.remove('dead');
    t9.classList.add('live');
    t10.classList.add('pause');
    t10.style.content = "url(./assets/live_tree.png)";
    t10.classList.remove('dead');
    t10.classList.add('live');
    var pos = 30;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
      if (pos == 1300) {
        clearInterval(id);
      } else {
        pos++;
        car.style.left = pos + "px";
      }
      if (pos == 31) {
         t1.classList.remove('pause');
      }
      if (pos == 141) {
        t2.classList.remove('pause');
     }
     if (pos == 251) {
        t3.classList.remove('pause');
        t1.style.content = "url(./assets/dead_tree.png)";
        t1.classList.remove('live');
        t1.classList.add('dead');
     }
     if (pos == 361) {
        t4.classList.remove('pause');
        t2.style.content = "url(./assets/dead_tree.png)";
        t2.classList.remove('live');
        t2.classList.add('dead');
     }
     if (pos == 470) {
        t5.classList.remove('pause');
        t3.style.content = "url(./assets/dead_tree.png)";
        t3.classList.remove('live');
        t3.classList.add('dead');
     }
     if (pos == 580) {
        t6.classList.remove('pause');
        t4.style.content = "url(./assets/dead_tree.png)";
        t4.classList.remove('live');
        t4.classList.add('dead');
     }
     if (pos == 690) {
        t7.classList.remove('pause');
        t5.style.content = "url(./assets/dead_tree.png)";
        t5.classList.remove('live');
        t5.classList.add('dead');
     }
     if (pos == 800) {
        t8.classList.remove('pause');
        t6.style.content = "url(./assets/dead_tree.png)";
        t6.classList.remove('live');
        t6.classList.add('dead');
     }
     if (pos == 910) {
        t9.classList.remove('pause');
        t7.style.content = "url(./assets/dead_tree.png)";
        t7.classList.remove('live');
        t7.classList.add('dead');
     }
     if (pos == 1020) {
        t10.classList.remove('pause');
        t8.style.content = "url(./assets/dead_tree.png)";
        t8.classList.remove('live');
        t8.classList.add('dead');
     }
     if (pos == 1130) {
        t9.style.content = "url(./assets/dead_tree.png)";
        t9.classList.remove('live');
        t9.classList.add('dead');
     }
     if (pos == 1240) {
        t10.classList.remove('pause');
        t10.style.content = "url(./assets/dead_tree.png)";
        t10.classList.remove('live');
        t10.classList.add('dead');
     }
    }
  }
