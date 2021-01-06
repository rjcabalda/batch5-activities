

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

function arrangeValue(cards, order) {
    let arr = cards;
    let newArr = arr.map((element) => {
      switch (element.slice(1, 3)) {
        case "A":
          return element.slice(0, 1) + "1";
        case "J":
          return element.slice(0, 1) + "11";
        case "Q":
          return element.slice(0, 1) + "12";
        case "K":
          return element.slice(0, 1) + "13";
        default:
          return element;
      }
    });
    if (order === "descending") {
      for (let i = 0; i < newArr.length; i++) {
        for (let k = 0; k < newArr.length; k++) {
          if (
            parseInt(newArr[k]?.slice(1, 3)) <
            parseInt(newArr[k + 1]?.slice(1, 3))
          ) {
            let temp = newArr[k];
            newArr[k] = newArr[k + 1];
            newArr[k + 1] = temp;
          }
        }
      }
    } else {
      for (let i = 0; i < newArr.length; i++) {
        for (let k = 0; k < newArr.length; k++) {
          if (
            parseInt(newArr[k]?.slice(1, 3)) >
            parseInt(newArr[k + 1]?.slice(1, 3))
          ) {
            let temp = newArr[k];
            newArr[k] = newArr[k + 1];
            newArr[k + 1] = temp;
          }
        }
      }
    }

    arr = newArr.map((element) => {
      switch (element.slice(1, 3)) {
        case "1":
          return element.slice(0, 1) + "A";
        case "11":
          return element.slice(0, 1) + "J";
        case "12":
          return element.slice(0, 1) + "Q";
        case "13":
          return element.slice(0, 1) + "K";
        default:
          return element;
      }
    });
    return arr;
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

