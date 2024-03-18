if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}
$(function() {
    "use strict";
    $('.deadline').on('click', function () {
        $('.deadline-form').toggleClass('d-none'); 
    });
});

function removeDiv(elem){
    $(elem).closest('tr').remove();
}