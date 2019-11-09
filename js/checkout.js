$(document).ready(function() {

    
    var request;
    $("#submitPayment").submit(function(event) {
        var ajaxRequest;

        
        /* Stop form from submitting normally */
        event.preventDefault();

        /* Clear result div*/
        $("#result").html('');

        // Abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input, select, button, textarea");

        // Serialize the data in the form
        var serializedData = $form.serialize();
        console.log(serializedData);
        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);

        /* Send the data using post and put the results in a div. */
        /* I am not aborting the previous request, because it's an
        asynchronous request, meaning once it's sent it's out
        there. But in case you want to abort it you can do it
        by abort(). jQuery Ajax methods return an XMLHttpRequest
        object, so you can just use abort(). */
        ajaxRequest= $.ajax({
                url: "http://localhost/eCommerce-shopping-cart/html/checkout.php",
                type: "post",
                data: serializedData
            });
        /*  Request can be aborted by ajaxRequest.abort() */

        ajaxRequest.done(function (response, textStatus, jqXHR){

            // Show successfully for submit message
            console.log("sucess");
            window.parent.document.getElementById('iframe_a').href = "http://localhost/Commerce-shopping-cart/html/confirmation_page.html" 
        });

        /* On failure of request this function will be called  */
        ajaxRequest.fail(function (){

            // Show error
            console.log("fail");
        });
    });
});
