//set prices for each item
var item_prices = new Array();
item_prices["product1"] = 1;
item_prices["product2"] = 1;
item_prices["product3"] = 1;
item_prices["product4"] = 1;

var currentTotal = parseInt(document.getElementById("total").innerHTML);

function getItemPrice() {
  var itemPrice = 0;
  var theForm = document.forms["cartform"];
  var selectedItem = theForm.elements["product"];
  itemPrice = item_prices[selectedItem.value];
  return itemPrice;
}

function getQuantity() {
  var theForm = document.forms["cartform"];
  var quantity = theForm.elements["units"];
  return quantity.value;
}

function setUnitPrice() {
  document.getElementById("unitPrice").innerHTML = parseInt(
    getItemPrice() * getQuantity()
  );
}

function calculateTotal() {
  var totalPrice = parseInt(getItemPrice() * getQuantity());
  currentTotal += totalPrice;
  document.getElementById("total").innerHTML = currentTotal;
}

if (document.getElementById("addToCart")) {
  document
    .getElementById("addToCart")
    .addEventListener("click", calculateTotal);
}

if (document.getElementById("units")) {
  document.getElementById("units").addEventListener("change", setUnitPrice);
}
