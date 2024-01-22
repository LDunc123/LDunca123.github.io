const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cool-frog-2.jpg") {
    myImage.setAttribute("src", "images/cool-frog.jpg");
  } else {
    myImage.setAttribute("src", "images/cool-frog-2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Name the webpage!");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName}`;
    }
  };

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName}`;
};

myButton.onclick = () => {
    setUserName();
  };