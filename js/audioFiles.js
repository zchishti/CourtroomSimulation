const clickSound = new Audio('../Audio/sfx/click3.wav');
const backgroundMusic = new Audio('../Audio/background/gamemusicloop.wav');

function playSound(sound){
   
    if(sound.paused){
        sound.play();
        sound.paused = false;
    }
}

function stopSound(sound){
    sound.stop();
}

let VOLUME = true;

$('body').on('click','.btn',function(){
    if(VOLUME){
        playSound(clickSound);
    }
});

$('.icon-volume-control').click(function(){
    VOLUME = !VOLUME;
    if(VOLUME){
        $('.icon-volume-control').addClass('fa-volume-up');
        $('.icon-volume-control').removeClass('fa-volume-off');
    }else{
        $('.icon-volume-control').addClass('fa-volume-off');
        $('.icon-volume-control').removeClass('fa-volume-up');
    }
})