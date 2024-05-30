const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const underInput = document.querySelector('.underInput')
const firstNameUnderInput = document.querySelector('.firstName ~ .under .underInput')
const lastNameUnderInput = document.querySelector('.lastName ~ .under .underInput')
const emailUnderInput = document.querySelector('.email + .under .underInput')
const passwordUnderInput = document.querySelector('.password ~ .under .underInput')
const emailunder = document.querySelector('.email ~ .under')
const lastNameunder = document.querySelector('.lastName ~ .under')
const firstNameunder = document.querySelector('.firstName ~ .under')
const passwordunder = document.querySelector('.password ~ .under')
const under = document.querySelector('.under')
const firstNameErrorIcon = document.querySelector('.firstName + fWarning');
const lWarning = document.querySelector('.lWarning')
const lastNameErrorIcon = document.querySelector('.lastName + lWarning');
const eWarning = document.querySelector('.eWarning')
const emailErrorIcon = document.querySelector('.email + eWarning');
const pWarning = document.querySelector('.pWarning')
const passwordErrorIcon = document.querySelector('.password + pWarning');
const fWarning = document.querySelector('.fWarning')

// console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    firstName.style.border = "2.5px solid var(--red)"
    firstName.style.opacity = "0.7"
    firstNameUnderInput.textContent = "First Name cannot be empty"
    firstNameunder.style.display = "flex"
    firstNameUnderInput.style.color = "var(--red)"
    firstNameUnderInput.style.fontSize = "12px"
    firstNameUnderInput.style.opacity = "0.8"
    under.style.padding = "4px 0 20px 0px"
    firstName.style.margin = "0 0 0px 0px"
    firstNameunder.style.justifyContent = "right"
    firstNameunder.style.width = "100%"
    firstName.placeholder = ''
    fWarning.style.display = 'block';

  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    lastName.style.border = "2.5px solid var(--red)"
    lastName.style.opacity = "0.7"
    lastNameUnderInput.textContent = "Last Name cannot be empty"
    lastNameunder.style.display = "flex"
    lastNameUnderInput.style.color = "var(--red)"
    lastNameUnderInput.style.fontSize = "12px"
    lastNameUnderInput.style.opacity = "0.8"
    lastNameunder.style.padding = "4px 0 20px 0px"
    lastName.style.margin = "0 0 0px 0px"
    lastNameunder.style.justifyContent = "right"
    lastNameunder.style.width = "100%"
    lastName.placeholder = ''
    lWarning.style.display = 'block';
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    email.style.border = "2.5px solid var(--red)"
    email.style.opacity = "0.7"
    emailUnderInput.textContent = "Looks like this is not an email"
    emailunder.style.display = "flex"
    emailUnderInput.style.color = "var(--red)"
    emailUnderInput.style.fontSize = "12px"
    emailUnderInput.style.opacity = "0.8"
    emailunder.style.padding = "4px 0 20px 0px"
    email.style.margin = "0 0 0px 0px"
    emailunder.style.justifyContent = "right"
    emailunder.style.width = "100%"
    email.placeholder = 'email@example/com'
    eWarning.style.display = 'block';

      email.style.setProperty( "--placeholder-color", "var(--red)");
      console.log(email.getAttribute("placeholder") )

  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    password.placeholder = ''
    password.style.border = "2.5px solid var(--red)"
    password.style.opacity = "0.7"
    passwordUnderInput.textContent = "Password cannot be empty"
    passwordunder.style.display = "flex"
    passwordUnderInput.style.color = "var(--red)"
    passwordUnderInput.style.fontSize = "12px"
    passwordUnderInput.style.opacity = "0.8"
    passwordunder.style.padding = "4px 0 20px 0px"
    password.style.margin = "0 0 0px 0px"
    passwordunder.style.justifyContent = "right"
    passwordunder.style.width = "100%"
    password.placeholder = ''
    showPassword.src = './images/exclamation-circle-solid.svg';
    showPassword.style.bottom = "3.5rem"

  } else {
    password.classList.remove('error');
    password.placeholder = ''
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const showPassword = document.querySelector('.showPassword')

let isPasswordVisible = false

showPassword.addEventListener('click', ()=>{
  if(password.type === "password"){

    password.type = "text";
    showPassword.src= "./images/eye-solid.svg"
  }else {
    password.type = 'password';
    showPassword.src = "./images/eye-slash-solid.svg"
  }
});
