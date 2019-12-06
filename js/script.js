$(document).ready(function() {
  if (
    window.location.href.indexOf("checkout.html") > -1 ||
    window.location.href.indexOf("shopping_cart.html") > -1 ||
    window.location.href.indexOf("confirmation_page.html") > -1
  ) {
    const host = location.hostname;
    const port = location.port;
    let url = "http://" + host + ":" + port;

    //checkout section begin

    window.onload = loadCurrentValues();

    //we have unit price, total price, and units as local storage variables
    function loadCurrentValues() {
      setItemCount();
      setShippingHandling();
      setTotalBeforeTax();
      setEstimatedTax();
      setOrderTotal();
    }
    function setItemCount() {
      if (document.getElementById("itemCount")) {
        document.getElementById("itemCount").value = parseInt(
          localStorage.getItem("itemCount")
        );
      } else {
        document.getElementById("itemCount").value = " $0";
      }
    }

    function setShippingHandling() {
      //default value currently
      if (document.getElementById("shippingAndHandling")) {
        document.getElementById("shippingAndHandling").value = parseFloat(
          localStorage.getItem("totalPrice") * 0.03
        );
      } else {
        document.getElementById("shippingAndHandling").value = "0";
      }
    }
    function setTotalBeforeTax() {
      if (!(localStorage.getItem("totalPrice") === null)) {
        document.getElementById("totalBeforeTax").value =
          localStorage.getItem("totalPrice") + ".00";
      } else {
        document.getElementById("estimatedTax").value = "0";
      }
    }
    function setEstimatedTax() {
      if (!(localStorage.getItem("totalPrice") === null)) {
        let tax = parseFloat(localStorage.getItem("totalPrice")) * 0.08;
        document.getElementById("estimatedTax").value = tax.toFixed(2);
      } else {
        document.getElementById("estimatedTax").value = "0";
      }
    }
    function setOrderTotal() {
      let totalWithTaxAndShipping =
        parseFloat(localStorage.getItem("totalPrice")) * 0.03 +
        parseFloat(localStorage.getItem("totalPrice")) +
        0.08 * parseFloat(localStorage.getItem("totalPrice")).toFixed(2);

      document.getElementById("orderTotal").value = totalWithTaxAndShipping;
      let withShipping = totalWithTaxAndShipping * 0.03;
      localStorage.setItem("shippingAndHandling", withShipping);
    }
  }
  //check
});
