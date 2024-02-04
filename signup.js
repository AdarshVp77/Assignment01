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

  // let phoneCheck1 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  // let phoneCheck2 = /^[0-9]{3}.[0-9]{3}.[0-9]{4}$/;
  // let phoneCheck3 = /^[0-9]{3} [0-9]{3} [0-9]{4}$/;

  // if (
  //   !phoneCheck1.test(phone) &&
  //   !phoneCheck2.test(phone) &&
  //   !phoneCheck3.test(phone) &&
  //   !phoneCheck4.test(phone)
  // ) {
  //   phonevalid.innerHTML = "⚠️Please enter a valid phone number";
  //   phonevalid.style.color = "red";
  //   return false;
  // } else {
  //   phonevalid.innerHTML = "✅Valid phone number";
  //   phonevalid.style.color = "green";
  // }

  // Password Validation

  let strongPasswordCheck =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
  let mediumPasswordCheck = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{2,}$/;
  let poorPasswordCheck = /^(?=.*[a-z])[a-z]{1,}$/;

  if (strongPasswordCheck.test(pass)) {
    passwordStrength.innerHTML = "✅High Strength. Secure password.";
    passwordStrength.style.color = "green";
  }
  if (mediumPasswordCheck.test(pass)) {
    passwordStrength.innerHTML =
      "🔶Medium Strength. Please enter a captial letter.";
    passwordStrength.style.color = "orange";
    return false;
  }
  if (poorPasswordCheck.test(pass)) {
    passwordStrength.innerHTML =
      "⚠️Poor Strength. Please enter a captial letter and a number.";
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
  }
}
