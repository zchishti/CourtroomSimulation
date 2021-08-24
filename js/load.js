let GLOBAL_STUDENT_DATA = {};
const posData = new Object();
posData['Eye Witness'] = 'Crime Scene Tech',
posData['Expert Witness'] = 'Lab Examiner'


function load(response){
    response.forEach(element => {
        if(element.userID == valenceUserData['Identifier']){
            showOverlay("#load-message");

            let data = element.data.replace(/&amp;quot;|&quot;/g,'"');
            GLOBAL_STUDENT_DATA = JSON.parse(data);
            disableLoadBtns();
        }
   });
}

function disableLoadBtns(){

    GLOBAL_STUDENT_DATA.forEach(element =>{
        if(element.position == "Expert Witness" && element.data === ""){
            $("#load-data-expertWitness").addClass('disabled');
        }else if(element.position == "Eye Witness" && element.data === ""){
            $("#load-data-eyeWitness").addClass('disabled');
        }
    });
    
}

$('.load-data').click(function(){
    $('#overlay').addClass('hidden');
    $('#load-message').addClass('hidden');
    GLOBAL_STUDENT_DATA.forEach(el => {
        if($(this).data('id') == el.position){
            if(el.lastActionId != undefined && el.lastActionId != null){
                setCurrentNode(posData[el.position],el.position,el.lastActionId+1);
                //setCurrentNode(el.position,el.lastActionId+1);
            }
        }
    });
});


$('#close-load-message').click(function(){
    hideOverlay("#load-message");
});