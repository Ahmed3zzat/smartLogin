var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword");
var userBtn = document.getElementsByTagName("button")[0];
var signupLink = document.querySelector(".myLink");
var head = document.getElementsByClassName("show")[0];
var vailidatePara = document.querySelector(".vaildate");
var lik = document.querySelector(".myLink");

var myArr = [];
var regxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
var regxPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

if (localStorage.getItem("dataProject") != null) {
  myArr = JSON.parse(localStorage.getItem("dataProject"));
  // display(myArr);
}

userBtn.addEventListener("click", function () {
  if (isValidEmailAndPassword()) {
    reset();
    window.location.href = "home.html";
  }
});

// function display(arr) {
//   var myText = "";
//   for (var i = 0; i < arr.length; i++) {
//     myText += `<div>
//               <p>${arr[i].userEmailOBJ}</p>
//               <p>${arr[i].userPasswordOBJ}</p>
//           </div>`;
//   }
//   head.innerHTML = myText;
// }

function reset() {
  userEmail.value = null;
  userPassword.value = null;
}

function isValidEmailAndPassword() {
  for (var i = 0; i < myArr.length; i++) {
    if (
      userEmail.value === myArr[i].userEmailOBJ &&
      userPassword.value === myArr[i].userPasswordOBJ
    ) {
      vailidatePara.innerHTML = "Success Login";
      vailidatePara.classList.replace("d-none", "d-block");
      vailidatePara.classList.add("text-success");
      vailidatePara.classList.remove("text-danger");
      return true;
    } else if (userEmail.value !== myArr[i].userEmailOBJ) {
      vailidatePara.innerHTML = "Email Not Valid";
      vailidatePara.classList.replace("d-none", "d-block");
      vailidatePara.classList.remove("text-success");
      vailidatePara.classList.add("text-danger");
      return false;
    } else if (userPassword.value !== myArr[i].userPasswordOBJ) {
      vailidatePara.innerHTML = "Password Not Vaid";
      vailidatePara.classList.replace("d-none", "d-block");
      vailidatePara.classList.remove("text-success");
      vailidatePara.classList.add("text-danger");
      return false;
    } else if (
      (userEmail.value !== myArr[i].userEmailOBJ) &
      (userPassword.value !== myArr[i].userPasswordOBJ)
    ) {
      vailidatePara.innerHTML = "Please, check Your email & password";
      vailidatePara.classList.replace("d-none", "d-block");
      vailidatePara.classList.remove("text-success");
      vailidatePara.classList.add("text-danger");
      return false;
    }
  }
}

signupLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "signup.html";
});
