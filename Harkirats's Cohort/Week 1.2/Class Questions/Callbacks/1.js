// 1. Create a counter in Javascript (counts down from 30 to 0)
let a = 5;
function print() {
  if (a) {
    console.log(a--);
  } else return clearInterval();
}
setInterval(print, 1 * 1000);
