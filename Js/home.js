var userName = document.querySelector(".nameWelcom");
var parentElement = document.querySelector(".box-container");
var childParentElement = document.querySelector(".box-container .image-item");
var childParentElementText = document.querySelector(
  ".box-container .text-item p"
);
var closeButton = document.querySelector("#closeBtn");
var myArr = [];

if (localStorage.getItem("dataProject") != null) {
  myArr = JSON.parse(localStorage.getItem("dataProject"));
  userName.innerHTML = myArr[0].userNameOBJ;
}

// get rowCLASS
let myParentDiv = document.querySelector(".row");
// console.log(myParentDiv)

// API
async function getPizza() {
  let arr = [];
  let respose = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pizza",
    { method: "GET" }
  );
  let data = await respose.json();
  for (let i = 0; i < data.count; i++) {
    // console.log(data.recipes[i].image_url);
    //create COLUMS
    let myDiv = document.createElement("div");
    myDiv.classList.add("col-3");

    //create BOX
    let myBox = document.createElement("div");
    myBox.classList.add("box-info");

    // create img
    let myIMG = document.createElement("img");
    myIMG.classList.add("w-100", "d-block", "object-fit-cover", "h-75");
    myIMG.setAttribute("src", data.recipes[i].image_url);
    myIMG.setAttribute("alt", "");
    // myIMG.append(mySRC, myALT);

    // create heading
    let myHEAD = document.createElement("h4");
    myHEAD.textContent = data.recipes[i].title;
    myHEAD.classList.add("head-photo", "text-white", "text-center", "mt-3");

    // create fragment elment
    let myFrag = document.createDocumentFragment();
    myFrag.append(myIMG, myHEAD);

    myDiv.append(myBox);
    myBox.append(myFrag);
    myParentDiv.append(myDiv);
    arr.push(data.recipes[i].recipe_id);
  }
  // to get ingredients

  for (let i = 0; i < data.count; i++) {
    let re = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${arr[i]}`
    );
    let description = await re.json();

    var myImages = document.querySelectorAll(".box-info img");
    myImages[i].addEventListener("click", function (e) {
      parentElement.classList.replace("d-none", "d-flex");
      childParentElement.style.backgroundImage = `url(${e.target.getAttribute(
        "src"
      )})`;
      console.log("ahmed ezat", childParentElementText);
      
      childParentElementText.textContent = `${(description.recipe.ingredients)}`;
    });
  }
  closeButton.addEventListener("click", function () {
    parentElement.classList.replace("d-flex", "d-none");
  });
}
getPizza();
