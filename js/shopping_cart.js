//set prices for each item
var item_prices = new Array();
item_prices["product1"] = 1;
item_prices["product2"] = 1;
item_prices["product3"] = 1;
item_prices["product4"] = 1;

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

function calculateTotal() {
  var totalPrice = getItemPrice() * getQuantity();
  document.getElementById("total").innerHTML = currentTotal + totalPrice;
}

if (document.getElementById("addToCart")) {
  var currentTotal = document.getElementById("total").innerHTML;

  document
    .getElementById("addToCart")
    .addEventListener("click", calculateTotal);
}
