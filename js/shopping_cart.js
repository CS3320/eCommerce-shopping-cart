jQuery(document).ready(function() {

    //set prices for each item
    var item_prices = new Array();
    item_prices["product1"] = 1;
    item_prices["product2"] = 1;
    item_prices["product3"] = 1;
    item_prices["product4"] = 1;

    localStorage.setItem('totalPrice', 0);
    var currentTotal = 
    parseInt(document.getElementById("total").innerHTML);
    var table = document.createElement("table");

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
      localStorage.setItem('totalPrice', totalPrice);
      document.getElementById("total").innerHTML = currentTotal;
    }

    function addToTable() {}

    function checkout(){
        console.log("kind of working");
        const host = location.hostname;
        const port = location.port;
        const url = "http://" + host + ":" + port + "/html/checkout.html";
        document.getElementById("iframe_a").src = url;
    }

    if (document.getElementById("addToCart")) {
      document
        .getElementById("addToCart")
        .addEventListener("click", calculateTotal);
      document.getElementById("addToCart").addEventListener("click", addToTable);
    }

    if (document.getElementById("units")) {
      document.getElementById("units").addEventListener("change", setUnitPrice);
    }

    if (document.getElementById("checkoutButton")) {
        document.getElementById("checkoutButton").addEventListener("click", checkout);
    }
    //temp

});