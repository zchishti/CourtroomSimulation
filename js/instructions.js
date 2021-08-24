$('.icon-instructions').click(function(){
    showOverlay("#instructions");
});

$('body').on('click','#close-instructions',function(){
    hideOverlay("#instructions"); 
});