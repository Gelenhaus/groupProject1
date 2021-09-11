// global variables
var submitEl = document.querySelector("#buttonSubmit");
var userInputName = document.querySelector("#name");
var userInputAddress = document.querySelector("#address");
var userInputZip = document.querySelector("#zip");
var yesEl = document.querySelector("#radio-yes");
var noEl = document.querySelector("#radio-no");
var isDelEl = document.getElementById("isDeliveryId");
var isPolice = document.getElementById("pizza");
var isFire = document.getElementById("burgers");
var isParamedic = document.getElementById("ethnic");

// global/setting variables.
var categoryEl;
var userInputCategory;

// Hidden Features Start
// // hide google search on load.
document.getElementById("google-search").style.display = "none";

// save to local storage
localStorage.setItem("name", userInputName.value);
localStorage.setItem("address", userInputAddress.value);
localStorage.setItem("zip", userInputZip.value);

// Delivery ASAP hidden
isDelEl.onmouseover = function () {
  isDelEl.textContent = "DO YOU NEED 911?";
  isDelEl.setAttribute("Style", "color: tomato;");
};

// Delivery ASAP Show
isDelEl.onmouseout = function () {
  isDelEl.textContent = "Delivery ASAP?";
  isDelEl.setAttribute("style", "color: --secondary-color;");
};

// Police hidden
isPolice.onmouseover = function () {
  isPolice.textContent = "Police";
  isPolice.setAttribute("Style", "color: tomato;");
};

// Police show
isPolice.onmouseout = function () {
  isPolice.textContent = "Pizza";
  isPolice.setAttribute("style", "color: --secondary-color;");
};

// Fire Hidden
isFire.onmouseover = function () {
  isFire.textContent = "Fire Department";
  isFire.setAttribute("Style", "color: tomato;");
};

// Fire Show
isFire.onmouseout = function () {
  isFire.textContent = "Burgers";
  isFire.setAttribute("style", "color: --secondary-color;");
};

// Paramedic hidden
isParamedic.onmouseover = function () {
  isParamedic.textContent = "Paramedics";
  isParamedic.setAttribute("Style", "color: tomato;");
};

// Paramedic Show
isParamedic.onmouseout = function () {
  isParamedic.textContent = "Ethnic";
  isParamedic.setAttribute("style", "color: --secondary-color;");
};
// Hidden Features End

// sending sms function submitCallBack();
var submitCallBack = function () {
  // fetch start
  fetch(
    "https://nexmo-nexmo-messaging-v1.p.rapidapi.com/send-sms?to=%2B13854245740&from=%E2%80%AA%2B14357282960%E2%80%AC&text=" +
      userInputName +
      "%20is%20in%20danger%20due%20to%20a%20domestic%20violence%20situation%20at%20" +
      userInputAddress +
      userInputZip +
      "%20They%20are%20requesting%20%20" +
      userInputCategory +
      "%20%20be%20sent%20immediately.%20This%20message%20was%20sent%20from%20a%20cloaked%20website%20service%2C%20please%20send%20assistance%20and%20do%20not%20respond%20as%20it%20may%20endanger%20the%20victim.",
    {
      method: "POST",
      headers: {
        "x-rapidapi-host": "nexmo-nexmo-messaging-v1.p.rapidapi.com",
        "x-rapidapi-key": "ece5fcf093msh9c130fa63287253p1c1b9cjsn7a82847db4f1",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
  // Fetch end
};

// when submit is clicked function.
submitEl.onclick = function (event) {
  event.preventDefault();
  // save to local storage
  localStorage.getItem("name");
  localStorage.getItem("address");
  localStorage.getItem("zip");

  // When submit is clicked, create strings for sms text from category section
  categoryEl = [];
  checkBox();

  // If check yes, go to submitCallBack(); function
  if (document.getElementById("radio-yes").checked) {
    // Show/un-hide google search bar when yes is clicked
    document.getElementById("google-search").style.display = "block";
    // clear google search value when opened again
    document.querySelector("#gsc-i-id1").value = "";

    // Send to submitCallBack() function.
    submitCallBack();
  } else {
    // Show/un-hide google search bar when no is clicked
    document.getElementById("google-search").style.display = "block";
  }
};

// Delivery ASAP, if yes is clicked
yesEl.onclick = function () {
  // show category section since yes was clicked
  document.getElementById("category").style.display = "block";
  document.getElementById("pizza-input").style.display = "initial";
  document.getElementById("pizza").style.display = "initial";
  document.getElementById("burgers-input").style.display = "initial";
  document.getElementById("burgers").style.display = "initial";
  document.getElementById("ethnic-input").style.display = "initial";
  document.getElementById("ethnic").style.display = "initial";
};

// Delivery ASAP, if no is clicked
noEl.onclick = function () {
  // hide category section since no was clicked
  document.getElementById("category").style.display = "none";
  document.getElementById("pizza-input").style.display = "none";
  document.getElementById("pizza").style.display = "none";
  document.getElementById("burgers-input").style.display = "none";
  document.getElementById("burgers").style.display = "none";
  document.getElementById("ethnic-input").style.display = "none";
  document.getElementById("ethnic").style.display = "none";
};

// Category section
var checkBox = function () {
  if (document.getElementById("pizza-input").checked) {
    categoryEl.push("Police,");
  }
  if (document.getElementById("burgers-input").checked) {
    categoryEl.push("Fire Department,");
  }
  if (document.getElementById("ethnic-input").checked) {
    categoryEl.push("Paramedics");
  }

  userInputCategory = categoryEl.join(" ");
  //test userInputCategory
  console.log(userInputCategory);
};
