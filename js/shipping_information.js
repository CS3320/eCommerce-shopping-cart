function getPhysicalAddress() {
  console.log("working");
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      var form = document.forms["shippingInfoForm"];
      form.elements["addressOne"].value = obj["address1"];
      form.elements["addressTwo"].value = obj["address2"];
      form.elements["city"].value = obj["city"];
      form.elements["stateDD"].value = obj["state"];
      form.elements["zipCode"].value = obj["zip"];
    }
  };
  xmlhttp.open("GET", "../php/getPhysicalAddress.php", true);
  xmlhttp.send();
}
