let GLOABL_RESPONSE = {};


function setAllTrasncripts(response){
    GLOABL_RESPONSE = response;
    let allResponses = [];
    let html = '';


    if(response[0] != null && response[0] !== undefined){
        response.forEach(element => {
            allResponses.push(element); 
        });
    }
  
    if(allResponses.length > 0){

        html += `<table class="table table-responsive-md">
                    <thead>
                    <tr>
                        <th scope="col-2">Name</th>
                        <th scope="col-4">Lay Wintess Transcript</th>
                        <th scope="col-4">Expert Witness Transcript</th>
                        <th scope="col-2" class="text-center">Download</th>
                    </tr>
                    </thead>
                    <tbody>`;

        allResponses.forEach(response => {
            let data = response.data.replace(/&amp;quot;|&quot;/gi,'"');
            data = JSON.parse(data);
           // html += `<div class="transcriptRow row"><p class="username">${response.username}</p>`;
            html += `<tr> <th scrope="row">${response.username}</th>`;
            data.forEach(dataObj => {
                //html += `<p>${dataObj.position} | ${dataObj.data}</p>`;
                html += `<td> <button type="button" class="btn btn-transcript" data-toggle="modal" data-target="#exampleModalLong" data-id="${response.id}" data-position="${dataObj.position}">${dataObj.position == 'Eye Witness' ? 'Lay Witness' : dataObj.position} Transcript</button></td>`; 
            });

            //html += '</div>';
            html += `<td class="text-center download_icon"><i class="fa fa-download" aria-hidden="true" data-id="${response.id}"></i></td></tr>`;
        });

        html += `</tbody>
                </table>`;
      
    }else{
        html += '<h4>No Transcripts available for this simulation.</h4>';
    }

    $("#allTranscripts").append(html);
}


function cleanModal(){
    $('.modal-title').empty();
    $('.modal-body').empty();
}

function parseUserData(userdata){
    let data = userdata.data.replace(/&amp;quot;|&quot;/gi,'"');
    data = JSON.parse(data);
    return data;
}

function updateModelData(userdata,pos){
    
    userdata = parseUserData(userdata);

    let regx = /Eye Witness|Expert Witness|Bailiff|Prosecutor|Judge|Defense Attorney|Answer/g;

    userdata.forEach(transcript => {
        if(transcript.position == pos){
            $('.modal-title').append(`${transcript.position} Transcript`);
            transcript.data = transcript.data.replace(/\|\|/g,'<p>');
            let replacedStr = transcript.data.replace(regx, (match) =>{
                return `<strong>${match}</strong>`;
            });
            $('.modal-body').append(replacedStr);
            
        }
    });
}

$('body').on('click','.btn-transcript',function(){
    let id = $(this).data('id');
    let pos = $(this).data('position');
    GLOABL_RESPONSE.forEach(userdata => {
        if(id == userdata.id){
            cleanModal();
            updateModelData(userdata,pos);
        }
    });
});

$('body').on('click','.download_icon > i',function(){
    let id = $(this).data('id');
    makePDF(GLOABL_RESPONSE,id);
})