class Transcript{
    constructor(title,username,position){
        this.title = title || null;
        this.username = username || 'user';
        this.position = position || null;
        this.actionList = null;
        this.transcriptText = "";
    }

    buildTranscript(actionList,currentHead){

        if(actionList == null){
            console.log('Missing List');
            return;
        }
        this.transcriptText = "";
        this.actionList = actionList;
        let localhead = this.actionList.head;

        if(currentHead != null){
            localhead = currentHead.next
        }
        
        console.log(currentHead);

        while(localhead){
            if(localhead.visited){
                if(localhead instanceof ActionDialogue){
                    if(!localhead.hasOwnProperty('inputText')){
                        this.transcriptText += "||" + localhead.name +": " +localhead.dialogueText + "||";
                    }
                }
                if(localhead instanceof ActionQuestion){
                    this.transcriptText += "||" + localhead.name +": " +localhead.question + "||";
                }
                if(localhead instanceof ActionAnswer){
                    this.transcriptText += "||" + localhead.name +": " + this.sanintize(localhead.inputText) + "||";
                    console.log(localhead.inputText);
                }
            }
            localhead = localhead.next;
        }
        //return this.escapeHTML(this.transcriptText);
        return this.transcriptText;
    }

    sanintize(string){
            return string.replace(/<(|\/|[^>\/bi]|\/[^>bi]|[^\/>][^>]+|\/[^>][^>]+)>/g, '');
    }

    escapeHTML(string){
        const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                "/": '&#x2F;',
            };
            const reg = /[&<>"'/]/ig;
            return string.replace(reg, (match)=>(map[match]));
    }

    static unescape(string){
        const map = {
            '&amp;': '&',
            '&amp;amp;lt;': '<',
            '&amp;amp;gt;': '/>',
            '&amp;quot;': '"',
            "&#x27;": "'",
            '&#x2F;': "/",
        }; 
        const reg = /&amp;quot;/ig;
            string = string.replace(reg, (match)=>(map[match]));
    }

}//end of class