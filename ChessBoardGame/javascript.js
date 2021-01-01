
    let newFill;

    const empties = document.querySelectorAll('.empty');
    const blackpawn1 = document.querySelector('.black-pawn1');
    const blackpawn2 = document.querySelector('.black-pawn2');
    const blackpawn3 = document.querySelector('.black-pawn3');
    const blackpawn4 = document.querySelector('.black-pawn4');
    const blackpawn5 = document.querySelector('.black-pawn5');
    const blackpawn6 = document.querySelector('.black-pawn6');
    const blackpawn7 = document.querySelector('.black-pawn7');
    const blackpawn8 = document.querySelector('.black-pawn8');

    const blackrook1 = document.querySelector('.black-rook1');
    const blackrook2 = document.querySelector('.black-rook2');
    const blackbishop1 = document.querySelector('.black-bishop1');
    const blackbishop2 = document.querySelector('.black-bishop2');
    const blackhorse1 = document.querySelector('.black-horse1');
    const blackhorse2 = document.querySelector('.black-horse2');
    const blackking = document.querySelector('.black-king');
    const blackqueen = document.querySelector('.black-queen');  

    const whitepawn1 = document.querySelector('.white-pawn1');
    const whitepawn2 = document.querySelector('.white-pawn2');
    const whitepawn3 = document.querySelector('.white-pawn3');
    const whitepawn4 = document.querySelector('.white-pawn4');
    const whitepawn5 = document.querySelector('.white-pawn5');
    const whitepawn6 = document.querySelector('.white-pawn6');
    const whitepawn7 = document.querySelector('.white-pawn7');
    const whitepawn8 = document.querySelector('.white-pawn8');

    const whiterook1 = document.querySelector('.white-rook1');
    const whiterook2 = document.querySelector('.white-rook2');
    const whitebishop1 = document.querySelector('.white-bishop1');
    const whitebishop2 = document.querySelector('.white-bishop2');
    const whitehorse1 = document.querySelector('.white-horse1');
    const whitehorse2 = document.querySelector('.white-horse2');
    const whiteking = document.querySelector('.white-king');
    const whitequeen = document.querySelector('.white-queen');


    blackpawn1.addEventListener('dragstart', function (){newFill = blackpawn1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn1.addEventListener('dragend', function() {this.className= 'blackpawn1';});
    blackpawn2.addEventListener('dragstart', function (){newFill = blackpawn2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn2.addEventListener('dragend', function() {this.className= 'blackpawn2';});
    blackpawn3.addEventListener('dragstart', function (){newFill = blackpawn3;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn3.addEventListener('dragend', function() {this.className= 'blackpawn3';});
    blackpawn4.addEventListener('dragstart', function (){newFill = blackpawn4;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn4.addEventListener('dragend', function() {this.className= 'blackpawn4';});
    blackpawn5.addEventListener('dragstart', function (){newFill = blackpawn5;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn5.addEventListener('dragend', function() {this.className= 'blackpawn5';});
    blackpawn6.addEventListener('dragstart', function (){newFill = blackpawn6;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn6.addEventListener('dragend', function() {this.className= 'blackpawn6';});
    blackpawn7.addEventListener('dragstart', function (){newFill = blackpawn7;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn7.addEventListener('dragend', function() {this.className= 'blackpawn7';});
    blackpawn8.addEventListener('dragstart', function (){newFill = blackpawn8;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackpawn8.addEventListener('dragend', function() {this.className= 'blackpawn8';});

    

    blackrook1.addEventListener('dragstart', function (){newFill = blackrook1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackrook1.addEventListener('dragend', function() {this.className= 'blackrook1';});
    blackrook2.addEventListener('dragstart', function (){newFill = blackrook2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackrook2.addEventListener('dragend', function() {this.className= 'blackrook2';});
    blackbishop1.addEventListener('dragstart', function (){newFill = blackbishop1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackbishop1.addEventListener('dragend', function() {this.className= 'blackbishop1';});
    blackbishop2.addEventListener('dragstart', function (){newFill = blackbishop2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackbishop2.addEventListener('dragend', function() {this.className= 'blackbishop2';});
    blackhorse1.addEventListener('dragstart', function (){newFill = blackhorse1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackhorse1.addEventListener('dragend', function() {this.className= 'blackhorse1';});
    blackhorse2.addEventListener('dragstart', function (){newFill = blackhorse2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackhorse2.addEventListener('dragend', function() {this.className= 'blackhorse2';})
    blackking.addEventListener('dragstart', function (){newFill = blackking;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackking.addEventListener('dragend', function() {this.className= 'blackking';});
    blackqueen.addEventListener('dragstart', function (){newFill = blackqueen;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    blackqueen.addEventListener('dragend', function() {this.className= 'blackqueen';});

    whitepawn1.addEventListener('dragstart', function (){newFill = whitepawn1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn1.addEventListener('dragend', function() {this.className= 'whitepawn1';});
    whitepawn2.addEventListener('dragstart', function (){newFill = whitepawn2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn2.addEventListener('dragend', function() {this.className= 'whitepawn2';});
    whitepawn3.addEventListener('dragstart', function (){newFill = whitepawn3;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn3.addEventListener('dragend', function() {this.className= 'whitepawn3';});
    whitepawn4.addEventListener('dragstart', function (){newFill = whitepawn4;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn4.addEventListener('dragend', function() {this.className= 'whitepawn4';});
    whitepawn5.addEventListener('dragstart', function (){newFill = whitepawn5;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn5.addEventListener('dragend', function() {this.className= 'whitepawn5';});
    whitepawn6.addEventListener('dragstart', function (){newFill = whitepawn6;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn6.addEventListener('dragend', function() {this.className= 'whitepawn6';});
    whitepawn7.addEventListener('dragstart', function (){newFill = whitepawn7;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn7.addEventListener('dragend', function() {this.className= 'whitepawn7';});
    whitepawn8.addEventListener('dragstart', function (){newFill = whitepawn8;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitepawn8.addEventListener('dragend', function() {this.className= 'whitepawn8';});

    whiterook1.addEventListener('dragstart', function (){newFill = whiterook1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whiterook1.addEventListener('dragend', function() {this.className= 'whiterook1';});
    whiterook2.addEventListener('dragstart', function (){newFill = whiterook2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whiterook2.addEventListener('dragend', function() {this.className= 'whiterook2';});
    whitebishop1.addEventListener('dragstart', function (){newFill = whitebishop1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitebishop1.addEventListener('dragend', function() {this.className= 'whitebishop1';});
    whitebishop2.addEventListener('dragstart', function (){newFill = whitebishop2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitebishop2.addEventListener('dragend', function() {this.className= 'whitebishop2';});
    whitehorse1.addEventListener('dragstart', function (){newFill = whitehorse1;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitehorse1.addEventListener('dragend', function() {this.className= 'whitehorse1';});
    whitehorse2.addEventListener('dragstart', function (){newFill = whitehorse2;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitehorse2.addEventListener('dragend', function() {this.className= 'whitehorse2';})
    whiteking.addEventListener('dragstart', function (){newFill = whiteking;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whiteking.addEventListener('dragend', function() {this.className= 'whiteking';});
    whitequeen.addEventListener('dragstart', function (){newFill = whitequeen;this.className += ' hold';setTimeout(() => this.className = 'invisible', 0);});
    whitequeen.addEventListener('dragend', function() {this.className= 'whitequeen';});

for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//function of move pieces
function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    // this.className += ' hovered';
}

function dragLeave(){
    // this.className = 'empty';
    
}

function dragDrop(){
    if(this.getElementsByTagName('*').length > 0){
        console.log(this.getElementsByTagName('*').length);
    }
    else{   
        this.append(newFill);
        console.log(this.getElementsByTagName('*').length);
    }
    
    
}

window.onload = () => {
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
    
    let intervalId = null;
    
    function startTimer() {
      ++totalSeconds;
      hour = Math.floor(totalSeconds /3600);
      minute = Math.floor((totalSeconds - hour*3600)/60);
      seconds = totalSeconds - (hour*3600 + minute*60);
  
      document.getElementById("hour").innerHTML =hour;
      document.getElementById("minute").innerHTML =minute;
      document.getElementById("seconds").innerHTML =seconds;
    }
  
    document.getElementById('start-btn').addEventListener('click', () => {
      intervalId = setInterval(startTimer, 1000);
    })
    
    document.getElementById('stop-btn').addEventListener('click', () => {
      if (intervalId)
        clearInterval(intervalId);
    });
    
     
    document.getElementById('reset-btn').addEventListener('click', () => {
       totalSeconds = 0;
       document.getElementById("hour").innerHTML = '0';
       document.getElementById("minute").innerHTML = '0';
       document.getElementById("seconds").innerHTML = '0';
    });
  }