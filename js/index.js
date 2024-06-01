"use strict";
let maxBack = 8;
let max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let ratio = (document.body.scrollTop || document.documentElement.scrollTop) / max;
let ratioN = Math.floor(ratio * (maxBack));
let maxBack2 = 7;
let backEl = document.body.querySelector("div#back").children;
let backElJml = backEl.length;
let backAr = [];
let ctr = 0;
function update() {
    backAr.forEach((item, idx) => {
        if (idx != ratioN) {
            let o = parseFloat(item.style.opacity);
            if (o > 0) {
                o -= .005;
                item.style.opacity = o + '';
                // console.log("turun");
                // console.log(item);
            }
        }
        else if (idx == ratioN) {
            let o = parseFloat(item.style.opacity);
            if (o < 1) {
                o += .005;
                item.style.opacity = o + '';
                // console.log("naik");
                // console.log(item);
                // console.log(o);
            }
        }
        else {
            throw Error("");
        }
    });
    // ctr++;
    if (ctr < 10) {
        window.requestAnimationFrame(update);
    }
}
function updateRatio() {
    ratio = (document.body.scrollTop || document.documentElement.scrollTop) / max;
    ratioN = Math.floor(ratio * (maxBack));
    if (ratioN > maxBack2)
        ratioN = maxBack2;
}
updateRatio();
for (let i = 0; i < backElJml; i++) {
    let item = backEl.item(i);
    item.classList.add(item.getAttribute("back"));
    backAr.push(item);
    item.style.opacity = '0';
    item.style.left = '0px';
    item.style.top = '0px';
    item.style.right = '0px';
    item.style.bottom = '0px';
    if (i == 0) {
        item.style.opacity = '0';
    }
    console.log(i);
}
// backAr[0].style.opacity = '1';
// console.log(backAr[0]);
// console.log(backAr[0].style.opacity);
// console.log("ratio n " + ratioN);
// console.log(backAr);
window.onscroll = () => {
    updateRatio();
    console.log(ratioN);
};
window.requestAnimationFrame(update);
