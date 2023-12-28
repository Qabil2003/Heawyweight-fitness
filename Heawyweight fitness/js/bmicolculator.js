document.getElementById("bmiLink").addEventListener("click", function () {
  document.getElementById("bmiCalculator").style.display = "block";
});

function calculateBMI() {
  let weight = document.getElementById("kilo").value;
  let height = document.getElementById("boy").value;

  if (weight === "" || height === "") {
    alert("Xahiş olunur kilonuzu və boyunuzu daxil edin");
    return;
  }

  var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

  displayResult(bmi);
}

function displayResult(bmi) {
  let resultElement = document.getElementById("result");
  resultElement.innerHTML = "Sizin BMI: " + bmi;

  if (bmi < 18.5) {
    resultElement.innerHTML += "<br>Normalın altında";
  } else if (bmi < 24.9) {
    resultElement.innerHTML += "<br>Normal";
  } else if (bmi < 29.9) {
    resultElement.innerHTML += "<br>Normaldan artıq";
  } else {
    resultElement.innerHTML += "<br>Obez";
  }
}
