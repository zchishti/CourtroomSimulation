// -- overlay toggles -- //
function showOverlay(selector){
    $("#overlay").removeClass('hidden');
    $(selector).removeClass('hidden');
}

function hideOverlay(selector){
    $("#overlay").addClass('hidden');
    $(selector).addClass('hidden');
}