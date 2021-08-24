$('body').on('click','#questionSlider__icon',function(){
    $(this).toggleClass('rotate-180');
    const parent = $(this).parent('#questionSlider');
    $(parent).toggleClass("slide-right");
    $('.answer-group').toggleClass('slide-right');
    toggleFocus(["#answerInput",".ans-submit"]);
});

function toggleFocus(selectors){
    
    let isDisabled = false;
    selectors.forEach(selector => {
        isDisabled = $(selector).prop('disabled');
        $(selector).prop('disabled', !isDisabled); 
    });

}