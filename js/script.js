var submitEl = document.querySelector("#buttonSubmit");
var userInputName = document.querySelector("#name");
var userInputAddress = document.querySelector("#address");
var userInputZip = document.querySelector("#zip");
var isDelEl = document.getElementById("isDeliveryId");

// save to local storage
localStorage.setItem("name", userInputName.value);
localStorage.setItem("address", userInputAddress.value);
localStorage.setItem("zip", userInputZip.value);

isDelEl.onmouseover = function () {
  isDelEl.textContent = "DO YOU NEED 911?";
  isDelEl.setAttribute("Style", "color: tomato;");
};

isDelEl.onmouseout = function () {
  isDelEl.textContent = "Delivery ASAP?";
  isDelEl.setAttribute("style", "color: --secondary-color;");
};

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
  // e.preventDefault();
  // save to local storage
  var randomEl = localStorage.getItem("name");
  localStorage.getItem("address");
  localStorage.getItem("zip");
  console.log(randomEl);
  // If check yes, go to submitCallBack(); function
  if (document.getElementById("radio-yes").checked) {
    alert("yes");
    submitCallBack();
  } else {
    alert("nothing to see here");
  }
};

var totalCategory = function () {};
// // Category section
// if (document.getElementById("pizza-input").checked) {
//   alert("Pizza");
// } else if (document.getElementById("burgers-input").checked) {
//   alert("Burgers");
// } else {
//   alert("Ethnic");
// }
