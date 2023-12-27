let clearBtnHandler = () => {
  if (document.getElementById("userBoxCont")) {
    let userBoxCont = document.getElementById("userBoxCont");
    userBoxCont.parentNode.removeChild(userBoxCont);
  } else {
    console.log("Sorry");
    return;
  }
  if (document.getElementById("boxLabel")) {
    let boxLabel = document.getElementById("boxLabel");
    boxLabel.parentNode.removeChild(boxLabel);
  } else {
    return;
  }
};

let validateUserGivenProperties = (arg) => {
  let validate = isNaN(arg);
  console.log(validate);
  if (validate === false) {
    let updatedArg = arg + "px";
    return updatedArg;
  } else {
    return arg;
  }
};

let validateBorderRadius = (boxBorder) => {
  let matches = boxBorder.match(/(\d+)/);
  if (matches) {
    let updatedBoxBorder = matches[0] + "px solid black";
    return updatedBoxBorder;
  } else {
    return boxBorder;
  }
};

let createUserGivenBox = (boxCreationDetailsForm) => {
  let userBoxCont = document.createElement("div");
  userBoxCont.setAttribute("id", "userBoxCont");

  let boxHeight = boxCreationDetailsForm.height.value.toLowerCase();
  let updatedBoxHeight = validateUserGivenProperties(boxHeight);

  let boxWidth = boxCreationDetailsForm.width.value.toLowerCase();
  let updatedBoxWidth = validateUserGivenProperties(boxWidth);

  let boxBorder = boxCreationDetailsForm.border.value.toLowerCase();
  let updatedBoxBorder = validateBorderRadius(boxBorder);

  let boxBorderRadius = boxCreationDetailsForm.borderRadius.value.toLowerCase();
  let updatedBoxBorderRadius = validateUserGivenProperties(boxBorderRadius);

  let boxBgColor = boxCreationDetailsForm.bgColor.value.toLowerCase();

  let boxLabel = document.createElement("div");
  boxLabel.innerText = boxCreationDetailsForm.label.value;
  boxLabel.setAttribute("id", "boxLabel");

  userBoxCont.style.height = updatedBoxHeight;
  userBoxCont.style.width = updatedBoxWidth;
  userBoxCont.style.border = updatedBoxBorder;
  userBoxCont.style.borderRadius = updatedBoxBorderRadius;
  userBoxCont.style.backgroundColor = boxBgColor;

  let parentContainer = document.getElementById("parentContainer");
  if (!document.getElementById("boxLabel")) {
    parentContainer.appendChild(boxLabel);
  }

  parentContainer.appendChild(userBoxCont);
};

if (document.getElementById("boxCreationDetails")) {
  let boxCreationDetails = document.getElementById("boxCreationDetails");
  // Attach a submit event listener to the login form
  boxCreationDetails.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let boxCreationDetailsForm = document.forms.boxCreationDetails;

    if (!document.getElementById("userBoxCont")) {
      createUserGivenBox(boxCreationDetailsForm);
    }
  });
}
