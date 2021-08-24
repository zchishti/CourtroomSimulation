'use strict'

/*
An interface for generating client side pdf
 [requires: https://github.com/MrRio/jsPDF]
*/


//div used to print data from.
const selector = "printer";

function setPrinterData(dataArr,username){
    
    let regx = /Eye Witness|Expert Witness|Bailiff|Prosecutor|Judge|Answer/gi;

    let html = "";
    html = `<h1 id="printer__heading" style="margin-bottom:2rem; display:inline-block">Courtroom Simulator Transcripts</h1>
            <h5 id="printer__username" style="margin-bottom:1rem; display:inline-block; float:right">${username}</h5>`;
    dataArr.forEach((transcriptData,i) => {
        let replacedStr = transcriptData.data.replace(/\|\|/g,'<p>');
        replacedStr = replacedStr.replace(regx, (match) =>{
            return `<strong>${match}</strong>`;
        });

        html += `<h4 class="printer__position" style="margin-bottom:0.8rem">${transcriptData.position}</h4>
                <div class="printer__data">${replacedStr}</div>`;

        if(i != dataArr.length - 1){
            html  +=  `<p style='page-break-before: always; display:block;  visibility: hidden;'>x</p>`;
        }
    });        

    $(`#${selector}`).append(html);
    print(username);
}


function makePDF(userdataObj,id){
    if(userdataObj == null || id == null){
        return;
    }
    
    $(`#${selector}`).empty();

    userdataObj.forEach(obj => {
        if(obj.id == id){
            let transcriptDataArr = parseUserData(obj);
            setPrinterData(transcriptDataArr,obj.username);
        }
    })

}


function print(studentName) {

    if(selector == null || selector == undefined){
        return;
    }

    const doc = new jsPDF();
    const elementHandler = {
        '#ignorePDF': function (element, renderer) {
            return true;
        }
    };
    const source = document.getElementById(selector);
    doc.fromHTML(
        source,
        5,
        5, {
            'width': 180,
            'elementHandlers': elementHandler
        });

    doc.save("Courtroom Transcript - " + studentName)
}
