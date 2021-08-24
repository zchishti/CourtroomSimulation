let value = 1;
let eyeWitnessId = 1;
let expertWitnessId = 1;
let actionListStart = new ActionList(backgroundMusic);
let actionListEyeWitness = new ActionList();
let actionListExpertWitness = new ActionList();

actionListStart.append(new ActionDialogue("","images/Background/UCO_Logo2.png",null,null,100,value++));
actionListStart.append(new ActionBranch("images/Background/intro_BG.jpg",null,
[
    {
        "html":"<h1 class='heading center'>Courtroom Simulator</h1>"
    },
    {
        "html": "<button class='btn btn-primary btn-start center_bottom' style='height: 3rem; width: 12rem; margin-left:-6rem'>Start</button>"
    }
],"center_bottom",true,100,value++));
actionListStart.append(new ActionBranch("images/Background/Background_during_player_selection.jpg",null,
[
    {
        "image":"images/Characters/CharacterCard/EyeWitnessCard.png",
        "dimension":{
            "height":"22rem",
            "width": "13rem"
        },
        "margin":"10",
        "title":"Eye Witness",
        "position" : "Crime Scene Tech",
        "nextNode": actionListEyeWitness
    },
    {
        "image":"images/Characters/CharacterCard/ExpertWitnessCard.png",
        "dimension":{
            "height":"22rem",
            "width": "13rem"
        },
        "margin":"-10",
        "title":"Expert Witness",
        "position" : "Lab Examiner",
        "nextNode":actionListExpertWitness
    }
    
],"center",true));

actionListExpertWitness.append(new ActionQuestion("Please raise your right hand. Do you solemnly swear that the testimony you are about to give in the case pending before this court shall be the truth, the whole truth, and nothing but the truth, so help you God?","images/Background/Judgetable.png","Bailiff","images/Characters/Bailiff.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("be seated.","images/Background/Judgetable.png","Bailiff","images/Characters/Bailiff.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionQuestion("Please state your name, and spell your last name for the record.","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Are you employed?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("And who do you work for?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What do you do for the Oklahoma State Bureau of Investigation?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Would you describe for the jury what a Firearm and Tool Marks Examiner does exactly?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("How long have you worked as a firearms and tool marks examiner for OSBI?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What is your formal education; in other words what degrees do you hold?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Which undergraduate school did you attend?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What degree or degrees did you obtain there?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What was your major field of study?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Which graduate school did you attend?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What was your particular area of study?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("During your time at UCO, did you participate in any internships?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Who did you intern with, and what exactly were your duties?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Did your graduate field of study require a thesis?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What subject did you do your thesis on?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Did you successfully defend your thesis?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Did you publish the results of your thesis in any books or journals?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What did you do after you graduated from UCO with your Masters in Forensic Science?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What year was that?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("And you have worked for OSBI as a Firearms and Tool Marks Examiner ever since, is that correct?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("With OSBI, did you receive any additional training in Firearms and Toolmarks?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Do you hold any professional certifications?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("And what were the requirements to become certified by the Association of Firearm and Tool Mark Examiners?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("So, how many years have you been a certified Firearm and Tool Marks Examiner with OSBI?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("And during those 12 years, have you ever been asked to compare two projectiles to determine if they were fired from the same firearm?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("How many times?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("During that time, have you ever testified as an expert witness in state court regarding your conclusions from such examinations?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("In all the times you have been called as a witness in state and federal court, have you ever once not been recognized by the court as an expert witness?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Have you ever published any articles or books on the topic of firearm and tool mark identification?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("What were those publications?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("And where do you teach?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Have you ever received any awards for your work as a Firearm and Tool Mark Examiner?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Expert Witness","images/Characters/Expert_Witness_02.png",100));
actionListExpertWitness.append(new ActionQuestion("Your honor, at this time i offer this witness as an expert in the field of firearm and tool mark comparisons.","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",expertWitnessId++,100));
actionListExpertWitness.append(new ActionDialogue("Very well. Ms. Defense Attorney, do you have any questions for the witness on voir dire?","images/Background/JudgeTable.png","Judge","images/Characters/Judge_02.png",100));
actionListExpertWitness.append(new ActionDialogue("No your honor.","images/Background/ProcecutorView.png","Defense Attorney","images/Characters/Defense_Attorney.png",100));
actionListExpertWitness.append(new ActionDialogue("Ok. The court finds that this witness is qualified as an expert in the field of firearms and toolmarks analysis and will be allowed to testify as such, including testimony concerning her expert opinion on matters within her area of expertise.","images/Background/JudgeTable.png","Judge","images/Characters/Judge_02.png",100));
actionListExpertWitness.append(new ActionCredit("images/Background/background_black.png",null,"Refresh the browser to start the simulation for the other character.","center",100));

actionListEyeWitness.append(new ActionQuestion("Please raise your right hand. Do you solemnly swear that the testimony you are about to give in the case pending before this court shall be the truth, the whole truth, and nothing but the truth, so help you God?","images/Background/Judgetable.png","Bailiff","images/Characters/Bailiff.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Be seated.","images/Background/Judgetable.png","Bailiff","images/Characters/Bailiff.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionQuestion("Please state your name, and spell your last name for the record.","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Are you employed?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("And who do you work for?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("What do you do for the Edmond Police Department?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Would you describe for the jury what a scene technician does?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("How long have you worked as a scene technician?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("And in the 10 years that you have worked as a scene technician for the Edmond Police Department, about how many scenes would you say you have processed?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("And of those 400 scenes you have investigated, about how many of those involved shooting incidents?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Would you consider yourself an experienced scene technician?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Were you on duty the evening of july 10, 2015?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("And while on duty on july 10, were you instructed to respond to a reported incident in the alley behind the Santa Fe Ice House on North Boulevard avenue?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("And what time did you arrive?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("What did you do when you first got there?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Can you briefly describe the scene for the jury?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Did you process this scene?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("In the course of processing this scene, did you prepare a list of evidence that was found?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("And does this list of evidence have a name?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("I show you what has been previously marked as Government Exhibit 14. do you recognize this document?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("What is this document?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Did you prepare this evidence log?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Would you please read the description of item 4 on that evidence log to the jury?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Did you collect that at the scene?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("When you collected this item at the scene, what did you do with it?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Would you recognize that if you saw it again?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("I now hand you a firearm which is unloaded and rendered safe. Please look at it carefully and tell the jury if you recognize it.","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Is that the weapon you collected at the scene behind the Santa Fe Ice House on july 14, 2015?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("How do you know for sure?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionQuestion("Does it appear to be in the same condition as when you found it?","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",eyeWitnessId++,100));
actionListEyeWitness.append(new ActionAnswer("","images/Background/Final-WitnessView-B_02.png","Eye Witness","images/Characters/Eye_Witness_02.png",100));
actionListEyeWitness.append(new ActionDialogue("Your honor, I now offer this firearm into evidence as Government Exhibit 30.","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",100));
actionListEyeWitness.append(new ActionDialogue("Any objections? None? Then the item is admitted into evidence as Government Exhibit 30.","images/Background/JudgeTable.png","Judge","images/Characters/Judge_02.png",100));
actionListEyeWitness.append(new ActionDialogue("Thank you your honor, I have no further questions for this witness.","images/Background/ProcecutorView.png","Prosecutor","images/Characters/Prosecutor.png",100));
actionListEyeWitness.append(new ActionDialogue("Very well. Ms. Defense Attorney, you may now cross-examine the witness.","images/Background/JudgeTable.png","Judge","images/Characters/Judge_02.png",100));
actionListEyeWitness.append(new ActionDialogue("No questions your honor.","images/Background/ProcecutorView.png","Defense Attorney","images/Characters/Defense_Attorney.png",100));
actionListEyeWitness.append(new ActionDialogue("Very well. Thank you officer, you are excused.","images/Background/JudgeTable.png","Judge","images/Characters/Judge_02.png",100));
actionListEyeWitness.append(new ActionCredit("images/Background/background_black.png",null,"Refresh the browser to start the simulation for the other character.","center",100));

actionListStart.setCurrentNode();
actionListEyeWitness.setCurrentNode();
actionListExpertWitness.setCurrentNode();
