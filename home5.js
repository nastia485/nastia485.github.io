function findTrapezoidSquare(topBase, bottomBase, height) {
  return ((topBase + bottomBase) / 2) * height;
}

function displaySquareValue() {
  var base1 = 10;
  var base2 = 12;
  var altitude = 5;
  document.getElementById("result").innerHTML = findTrapezoidSquare(
    base1,
    base2,
    altitude
  );
}

function makeLettersCapital(text) {
  let words = text.split(/[\s,.]+/);
  let tempStr = "";
  let result = "";
  for (let i = 0; i < words.length; i++) {
    tempStr = words[i];
    result = result + tempStr.charAt(0).toUpperCase() + tempStr.slice(1) + " ";
  }
  return result;
}

function changeLinesContent() {
  var temp = document.getElementById("top-line").innerHTML;
  document.getElementById("top-line").innerHTML =
    document.getElementById("bottom-line").innerHTML;
  document.getElementById("bottom-line").innerHTML = temp;
}

function findDivisors(number) {
  var divisors = [];
  var i = 0;
  mod = number;
  while (mod > 0) {
    if (number % mod === 0) {
      divisors[i] = mod;
      i++;
    }
    mod--;
  }
  return divisors;
}

function displayAndSaveDivisors() {
  var x = document.getElementById("input").value;
  if (x != null) {
    var divisors = findDivisors(x);
    setCookie("divisors", divisors);
    alert(divisors);
  } else {
    alert("There are no divisors");
  }
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
    alert("Welcome again " + username);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}

var rad = document.querySelector("#radio-button");
rad.addEventListener("change", (event) => {
  var newRightText = makeLettersCapital(
    document.getElementById("right-text").innerHTML
  );
  localStorage.setItem("updated_text", newRightText);
  document.getElementById("right-text").innerHTML =
    localStorage.getItem("updated_text");
});

window.onload = (event) => {
  var info = localStorage.getItem("updated_text");
  if(info!==null){
  document.getElementById("right-text").innerHTML =
    info;}
};

//task 5

function addImgAndBtn() {
  const img = document.createElement("img");
  const imgSource = document.getElementById("img-input");
  img.setAttribute("src", imgSource.value);
  img.setAttribute("class", "img");
  img.setAttribute("width", "170px");

  document.getElementById("imgContainer").appendChild(img);

  var index = localStorage.length + 1;

  var imageId = "image" + index;
  localStorage.setItem(imageId, imgSource);

  img.setAttribute("id", imageId);

  var btn = document.createElement("button");
  btn.innerHTML = "Delete";
  document.getElementById("imgContainer").appendChild(btn);
  btn.setAttribute("class", "btn");

  var btnId = "btn" + index;

  btn.setAttribute("id", btnId);

  document.getElementById(btnId).onclick = (function () {
    var iId = imageId;
    var bId = btnId;
    return function () {
      deleteFromLC(iId);
      document.getElementById(iId).style.visibility = "hidden";
      document.getElementById(bId).style.visibility = "hidden";
    };
  })();
}

function deleteFromLC(imgName) {
  localStorage.removeItem(imgName);
}

var xBlock = document.querySelector("#x");

xBlock.addEventListener("click", (event) => {
  const imgContainer = document.createElement("div");
  imgContainer.style.width = "200px";
  imgContainer.style.height = "100px";

  imgContainer.setAttribute("id", "imgContainer");
  imgContainer.setAttribute("class", "imgContainer");

  document.getElementById("right-sidebar").appendChild(imgContainer);
  document.getElementById("img-input").style.visibility = "visible";
  document.getElementById("add-img-btn").style.visibility = "visible";
});
