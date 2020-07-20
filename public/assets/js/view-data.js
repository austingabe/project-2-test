$(document).ready(function() {
    $("#viewBtn").on("click", function(event) {
        event.preventDefault();
        const url = "/view-data";
        window.location.replace(url);
    })
});