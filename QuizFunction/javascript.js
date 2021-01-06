let questions= [
    "What does HTML stand for?",
    "How many tags are in a regular element?",
    "what is the difference in an opening tag and a closing tag?",
    "< br  / > What type of tag is this?",
    "< body > Is this an opening tag or a closing tag?",
    "< / body > Is this an opening tag or a closing tag?",
    "Where is the meta tag only found?", 
    "What is an element that does not have a closing tag called?",
    "Which of the following is an example of an empty element?",
    "What should values always be enclosed in?"



];

let choices=[];
let answer;
let inputAnswer;
let randomIndex = Math.floor(Math.random() * questions.length);



function question(){

    console.log("Question: "+questions[randomIndex]);

    switch(questions[randomIndex]){
        case questions[0]:
            answer= 0 ;
            choices= ["Hyper Text Markup Language","Hot Mail","How to Make Lasagna"];
            break;
        case questions[1]:
           answer =0;
           choices = ["2","1","3"];
            break;
        case questions[2]:
            answer = 1;
            choices = ["Opening tag has a / in front","Closing tag has a / in front","There is no difference"];
            break; 
        case questions[3]:
            answer = 0;
            choices = ["Break tag","A broken one","An opening tag"];
            break; 
        case questions[4]:
            answer = 0;
            choices = ["Opening","Closing"];
            break; 
        case questions[5]:
            answer = 1;
            choices = ["Opening","Closing"];
            break; 
        case questions[6]:
            answer = 1;
            choices = ["The last page","The home page","The second page"];
            break;   
        case questions[7]:
            answer = 1;
            choices = ["Tag","Empty element","Closed element"];
            break;
        case questions[8]:
            answer = 2;
            choices = ["< img / >","< img > < / img >","< / img>"];
            break;   
        case questions[9]:
            answer = 0;
            choices = ["Quotation marks","Commas","Parenthesis"];
            break;        
            
    }
    
     for(let i=0; i < choices.length; i++){
         console.log((i+1)+": "+choices[i]);
     }

}

function checkAnswer(input){    
    if(input === (answer+1).toString()){
        console.log("Your answer is correct.");
    }else{
        console.log("Your answer is wrong.");
    }

}

question();
inputAnswer  = window.prompt("Input your answer:");
checkAnswer(inputAnswer);


