

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


function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
}
 console.log("1.) "+shuffle(cards));




function arrangeSuit(array){

        
        shuffle(array).sort(function(a,b){
           

            let x = a.toUpperCase(),
            y = b.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
        
        });
    
    return  array;

}
console.log("2.) "+arrangeSuit(cards));

function arrangeValue(array){
    let newArray=[];
        for( const a of array){
             newArray.push(a.slice(1));
        }

        function compare(a,b){
            return a-b;
        }
    let arrange =  newArray.sort(compare);

        return  arrange;
}
console.log("3.) "+arrangeValue(cards));

function dealCard(array){ 
    let randomIndex = Math.floor(Math.random() * (array.length + 1));
    let num = array[randomIndex].slice(1);
    let symbol = array[randomIndex].charAt(0);
    let symbolWord;
    let numWord;

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
    }

    return array[randomIndex]+": "+numWord+symbolWord;
}
 console.log("4.) "+dealCard(cards));



    