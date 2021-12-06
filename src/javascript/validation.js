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
function checkforAge() {
  if (document.getElementById("age").value < 18) {
    alert("You should be over 18 to register");
    document.getElementById("age").style.borderColor = "red";
    return false;
  }
}
