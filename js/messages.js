let alertHTML = '<div class="alert alert-dismissible fade show" role="alert" id="message-alert">'+
                        '<p id="message-text"></p>'+
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true" class="btn">&times;</span>'+
                        '</button>'+
                    '</div>';

function displayMessage(response){
    let message = '';
    let alertClass = '';
    if(response.result == "success"){
         message = "Progress Saved Successfully.";
        alertClass = "alert-success";
    }else if(response.result == "error"){
        message = "<strong>Server Error</strong>: Cannot save data at this time.";
        alertClass = "alert-danger";
    }

    $('#overlay').append(alertHTML);
    $('#message-alert').addClass(alertClass);
    $('#message-text').append(message);
    
    showOverlay("#message-alert");
}