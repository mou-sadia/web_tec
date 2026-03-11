console.log("JS Connected");

let wrongCount = 0;

function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let isValid = true;
  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("passErr").innerHTML = "";

  if (!email.includes("@")) {
    document.getElementById("emailErr").innerHTML =
      "Email must contain @ symbol";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passErr").innerHTML =
      "Password must be at least 6 characters";
    isValid = false;
  }

  else if (!password.includes("#")) {
    document.getElementById("passErr").innerHTML =
      "Password must contain # symbol";
    isValid = false;
  }

  if (!isValid) {
    wrongCount++;
    document.getElementById("wrongCount").innerHTML =
      "Wrong Submission Count: " + wrongCount;
    return false;
  }

  alert("Login Successful!");
  return true;
}