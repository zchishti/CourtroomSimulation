class LinkedList{
    constructor(){
        this.head = null;
    }

    append(node){
        if(!this.tail){
            this.head = this.tail = node;
        }else{
            let oldTail = this.tail;
            this.tail = node;
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }

    prepend(node){
        if(!this.head){
            this.head = this.tail = node;
        }else{
            let oldHead = this.head;
            this.head = node;
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }

    deleteHead(){
        if(!this.head){
            return null;
        }else{
            let removeHead = this.head;
            if(this.head === this.tail){
                this.head = this.tail = null;
            }else{
                this.head =  this.head.next;
                this.head.prev = null;
            }

            return removeHead.value;
        }
    }

    deleteTail(){
        if(!this.tail){
            return null;
        }else{
            let removeTail = this.tail;

            if(this.head === this.tail){
                this.head = this.tail = null;
            }else{
                this.tail = this.tail.prev;
                this.tail.next = null;
            }

            return removeTail.value;
        }
    }
    
    search(value){
        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }else{
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }

}

class Node{
    constructor(value, prev, next){
        this.value = value || null;
        this.prev = prev || null;
        this.next = next ||null;
        this.visited = false;
    }
}

class Action extends Node{
    constructor(background, character, timer, value, prev, next){
        super(value, prev, next);
        this.background = background || null;
        this.character = character || null;
        this.timer = timer || 100;
    }
}

class ActionDialogue extends Action{
    constructor(dialogueText, background, name, character, timer, value, prev, next){
        super(background, character, timer, value, prev, next);
        this.dialogueText = dialogueText || null;
        this.name = name || null;
    }
}

class ActionQuestion extends Action{
    constructor(question, background, name, character, questionId, timer, prev, next){
        super(background, character, timer, null, prev, next);
        this.question = question || null;
        this.questionId = questionId || null;
        this.name = name || null;
    }
}

class ActionAnswer extends ActionDialogue{
    constructor(dialogueText, background, name, character, timer, value, prev, next){
        super(dialogueText, background, name, character, timer, value, prev, next);
        this.inputText = '';
        this.inputHTML = '<div class="form-group answer-group">' +
                            '<label for="answerText">Answer</label>' +
                            '<textarea class="form-control" name="answerInput" id="answerInput" rows="3" placeholder="Answer Text">'+this.inputText+'</textarea>'+
                            '<small class="error_text"></small>'+
                            '<button class="btn btn-primary ans-submit">Submit</button>'+
                            '<span id="word_count"></span>'+                        
                          '</div>';
    }
    updateInput(){
        this.inputHTML = '<div class="form-group answer-group">' +
                            '<label for="answerText">Answer</label>' +
                            '<textarea class="form-control" name="answerInput" id="answerInput" rows="3" placeholder="Answer Text">'+this.inputText+'</textarea>'+
                            '<small class="error_text"></small>'+
                            '<button class="btn btn-primary ans-submit">Submit</button>'+
                            '<span id="word_count"></span>'+                        
                          '</div>';
    }
}

class ActionBranch extends Action{
    constructor(background, character, assets, position, clickable, timer, value, prev, next){
        super(background, character, timer, value, prev, next);
        this.position = position || "center";
        this.assets = assets || null;
        this.clickable = clickable || false;
    }
}

class ActionCredit extends Action{
    constructor(background, character, text, textPosition, timer, value, prev, next){
        super(background,character,timer,value,prev,next);
        this.text = text || null;
        this.textPosition = textPosition || "center";
    }
}

class ActionList extends LinkedList{
    constructor(backgroundMusic){
        super();
        this.currentNode = null;
        this.backgroundMusic = backgroundMusic || null;
    }

    next(){
        if(!this.head){
            return null;
        }else{
            if(this.currentNode.next){
                this.currentNode = this.currentNode.next;
            }
            return this.currentNode;
        }
    }

    previous(){
        if(!this.tail){
            return null;
        }else{
            if(this.currentNode.prev){
                this.currentNode = this.currentNode.prev;
            }
            return this.currentNode;
        }
    }

    setCurrentNode(){
        this.currentNode = this.head;
    }

    countNodeofType(type){
        
        if(this.currentNode == null){
            return;
        }

        let cursor = this.currentNode;
        let localCount = 0;
        while(cursor){
            if(cursor instanceof type){
                localCount++;
            }
           cursor = cursor.next;
        }
        cursor = null;
        return localCount;

    }

}