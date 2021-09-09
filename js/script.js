var submitEl = document.querySelector("#buttonSubmit");
var userInputName = document.querySelector("#name");
var userInputAddress = document.querySelector("#address");
var userInputZip = document.querySelector("#zip");
var yesEl = document.querySelector("#radio-yes");
var noEl = document.querySelector("#radio-no");
var isDelEl = document.getElementById("isDeliveryId");

// hide google search on load.
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

isDelEl.onmouseout = function () {
  isDelEl.textContent = "Delivery ASAP?";
  isDelEl.setAttribute("style", "color: --secondary-color;");
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
submitEl.onclick = function () {
  // save to local storage
  localStorage.getItem("name");
  localStorage.getItem("address");
  localStorage.getItem("zip");

  // If check yes, go to submitCallBack(); function
  if (document.getElementById("radio-yes").checked) {
    // Show/un-hide google search bar when yes is clicked
    document.getElementById("google-search").style.display = "block";
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
