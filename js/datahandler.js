let hasData = false;
let GLOBAL_USER_DATA = {};

function routeData(userData){
    if(hasData){
        if(GLOBAL_USER_DATA){
            GLOBAL_USER_DATA.forEach(data => {
                if(data.userID == valenceUserData['Identifier']){
                   updateData(userData,data.id);
                }
            });
        }
    }else{
        putData(userData);
    }
}

function updateTranscriptModel(response){
    let data = {};
    response.forEach(res => {
        if(res.userID == valenceUserData['Identifier']){
            data = res.data.replace(/&amp;quot;|&quot;/gi,'"');
        }
    });

    if(Object.keys(data).length === 0 && data.constructor === Object){
        return;
    }

    data = JSON.parse(data);

    transcriptModel.forEach(element => {
        data.forEach(dataEl => {
            if(element.position == dataEl.position){
                element.data = dataEl.data;
                element.lastActionId = dataEl.lastActionId;
            }
        });
    });
}

function getData(page = null){
    let data = {};
    const type = 'GETALL';
    appKey = APP_KEY;
    
    data['app'] = APP;
    data['courseKey'] = COURSE_KEY
    data['termCode'] = TERM_CODE;

    submitADORequest(type, data, userId, userKey, appKey, callback);
    function callback(response){
        
        GLOBAL_USER_DATA = response;

        if(response.length > 0){
            response.forEach(res => {
                if(res.userID == valenceUserData['Identifier']){
                    hasData = true;
                }
            });
            updateTranscriptModel(response);
            if(page == 'index'){
                load(response);
            }
        }

        if(page == 'instructorView'){
            setAllTrasncripts(response);
        }
        if(page == 'studentView'){
            setStudentTranscripts(response);
        }    
    }
}

function putData(userData){
    let data = {};
    const type = 'PUT';
    appKey = APP_KEY;

    data['app'] = APP;
    data['courseKey'] = COURSE_KEY
    data['termCode'] = TERM_CODE;

    data["data"] = JSON.stringify(userData);
    submitADORequest(type, data, userId, userKey, appKey, callback);
    function callback(response){
       
        hideOverlay(".loader-container");
        
        getData();
        displayMessage(response);
    }

}

function updateData(userData,id){
    let data = {};
    const type = 'UPDATE';
    appKey = APP_KEY;

    if(id)
    {
        data['id'] = id.toString();
    }
    data['app'] = APP;
    data['courseKey'] = COURSE_KEY
    data['termCode'] = TERM_CODE;
    data["data"] = JSON.stringify(userData);
   
    submitADORequest(type, data, userId, userKey, appKey, callback);
    function callback(response){
        
        hideOverlay(".loader-container");

        getData();
        displayMessage(response);
    }
}