function validateForm() {
  let name = document.forms["studentForm"]["name"].value.trim();
  let email = document.forms["studentForm"]["email"].value.trim();
  let password = document.forms["studentForm"]["password"].value.trim();

if (name === "") {
  alert("Name must be filled out");
  return false;
}

if (!/^[A-Za-z ]+$/.test(name)) {
  alert("Name should contain only letters");
  return false;
}

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  return true;
}
