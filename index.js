const submitBtn = document.getElementById("submitBtn");
const firstNameInputEle = document.getElementById("firstName");
const lastNameInputEle = document.getElementById("lastName");
const emailInputEle = document.getElementById("email");
const passwordInputEle = document.getElementById("password");
const inputsArray = [
  firstNameInputEle,
  lastNameInputEle,
  emailInputEle,
  passwordInputEle,
];

const checkInputLength = (str) => {
  const trimmedInput = str.trim();
  if (trimmedInput.length > 0) {
    return true;
  } else {
    return false;
  }
};

const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const checkEmailInput = (email) => {
  if (emailReg.test(email)) {
    return true;
  } else {
    return false;
  }
};

const submitHandler = (event) => {
  event.preventDefault();
  let hasError = false;

  inputsArray.forEach((inputEle) => {
    const userInput = inputEle.value;
    const inputWrapperEle = document.getElementById(`${inputEle.id}Wrapper`);
    const inputMessage = document.getElementById(`${inputEle.id}-message`);
    let checkResult;

    if (inputEle !== emailInputEle) {
      checkResult = checkInputLength(userInput);
    } else {
      checkResult = checkEmailInput(userInput);
    }

    if (!checkResult) {
      inputWrapperEle.classList.add("inputWrapper-error");
      inputMessage.style.visibility = "visible";

      hasError = true;
    } else {
      inputWrapperEle.classList.remove("inputWrapper-error");
      inputMessage.style.visibility = "hidden";
    }
  });

  if (hasError) {
    return;
  } else {
    inputsArray.forEach((inputEle) => (inputEle.value = ""));
  }
};

submitBtn.addEventListener("click", submitHandler);
