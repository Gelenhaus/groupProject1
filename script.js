

var isDelEl = document.getElementById("isDeliveryId");
var radioEl = document.getElementById("radioId");




isDelEl.onmouseover = function () {
    isDelEl.textContent = ("DO YOU NEED 911?");
    isDelEl.setAttribute("Style", "color: tomato;");

};

isDelEl.onmouseout = function () {
    isDelEl.textContent = ("Delivery ASAP?");
    isDelEl.setAttribute("style", "color: black;");
}



