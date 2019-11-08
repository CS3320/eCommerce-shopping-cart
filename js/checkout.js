

function postPaymentInfo(){
    
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            	var obj = eval(this.responseText);
            	var x = document.getElementById("stateDD");
            	
            }
        };

    xmlhttp.open("POST","check.php",true);
    xmlhttp.send();

}

