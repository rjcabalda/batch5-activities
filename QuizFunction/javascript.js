let questions = [
    "What does HTML stand for?",
    "How many tags are in a regular element?",
    "What is the difference in an opening tag and a closing tag?",
    "< br  / > What type of tag is this?",
    "< body > Is this an opening tag or a closing tag?",
    "< / body > Is this an opening tag or a closing tag?",
    "Where is the meta tag only found?",
    "What is an element that does not have a closing tag called?",
    "Which of the following is an example of an empty element?",
    "What should values always be enclosed in?"];

let choices = [];
let answer;
let inputAnswer;
let randomIndex;

const currentQuestion = document.querySelector('.question');
const currentChoices = document.querySelectorAll('.choices');
const showScore1 = document.getElementById('score1');
const showScore2 = document.getElementById('score2');
const btmStart = document.getElementById('btnStart');
let numQuestion = 1;
let score = 0;
let input;
let streak = 0;
let byStreak = 5;



StartQuiz();

function next() {
    input = document.getElementById('input').value.toLowerCase();

    if (input === answer) {
        score++;
        streak++;

        if (streak === byStreak) {
            alert(byStreak + ' consecutive correct answer in a row!');
            byStreak += 5;
        }
    } else {
        streak = 0;
        byStreak = 5;
    }
    if (input === "exit") {
        showScore2.innerHTML = score;
        console.log("Score: " + score);
        document.querySelector('.startQuiz').classList.add('hide');
        document.querySelector('.endQuiz').classList.remove('hide');

    }
    showScore1.innerHTML = score;
    console.log("Score: " + score);
    document.getElementById('input').value = '';
    StartQuiz();

}
function StartQuiz() {
    randomIndex = Math.floor(Math.random() * questions.length);
    showScore1.innerHTML = score;
    console.log("Score: " + score);
    switch (questions[randomIndex]) {
        case questions[0]:
            answer = "a";
            choices = ["Hyper Text Markup Language", "Hot Mail", "How to Make Lasagna"];
            break;
        case questions[1]:
            answer = "a";
            choices = ["2", "1", "3"];
            break;
        case questions[2]:
            answer = "b";
            choices = ["Opening tag has a / in front", "Closing tag has a / in front", "There is no difference"];
            break;
        case questions[3]:
            answer = "a";
            choices = ["Break tag", "A broken one", "An opening tag"];
            break;
        case questions[4]:
            answer = "a";
            choices = ["Opening", "Closing"];
            break;
        case questions[5]:
            answer = "b";
            choices = ["Opening", "Closing"];
            break;
        case questions[6]:
            answer = "c";
            choices = ["The last page", "The second page", "The home page"];
            break;
        case questions[7]:
            answer = "c";
            choices = ["Tag", "Closed element", "Empty element"];
            break;
        case questions[8]:
            answer = "c";
            choices = ["< img / >", "< img > < / img >", "< / img>"];
            break;
        case questions[9]:
            answer = 'b';
            choices = ["Commas", "Quotation marks", "Parenthesis"];
            break;
    }
    currentQuestion.innerHTML = numQuestion + ". " + questions[randomIndex];
    for (const [i, choice] of currentChoices.entries()) {
        choice.innerHTML = " " + choices[i];

    }
    numQuestion++;

}

btmStart.addEventListener('click', () => {
    numQuestion = 1;
    score = 0;
    streak = 0;
    byStreak = 5;
    document.querySelector('.endQuiz').classList.add('hide');
    document.querySelector('.startQuiz').classList.remove('hide');
    StartQuiz();
});

