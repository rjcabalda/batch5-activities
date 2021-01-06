

let cards = [
'♠A','♡A','♢A','♣A',
'♠2','♡2','♢2','♣2',
'♠3','♡3','♢3','♣3',
'♠4','♡4','♢4','♣4',
'♠5','♡5','♢5','♣5',
'♠6','♡6','♢6','♣6',
'♠7','♡7','♢7','♣7',
'♠8','♡8','♢8','♣8',
'♠9','♡9','♢9','♣9',
'♠10','♡10','♢10','♣10',
'♠J','♡J','♢J','♣J',
'♠Q','♡Q','♢Q','♣Q',
'♠K','♡K','♢K','♣K',
];
// let cards = [
//     '♠A','♡A','♢A','♣A',
//     '♠2','♡2','♢2','♣2'
//     ];

let reshuffle = [];
let history = [];

let deal5 = [];

let dealIndex;
let popped;

let num;

let symbol
let symbolWord;
let numWord;
let currentState;
let prev;

reshuffle = [...shuffle(cards)];
document.getElementById('cards').innerHTML = reshuffle;
document.getElementById('numCard').innerHTML = reshuffle.length;
document.getElementById('currentDeal').innerHTML = "Please deal a card.";

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
}

function nameCard(symbol,num){
    switch(symbol){
        case "♠":
                symbolWord = "Spades"
                break;
        case "♡":
                symbolWord = "Hearts"
                break;
        case "♢":
                symbolWord = "Diamonds"
                break;
        case "♣":
                symbolWord = "Clubs"
                break;        
    }
    
    switch(num){
        case "A":
            numWord = "Ace of ";
        break;
    
        case "2":
            numWord = "Two of ";
        break;
    
        case "3":
            numWord = "Three of ";
        break;
    
        case "4":
            numWord = "Four of ";
        break;
    
        case "5":
            numWord = "Five of ";
        break;
    
        case "6":
            numWord = "Six of ";
        break;
    
        case "7":
            numWord = "Seven of ";
        break;   
        
        case "8":
            numWord = "Eight of ";
        break;
        
        case "9":
            numWord = "Nine of ";
        break; 
    
        case "10":
            numWord = "Ten of ";
        break; 
    
        case "J":
            numWord = "Jack of ";
        break; 
    
        case "Q":
            numWord = "Queen of ";
        break; 
    
        case "K":
            numWord = "King of ";
        break; 
        default:
            
    }
    return numWord,symbolWord;
}


document.getElementById('prev').addEventListener('click', function(){
    
    
    if(currentState > 0){
        currentState = currentState - 1;
        prev = history[currentState];
        num = prev.slice(1);
        symbol = prev.charAt(0);
        nameCard(symbol,num);
        if(currentState == 0){
            document.getElementById('prev').disabled = true;
            document.getElementById('next').disabled = false;
        }
        else{
            document.getElementById('next').disabled = false;
        }
    }
    document.getElementById('currentDeal').innerHTML = "("+prev+") "+numWord+symbolWord;
    document.getElementsByClassName('currentIcon')[0].innerHTML = symbol;
    document.getElementsByClassName('currentIcon')[1].innerHTML = symbol;
    document.getElementsByClassName('currentNum')[0].innerHTML = num;
    document.getElementsByClassName('currentNum')[1].innerHTML = num;
    document.getElementById('currentSuit').innerHTML = symbol;
     
});

document.getElementById('next').addEventListener('click', function(){
    currentState = currentState + 1;
    // console.log(currentState +" "+  history.length);
    if(currentState > -1){
        
        prev = history[currentState];
        num = prev.slice(1);
        symbol = prev.charAt(0);
        nameCard(symbol,num);
        
        document.getElementById('currentDeal').innerHTML = "("+prev+") "+numWord+symbolWord;

        document.getElementsByClassName('currentIcon')[0].innerHTML = symbol;
        document.getElementsByClassName('currentIcon')[1].innerHTML = symbol;
        document.getElementsByClassName('currentNum')[0].innerHTML = num;
        document.getElementsByClassName('currentNum')[1].innerHTML = num;
        document.getElementById('currentSuit').innerHTML = symbol;
        if((currentState+1) == history.length ){
            document.getElementById('next').disabled = true;
            document.getElementById('prev').disabled = false;
        }
        else {
            document.getElementById('prev').disabled = false;
        }
    } 
});
document.getElementById('deal').addEventListener('click', function(){
    
    currentState = history.length;
    dealIndex = reshuffle.length;
    if(currentState > 0){
        document.getElementById('prev').disabled = false;
    }
    

    if(dealIndex > 0 && currentState > -1){
        popped = reshuffle.pop();
        history.push(popped);
        num = popped.slice(1);
        symbol = popped.charAt(0);
        nameCard(symbol,num);
        document.getElementById('numCard').innerHTML = dealIndex-1;
        document.getElementById('cards').innerHTML = reshuffle;
        document.getElementById('history').innerHTML = history;
        document.getElementById('currentDeal').innerHTML = "("+popped+") "+numWord+symbolWord;

        document.getElementsByClassName('currentIcon')[0].innerHTML = symbol;
        document.getElementsByClassName('currentIcon')[1].innerHTML = symbol;
        document.getElementsByClassName('currentNum')[0].innerHTML = num;
        document.getElementsByClassName('currentNum')[1].innerHTML = num;
        document.getElementById('currentSuit').innerHTML = symbol;
        document.getElementById('currentCard').style.background='white';
    }
    else{
        document.getElementById('currentDeal').innerHTML = "No Card left. Please Reshuffle.";
        document.getElementsByClassName('currentIcon')[0].innerHTML = "";
        document.getElementsByClassName('currentIcon')[1].innerHTML = "";
        document.getElementsByClassName('currentNum')[0].innerHTML = "";
        document.getElementsByClassName('currentNum')[1].innerHTML = "";
        document.getElementById('currentSuit').innerHTML = "";
        document.getElementById('deal').disabled = true;
    }
    
});
document.getElementById('shuffle').addEventListener('click', function(){

    
    if(reshuffle.length == 0){
        reshuffle = [...shuffle(cards)];
        history = [];
        document.getElementById('cards').innerHTML = reshuffle;
        document.getElementById('numCard').innerHTML = reshuffle.length;
        document.getElementById('history').innerHTML = history;
        document.getElementById('currentDeal').innerHTML = "";
        document.getElementById('deal').disabled = false;
        document.getElementById('prev').disabled = true;
        document.getElementById('next').disabled = true;

        document.getElementsByClassName('currentIcon')[0].innerHTML = "";
        document.getElementsByClassName('currentIcon')[1].innerHTML = "";
        document.getElementsByClassName('currentNum')[0].innerHTML = "";
        document.getElementsByClassName('currentNum')[1].innerHTML = "";
        document.getElementById('currentSuit').innerHTML = "";

        document.getElementById('currentCard').style.backgroundImage = "url('https://i.pinimg.com/originals/74/0b/df/740bdfde43a6acc7dd91ae8818ad4f7d.jpg')";
        document.getElementById('currentCard').style.backgroundRepeat = "no-repeat";
        document.getElementById('currentCard').style.backgroundSize = "cover";
    }
    else{
        document.getElementById('cards').innerHTML = shuffle(reshuffle);
        document.getElementById('history').innerHTML = history;
        
    }
});