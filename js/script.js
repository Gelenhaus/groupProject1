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
var heroTextEl = document.getElementById("hero-text");

// // hide google search on load.
document.getElementById("google-search").style.display = "none";

// save to local storage
localStorage.setItem("name", userInputName.value);
localStorage.setItem("address", userInputAddress.value);
localStorage.setItem("zip", userInputZip.value);

// onmouseover adjust for paragraph
heroTextEl.onmouseover = function () {
  heroTextEl.innerHTML = "<p>LocalGrub is NOT a restaurant delivery website. This application is a resource for victims of domestic violence to search for shelters and request emergency assistance without leaving any trace of their actions. <br></br> Please hover over page elements for instructions to use the form for it's actual purposes.</p>";
  heroTextEl.style.color = "tomato";
}
heroTextEl.onmouseout = function () {
  heroTextEl.innerHTML = "<p>Don’t know what you want to eat for dinner tonight? Let our mind-reading eatery software decide for you!</br></br>Submit the form below to populate local restaurants and a list of their services. If you would like delivery, select a category and we will choose one of these delicious eats for you!</p>"
  heroTextEl.style.color = "";
}
// Delivery ASAP hidden
isDelEl.onmouseover = function () {
  isDelEl.textContent = "DO YOU NEED 911?";
  isDelEl.setAttribute("Style", "color: tomato;");
};

isDelEl.onmouseout = function () {
  isDelEl.textContent = "Delivery ASAP?";
  isDelEl.setAttribute("style", "color: --secondary-color;");
};

// Police hidden
isPolice.onmouseover = function () {
  isPolice.textContent = "Police";
  isPolice.setAttribute("Style", "color: tomato;");
};

isPolice.onmouseout = function () {
  isPolice.textContent = "Pizza";
  isPolice.setAttribute("style", "color: --secondary-color;");
};

// Fire Hidden
isFire.onmouseover = function () {
  isFire.textContent = "Fire Department";
  isFire.setAttribute("Style", "color: tomato;");
};

isFire.onmouseout = function () {
  isFire.textContent = "Burgers";
  isFire.setAttribute("style", "color: --secondary-color;");
};
// Paramedic hidden
isParamedic.onmouseover = function () {
  isParamedic.textContent = "Paramedics";
  isParamedic.setAttribute("Style", "color: tomato;");
};

isParamedic.onmouseout = function () {
  isParamedic.textContent = "Ethnic";
  isParamedic.setAttribute("style", "color: --secondary-color;");
};
// Delivery ASAP hidden end

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
      "police" +
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

  // If check yes, go to submitCallBack(); function
  if (document.getElementById("radio-yes").checked) {
    // Show/un-hide google search bar when yes is clicked
    document.getElementById("google-search").style.display = "block";
    // clear google search value when opened again
    document.querySelector("#gsc-i-id1").value = "";

    // alert("yes");
    submitCallBack();
  } else {
    // Show/un-hide google search bar when no is clicked
    document.getElementById("google-search").style.display = "block";

    // alert("nothing to see here");
  }
};

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

//
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

// // Category section
// if (document.getElementById("pizza-input").checked) {
//   alert("Pizza");
// } else if (document.getElementById("burgers-input").checked) {
//   alert("Burgers");
// } else {
//   alert("Ethnic");
// }
