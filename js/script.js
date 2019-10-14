$(document).ready(function () {
    
    var dropdown = $('#states');
    
    dropdown.empty();
    
    dropdown.append('<option selected="true" disabled> Choose State </option>');
    dropdown.prop('selectedIndex',0);
    
    const port = location.port;
    const url = 'http://127.0.0.1:' + port + '/js/states.json';
    
    //populate dropdown with list of states
    $.getJSON(url, function(data) {
        $.each(data, function(key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
        })
    });
});
