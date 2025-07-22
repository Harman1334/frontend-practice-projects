function displayOperators() {
  let num = parseInt(document.getElementById("number").value);
  let op = document.getElementById("operator").value;
  let output = document.getElementById("output");

  output.innerHTML = ""; // Clear previous icons

  // Choose image based on operator
  let imgSrc = "";
  if (op === "+") imgSrc = "images/plus.png";
  if (op === "-") imgSrc = "images/minus.png";
  if (op === "*") imgSrc = "images/multi.png";
  if (op === "/") imgSrc = "images/divide.png";

  for (let i = 0; i < num; i++) {
    let img = document.createElement("img");
    img.src = imgSrc;
    output.appendChild(img);
  }
}
