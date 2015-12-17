var jade = require("../jade/index.jade")();
require("../scss/core.scss");
require("jquery");
require("foundation-sites");
document.body.innerHTML = jade;
console.log(jade);
var txt = require("./_anim.js") + "le";

