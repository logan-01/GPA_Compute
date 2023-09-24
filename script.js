function result() {
  let num1 = parseFloat(document.querySelector(".num-1").value);
  let num2 = parseFloat(document.querySelector(".num-2").value);
  let num3 = parseFloat(document.querySelector(".num-3").value);
  let num4 = parseFloat(document.querySelector(".num-4").value);

  if (num1 > 5 || num2 > 5 || num3 > 5 || num4 > 5) {
    alert("Enter a valid GPA (1.0 - 5.0)");
  } else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Input field is empty");
  } else {
    let gpa = (num1 + num2 + num3 + num4) / 4;
    alert("Your Final Grade Point Average is " + gpa);
  }
}

function clearscr() {
  let num1 = document.querySelector(".num-1");
  let num2 = document.querySelector(".num-2");
  let num3 = document.querySelector(".num-3");
  let num4 = document.querySelector(".num-4");

  num1.value = "";
  num2.value = "";
  num3.value = "";
  num4.value = "";
}
