function domloaded(){

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var j = 0, pixSize = 2, pixCount = 50;
    for(let r = 0; r < pixCount; r++) {
      for(let i = 0; i < pixCount; i++) {
        if(i % pixCount === 0){
          j++;
        }
        //random color function
        ctx.fillStyle = "hsl(" + 360 * Math.random() + ", 50%, 50%)";
        ctx.fillRect(i * pixSize, j * pixSize, 20, 20);
        }
    }
}
setInterval(domloaded, 150);


