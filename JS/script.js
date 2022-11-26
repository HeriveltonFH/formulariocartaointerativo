const cardNumber = document.getElementById("numberCard");
const numberInp = document.getElementById("numberBox");
const nameInp = document.getElementById("nameBox");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const monthInp = document.getElementById("monthBox");
const yearInp = document.getElementById("yearBox");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("cardCvc");
const submitBtn = document.getElementById("btn");
const compeleted = document.querySelector("thankHidden");
const form = document.querySelector("form");

function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
    e.preventDefault();
    if (!nameInp.value) {
      nameInp.classList.add("error");
      nameInp.parentElement.classList.add("errorMessage")
    } else {
      nameInp.classList.remove("error");
      nameInp.parentElement.classList.remove("errorMessage");
    }
    if (!numberInp.value) {
      numberInp.classList.add("error")
      numberInp.parentElement.classList.add("errorMessage");
    } else if (numberInp.value.length < 16) {
        numberInp.classList.add("error")
    } else {
      numberInp.classList.remove("error");
      numberInp.parentElement.classList.remove("errorMessage");
    }
    if (!monthInp.value) {
      monthInp.classList.add("error")
      monthInp.parentElement.classList.add("errorMessage");
    } else {
      monthInp.classList.remove("error");
      monthInp.parentElement.classList.remove("errorMessage");
    }
    if (!yearInp.value) {
      yearInp.classList.add("error")
      yearInp.parentElement.classList.add("errorMessage");
    } else {
      yearInp.classList.remove("error");
      yearInp.parentElement.classList.remove("errorMessage");
    }
    if (!cvcInp.value) {
      cvcInp.classList.add("error")
      cvcInp.parentElement.classList.add("errorMessage");
    } else {
      cvcInp.classList.remove("error");
      cvcInp.parentElement.classList.remove("errorMessage");
    }
    if (
      nameInp.value &&
      numberInp.value &&
      monthInp.value &&
      yearInp.value &&
      cvcInp.value &&
      numberInp.value.length == 16
    ) {
      completed.classList.remove("thankHidden");
      form.classList.add("thankHidden");
    }
  
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);