/*const validateRegistrationForm = evt => {
    evt.preventDefault();

    // Get the error message divs
    const ageError = document.getElementById('register-error-age')
    const passwordError = document.getElementById('register-error-password')

    // Ensure that all new users are above 18 years old
    const ageInput = document.getElementById('age')
    if (ageInput.value < 18) {
        ageError.innerText = 'Only users above 18 years old are allowed to register!'
        return
    }

    // Redirect to the homepage
    window.location.href.replace('http://127.0.0.1:5501/src/html/index.html')
}*/
function validationForm() {
  let first_name = document.getElementById("first_name").value;
  if (first_name == "" || !isNaN(first_name)) {
    alert("Fill in the form correctly");
    document.getElementById("check-first-name").innerHTML = "Enter your Name using latin characters";
    document.getElementById("first_name").style.borderColor = "red";
    return false;
  }
  if (document.getElementById("age").value < 18) {
    alert("Fill in the form correctly");
    document.getElementById("check-age").innerHTML = "Your age should be over 17";
    document.getElementById("age").style.borderColor = "red";
    return false;
  }
}
