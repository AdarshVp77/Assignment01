function validation() {
  let emails = document.getElementById("emails").value;
  let pass = document.getElementById("pass").value;
  let emailvalidation = document.getElementById("emailvalidation");
  let passwordStrength = document.getElementById("passwordStrength");
  let phone = document.getElementById("phone").value;
  let phonevalid = document.getElementById("phonevalid");

  // Email Validation

  let emailValidation =
    /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2})?$/;

  if (!emailValidation.test(emails)) {
    emailvalidation.innerHTML = "⚠️Please enter a valid email address.";
    emailvalidation.style.color = "red";
    return false;
  }
  if (emailValidation.test(emails)) {
    emailvalidation.innerHTML = "✅Valid email address.";
    emailvalidation.style.color = "green";
  }

  // Phone Validation

  let phoneCheck = /^([0-9]{3}[-. ]){2}([0-9]{4})$/;
  let phoneCheck1 = /^[0-9]{10}$/;

  if (!phoneCheck.test(phone) && !phoneCheck1.test(phone)) {
    phonevalid.innerHTML = "⚠️Please enter a valid phone number.";
    phonevalid.style.color = "red";
    return false;
  } else {
    phonevalid.innerHTML = "✅Valid phone number.";
    phonevalid.style.color = "green";
  }

  // Password Validation

  let strongPasswordCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
  let mediumPasswordCheck = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{2,}$/;
  let mediumPasswordCheck1 = /^(?=.*[A-Z])(?=.*[0-9])[A-Z0-9]{2,}$/;
  let mediumPasswordCheck2 = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{2,}$/;
  let poorPasswordCheck = /^(?=.*[a-z])[a-z]{1,}$/;
  let poorPasswordCheck1 = /^(?=.*[A-Z])[A-Z]{1,}$/;
  let poorPasswordCheck2 = /^(?=.*[0-9])[0-9]{1,}$/;

  if (strongPasswordCheck.test(pass)) {
    passwordStrength.innerHTML = "✅High Strength. Secure password.";
    passwordStrength.style.color = "green";
    return true;
  }
  if (mediumPasswordCheck.test(pass)) {
    passwordStrength.innerHTML =
      "🔶Medium Strength. Please enter a captial letter.";
    passwordStrength.style.color = "orange";
    return false;
  }
  if (mediumPasswordCheck1.test(pass)) {
    passwordStrength.innerHTML =
      "🔶Medium Strength. Please enter a small letter.";
    passwordStrength.style.color = "orange";
    return false;
  }
  if (mediumPasswordCheck2.test(pass)) {
    passwordStrength.innerHTML = "🔶Medium Strength. Please enter a number.";
    passwordStrength.style.color = "orange";
    return false;
  }
  if (poorPasswordCheck.test(pass)) {
    passwordStrength.innerHTML =
      "⚠️Poor Strength. Please enter a captial letter and a number.";
    passwordStrength.style.color = "red";
    return false;
  }
  if (poorPasswordCheck1.test(pass)) {
    passwordStrength.innerHTML =
      "⚠️Poor Strength. Please enter a small letter and a number.";
    passwordStrength.style.color = "red";
    return false;
  }
  if (poorPasswordCheck2.test(pass)) {
    passwordStrength.innerHTML =
      "⚠️Poor Strength. Please enter a captial letter and a small letter.";
    passwordStrength.style.color = "red";
    return false;
  }
  if (pass.length < 8 && pass.length > 0) {
    passwordStrength.innerHTML =
      "⚠️Password should contain atleast 8 characters.";
    passwordStrength.style.color = "red";
    return false;
  }
  if (pass.length == 0) {
    passwordStrength.innerHTML = "⚠️Required Field.";
    passwordStrength.style.color = "red";
    return false;
  } else {
    passwordStrength.innerHTML =
      "⚠️Please enter a valid password. No special characters or spaces are allowed.";
    passwordStrength.style.color = "red";
    return false;
  }
}
