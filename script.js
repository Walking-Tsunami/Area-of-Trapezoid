document.getElementById("Btn").addEventListener("click", areaCalc);

let cm = document.getElementById("cm").innerHTML;
let m = document.getElementById("m").innerHTML;
let f = document.getElementById("f").innerHTML;
let inEL = document.getElementById("in").innerHTML;
let selection = document.getElementById("areaUnit");

let top1 = document.getElementById("topIn");
let bottom = document.getElementById("bottomIn");
let height = document.getElementById("heightIn");
let Img = document.getElementById("image");

function areaCalc() {
  let num1 = +top1.value;
  let num2 = +bottom.value;
  let num3 = +height.value;

  // input
  let calculation = ((num1 + num2) / 2) * num3;
  // process
  calculation = calculation.toFixed(2);

  let unit = selection.value;
  // Output
  let output = document.getElementById("output");
  output.innerHTML = calculation + unit;

  top1.value = "";
  bottom.value = "";
  height.value = "";

  output.style.border = "2px solid green";
  Img.src = "img/CHeckmark goofy.jpg";

  Img.style.width = "80px";
  Img.style.marginLeft = "20px";
}
