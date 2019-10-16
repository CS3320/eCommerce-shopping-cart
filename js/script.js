$(document).ready(function() {
    var dropdown = $("#states");

    dropdown.empty();

    dropdown.append('<option selected="true" disabled> Choose State </option>');
    dropdown.prop("selectedIndex", 0);

    const host = location.hostname;
    const port = location.port;
    const url = "http://" + host + ":" + port + "/js/states.json";
    console.log(url);
    //populate dropdown with list of states
    $.getJSON(url, function(data) {
        $.each(data, function(key, entry) {
            dropdown.append(
                $("<option></option>")
                    .attr("value", entry.abbreviation)
                    .text(entry.name)
            );
        });
    });
});
