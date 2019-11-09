
    function showStates(){
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


        var x = document.getElementById("stateDD");
        for (i = 0; i < obj.length; i++) {
          var option = document.createElement("option");
          option.value = obj[i].state_abbr;
          option.text = obj[i].state_name;
          x.add(option, x[i]);
        }
      }
    };
    xmlhttp.open("GET", "../php/getStates.php", true);
    xmlhttp.send();
  }
  
