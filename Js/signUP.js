var userName = document.getElementById("myName");
var userEmail = document.getElementById("myEmail");
var userPassword = document.getElementById("myPassword");
var userBtn = document.getElementsByTagName("button")[0];
var vailidatePara = document.querySelector(".vaildate");
var head = document.getElementsByClassName("show")[0];

// var signupLink = document.querySelector(".myLink");
// var lik = document.querySelector(".myLink");

var regxName = /^[A-z].{3,}$/;
var regxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
var regxPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

var myArr = [];

if (localStorage.getItem("dataProject") != null) {
  myArr = JSON.parse(localStorage.getItem("dataProject"));
  //   display(myArr);
}

userBtn.addEventListener("click", function () {
  if (validateEmail()) {
    if (
      isValid(userName, regxName) &&
      isValid(userEmail, regxEmail) &&
      isValid(userPassword, regxPass)
    ) {
      var myData = {
        userNameOBJ: userName.value,
        userEmailOBJ: userEmail.value,
        userPasswordOBJ: userPassword.value,
      };
      myArr.push(myData);
      localStorage.setItem("dataProject", JSON.stringify(myArr));
      //   display(myArr);
    }
  }
});

function validateEmail() {
  for (var i = 0; i < myArr.length; i++) {
    if (userEmail.value === myArr[i].userEmailOBJ) {
      vailidatePara.innerHTML = "Email is already";
      return false;
    }
  }
  return true;
}

function isValid(myInput, rgx) {
  if (rgx.test(myInput.value)) {
    vailidatePara.innerHTML = "Success";
    vailidatePara.classList.replace("d-none", "d-block");
    vailidatePara.classList.add("text-success");
    vailidatePara.classList.remove("text-danger");
    return true;
  } else {
    vailidatePara.innerHTML = "All inputs is required";
    vailidatePara.classList.replace("d-none", "d-block");
    vailidatePara.classList.remove("text-success");
    vailidatePara.classList.add("text-danger");
    return false;
  }
}

// function display(arr) {
//   var myText = "";
//   for (var i = 0; i < arr.length; i++) {
//     myText += `<div>
//               <p>${arr[i].userNameOBJ}</p>
//               <p>${arr[i].userEmailOBJ}</p>
//               <p>${arr[i].userPasswordOBJ}</p>
//           </div>`;
//   }
//   head.innerHTML = myText;
// }

// localStorage.clear();
