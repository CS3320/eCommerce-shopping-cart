$(document).ready(function() {
  const host = location.hostname;
  const port = location.port;
  let url = "http://" + host + ":" + port;

  // let dropdown = $("#states");

  // dropdown.empty();

  // dropdown.append('<option selected="true" disabled> Choose State </option>');
  // dropdown.prop("selectedIndex", 0);

  // let urlCurrent = "http://" + host + ":" + port + "/js/states.json";
  // //populate dropdown with list of states
  // $.getJSON(urlCurrent, function(data) {
  //     $.each(data, function(key, entry) {
  //         dropdown.append(
  //             $("<option></option>")
  //                 .attr("value", entry.abbreviation)
  //                 .text(entry.name)
  //         );
  //     });
  // });

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
      document.getElementById("itemCount").innerHTML =
        "Items: " + parseInt(localStorage.getItem("itemCount"));
    } else {
      document.getElementById("itemCount").innerHTML = " $0";
    }
  }

  function setShippingHandling() {
    //default value currently
    if (document.getElementById("shippingAndHandling")) {
      document.getElementById("shippingAndHandling").innerHTML =
        "Shipping & Handling: $" +
        parseFloat(localStorage.getItem("totalPrice") * 0.03);
    } else {
      document.getElementById("shippingAndHandling").innerHTML =
        "Shipping & Handling: $0";
    }
  }
  function setTotalBeforeTax() {
    if (!(localStorage.getItem("totalPrice") === null)) {
      document.getElementById("totalBeforeTax").innerHTML =
        "Total before tax: $" + localStorage.getItem("totalPrice") + ".00";
    } else {
      document.getElementById("estimatedTax").innerHTML =
        "Total before tax: $0.00";
    }
  }
  function setEstimatedTax() {
    if (!(localStorage.getItem("totalPrice") === null)) {
      let tax = parseFloat(localStorage.getItem("totalPrice")) * 0.08;
      document.getElementById("estimatedTax").innerHTML =
        "Estimated Tax: $" + tax.toFixed(2);
    } else {
      document.getElementById("estimatedTax").innerHTML = "Estimated Tax: $0";
    }
  }
  function setOrderTotal() {
    let totalWithTaxAndShipping =
      parseFloat(localStorage.getItem("totalPrice")) * 0.03 +
      parseFloat(localStorage.getItem("totalPrice")) +
      0.08 * parseFloat(localStorage.getItem("totalPrice")).toFixed(2);

    document.getElementById("orderTotal").innerHTML =
      "Order Total: $" + totalWithTaxAndShipping;
    let withShipping = totalWithTaxAndShipping * 0.03;
    localStorage.setItem("shippingAndHandling", withShipping);
  }

  //check
});
