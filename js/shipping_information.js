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
      var obj = eval(xmlhttp.responseText);
      document.getElementById("addressOne").innerHTML = obj[0].address1;
      document.getElementById("addressTwo").innerHTML = obj[0].address2;
      document.getElementById("city").innerHTML = obj[0].city;
      document.getElementById("staeDD").value = obj[0].state;
      document.getElementById("zipCode").innerHTML = obj[0].zip;
    }
  };
  xmlhttp.open("GET", "../php/getPhysicalAddress.php", true);
  xmlhttp.send();
}
