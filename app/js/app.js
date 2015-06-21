function domloaded(){
    //include in js to prevent concatenating files to not work properly
    "use strict";
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var j = 0, pixSize = 2, pixCount = 50;
    for(var r = 0; r < pixCount; r++) {
      for(var i = 0; i < pixCount; i++) {
        if(i % pixCount === 0){
          j++;
        }
        ctx.fillStyle = "hsl(' + 360 * Math.random() + ', 50%, 50%)";
        ctx.fillRect(i * pixSize, j * pixSize, 20, 20);
        }
    }
}
document.addEventListener("DOMContentLoaded", domloaded, false);
setInterval(domloaded, 150);
