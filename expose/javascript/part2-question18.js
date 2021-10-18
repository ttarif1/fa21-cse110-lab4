function timeinSec() {
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}
setInterval(timeinSec, 1000);