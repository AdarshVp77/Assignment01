function validate() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let emailvalid = document.getElementById("emailvalid");
  let passStrength = document.getElementById("passStrength");

  console.log(email);

  // Email Validation

  let emailCheck =
    /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2})?$/;

  if (!emailCheck.test(email)) {
    emailvalid.innerHTML = "⚠️Please enter a valid email address.";
    emailvalid.style.color = "red";
    return false;
  }
  if (emailCheck.test(email)) {
    emailvalid.innerHTML = "✅Valid email address.";
    emailvalid.style.color = "green";
  }

  // Password Validation

  let strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/;
  let mediumPasswordRegex = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{2,}$/;
  let mediumPasswordRegex1 = /^(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]{2,}$/;
  let mediumPasswordRegex2 = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{2,}$/;
  let poorPasswordRegex = /^(?=.*[a-z])[a-z]{1,}$/;
  let poorPasswordRegex1 = /^(?=.*[A-Z])[A-Z]{1,}$/;
  let poorPasswordRegex2 = /^(?=.*[0-9])[0-9]{1,}$/;
  if (strongPasswordRegex.test(password)) {
    passStrength.innerHTML = "✅High Strength. Secure password.";
    passStrength.style.color = "green";
    return true;
  }
  if (mediumPasswordRegex.test(password)) {
    passStrength.innerHTML =
      "🔶Medium Strength. Please enter a captial letter.";
    passStrength.style.color = "orange";
    return false;
  }
  if (mediumPasswordRegex1.test(password)) {
    passStrength.innerHTML = "🔶Medium Strength. Please enter a small letter.";
    passStrength.style.color = "orange";
    return false;
  }
  if (mediumPasswordRegex2.test(password)) {
    passStrength.innerHTML = "🔶Medium Strength. Please enter a number.";
    passStrength.style.color = "orange";
    return false;
  }
  if (poorPasswordRegex.test(password)) {
    passStrength.innerHTML =
      "⚠️Poor Strength. Please enter a captial letter and a number.";
    passStrength.style.color = "red";
    return false;
  }
  if (poorPasswordRegex1.test(password)) {
    passStrength.innerHTML =
      "⚠️Poor Strength. Please enter a small letter and a number.";
    passStrength.style.color = "red";
    return false;
  }
  if (poorPasswordRegex2.test(password)) {
    passStrength.innerHTML =
      "⚠️Poor Strength. Please enter a captial letter and a small letter.";
    passStrength.style.color = "red";
    return false;
  }
  if (password.length < 8 && password.length > 0) {
    passStrength.innerHTML = "⚠️Password should contain atleast 8 characters.";
    passStrength.style.color = "red";
    return false;
  }
  if (password.length == 0) {
    passStrength.innerHTML = "⚠️Required Field.";
    passStrength.style.color = "red";
    return false;
  } else {
    passStrength.innerHTML =
      "⚠️Please enter a valid password. No special characters or spaces allowed.";
    passStrength.style.color = "red";
    return false;
  }
}
