let GLOBAL_STUDENT_DATA = {};
function setStudentTranscripts(response){
    response.forEach(userdata => {
        if(userdata.userID == valenceUserData['Identifier']){
            GLOBAL_STUDENT_DATA = userdata;
        }
    });
}


function cleanModal(){
    $('.modal-title').empty();
    $('.modal-body').empty();
}

$('body').on('click','.btn-transcript',function(){
    
    let data = GLOBAL_STUDENT_DATA.data.replace(/&amp;quot;|&quot;/gi,'"');
    data = JSON.parse(data);

    let pos = $(this).data('position');
    let regx = /Eye Witness|Expert Witness|Bailiff|Prosecutor|Judge|Defense Attorney|Answer/g;

   data.forEach(entry => {
       if(entry.position == pos){
        cleanModal();
        $('.modal-title').append(entry.position);

        entry.data = entry.data.replace(/\|\|/g,'<p>');
        let replacedStr = entry.data.replace(regx, (match) =>{
            return `<strong>${match}</strong>`;
        });
        $('.modal-body').append(replacedStr);

       }
    });

});