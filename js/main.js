let title = "";
let totalQuestions = 0;
let currentQuestion = 0;
let currentList = "";
let dataId = null;
let lastSavedNode = null;
const maxInputLength = 500;
const transcript = new Transcript('Courtroom Simulation',`${valenceUserData['firstName']} ${valenceUserData['lastName']}`,'Expert Witness');

function display(node){

        if(title !== ""){
           $("#title").empty();
           $("#title").append("<h5>Position: "+title+"</h5>"); 
        }
       
        if(totalQuestions > 0){
            if(node instanceof ActionQuestion && !node.visited){
                currentQuestion++;
            }
            $("#questionCount").empty();
            $("#questionCount").append("<h5>"+currentQuestion+"/"+totalQuestions+"</h5>");
        }
                                                                                                            // fixed and contain
        let html = "<div class='bg col-12' style='background: url(../"+node.background+") no-repeat center center; background-size: cover; '>";
        if(node.character != null){
            html += "<img class='img-reponsive character' src='../"+ node.character +"' />";
        }
        if(node instanceof ActionBranch && node.assets != null){
            node.assets.forEach(element => {
                if(element.hasOwnProperty("image")){
                    html += "<img class='img-fluid btn "+node.position+" next_node' data-id='"+element.title+"' style='height:"+element.dimension.height+"; width:"+element.dimension.width+"; margin-top:-"+parseInt(element.dimension.height)/2+"rem; margin-left:"+(-1 *(parseInt(element.dimension.width)/2 + parseInt(element.margin)))+"rem; transition:all 150ms ease-in-out;' src='../"+ element.image +"' />";
                }
                if(element.hasOwnProperty("html")){
                    html += element.html;
                }
            });
        }
        
        html += "</div>";
       
        let displayText =  getDisplayText(node);
        let name = node.name;

        if(displayText != null && name != null){
            html += "<div class='dialogueText'><p class='characterName'>"+name+"</p><p class='characterDialogue'>" + displayText + "</p>";
        }

        if(node instanceof ActionAnswer){
            if(node.prev instanceof ActionQuestion){
                html += `<div id="questionSlider">
                            <div id="questionSlider__questionText"><strong>Question: </strong>${getDisplayText(node.prev)}</div>
                            <div id="questionSlider__icon"><i class="fa fa-angle-double-right btn" aria-hidden="true"></i></div>
                        </div>`;
            }
            html += node.inputHTML;
        }
        
        if(node instanceof ActionCredit){
            html += `<p class="credit_text_${node.textPosition}">${node.text}</p>`;
            progressSave();
        }

        enableButtons(node);
        node.visited = true;
        $("#save-progress").prop('disabled',false);
        $("#play").empty();
        $("#play").append(html);
}


function getDisplayText(node){
    let displayText = null;

    if(node instanceof ActionDialogue){
        displayText = node.dialogueText;
       
        if(displayText)
            displayText = displayText.substr(0,1).toUpperCase()+displayText.substr(1);
    }
    
    if(node instanceof ActionQuestion){
        displayText = node.question;
        
        if(displayText)
            displayText = displayText.substr(0,1).toUpperCase()+displayText.substr(1);
        
    }

    return displayText;
}

function assetType(asset){

   if((/\.(gif|jpe?g|png|svg)$/i).test(asset)){
       return "image";
   }

   return null;
}

function enableButtons(node){
    if(node instanceof ActionBranch || node instanceof ActionAnswer || node instanceof ActionCredit){
        $("#next").addClass("hidden");
    }
    else{
        $("#next").removeClass("hidden");
    }

    if(node instanceof ActionBranch || node instanceof ActionQuestion || node instanceof ActionCredit){
        $("#save-progress").addClass('hidden');
    }else if(node instanceof ActionAnswer){
        $("#save-progress").removeClass('hidden');
    }else{
        $("#save-progress").addClass('hidden');
    }

}

function setCurrentNode(charTitle,pos,lastActionId){

    if(pos == 'Expert Witness'){
        currentList = actionListExpertWitness;
    }else if(pos == 'Eye Witness'){
        currentList = actionListEyeWitness;
    }else{
        return;
    }

    dataId = pos;
    totalQuestions = currentList.countNodeofType(ActionQuestion);
    
    while(currentList.currentNode){
        if(currentList.currentNode instanceof ActionQuestion && currentList.currentNode.questionId == lastActionId){
            title = charTitle;
            currentList.currentNode.visited = true;
            currentQuestion = lastActionId;
            display(currentList.currentNode);
            break;
        }
        currentList.currentNode = currentList.currentNode.next;
    }

}

$(document).ready(function(){
    currentList = actionListStart;
    $('body').click(function(){
        if(currentList.backgroundMusic != null){
           // playSound(backgroundMusic);
        }  
    });
    display(currentList.currentNode);
});

$("#next").click(function(){
    display(currentList.next());
});

$("#prev").click(function(){
    display(currentList.previous());
});

$('body').on('click','.btn-start',function(){
    display(currentList.next());
});


$('body').on('click','.next_node', function(){
    
    let node = currentList.currentNode;
    dataId = $(this).data("id");
    
    transcriptModel.forEach(model => {
        if(model.position == dataId){
            model.data = "";
        }
    });

    if(node.assets != null){
        node.assets.forEach(element => {
            if(element.hasOwnProperty("title")){
                if(element.title == dataId){
                    title = element.position;
                    currentList = element.nextNode;
                    currentNode = currentList.currentNode;
                    totalQuestions = currentList.countNodeofType(ActionQuestion);
                    display(currentNode);
                }
            }
        });
    }
});

$('body').on('click','.ans-submit',function(){
    const ansInput = $(this).siblings('#answerInput');
    const errEl = $(this).siblings('.error_text');
    errEl.empty();
    if(ansInput.val().trim() != null && ansInput.val().trim() !== '' ){
        display(currentList.next());
    }else{
        errEl.append('Answer cannot be empty.');
    }
});

$('body').on('keyup','#answerInput',function(){
    
    let characters = this.value.trim().split('');
    const element_word_count = document.getElementById('word_count');
    element_word_count.innerHTML = characters.length + "/"+maxInputLength;
    
    if(characters.length > maxInputLength){
        this.value = this.value.substring(0,maxInputLength);
        element_word_count.innerHTML = maxInputLength/maxInputLength;
    }

    currentList.currentNode.inputText = this.value.trim();
    currentList.currentNode.updateInput();
});

const progressSave = () => {
       
        if(currentList.currentNode instanceof ActionAnswer){
            if(currentList.currentNode.inputText == '' || currentList.currentNode.inputText == null){
                const errEl = document.getElementsByClassName('error_text');
                $(errEl).empty();
                $(errEl).append('Answer cannot be empty.');
                return;
            }
        }

        showOverlay(".loader-container");

        let data = transcript.buildTranscript(currentList,lastSavedNode);
        transcriptModel.forEach(element => {
                if(element.position == dataId){

                    if(element.data == data){
                        element.data = data;
                    }else{
                        element.data += data;
                    }

                    if(currentList.currentNode instanceof ActionQuestion){
                        element.lastActionId = currentList.currentNode.questionId;
                    }else{
                        element.lastActionId = currentList.currentNode.prev.questionId;
                    }
                }
            });

        lastSavedNode = currentList.currentNode;
        routeData(transcriptModel);
}

$("#save-progress").click(function(){
    progressSave();
});
