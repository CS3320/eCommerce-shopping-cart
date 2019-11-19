

function getCheckoutInfo(){
    var session = eval('(<?php echo json_encode($_SESSION)?>)');
    console.log(session);
    
    // for (var prop in obj) {
    //     if (obj.hasOwnProperty(prop)) { 
        
    //     }



        if (document.getElementById("itemCount")) {
            document.getElementById("itemCount").innerHTML =
              "Items: " + parseInt(obj);
          } else {
            document.getElementById("itemCount").innerHTML = " $0";
          }
}