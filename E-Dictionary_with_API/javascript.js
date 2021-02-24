const word_search = document.querySelector('.search');
const clear_btn = document.querySelector('.clear');
const search_btn = document.querySelector('.search_btn');
const hword = document.querySelector('.hword');
const dom_fl = document.querySelector('.fl');
const word_syllables = document.querySelector('.word-syllables');
const prs = document.querySelector('.prs');
const vg_ins = document.querySelector('.vg-ins');
const def = document.querySelector('.def');
const vg = document.querySelector('.vg');
const other_word = document.querySelector('.other_word_anchor');
const sentence = document.querySelector('.sentence');
const Display = document.querySelector('.Display');

function clear() {
    hword.innerHTML = '';
    dom_fl.innerHTML = '';
    word_syllables.innerHTML = '';
    prs.innerHTML = '';
    vg_ins.innerHTML = '';
    def.innerHTML = '';
    def.innerHTML = '';
    vg.innerHTML = '';
    other_word.innerHTML = '';
    sentence.innerHTML = '';
    Display.innerHTML = '';
}
function errorDisplay(word) {
    Display?.classList.remove('invisible');
    let display = `
    <h1 class="break-text breakText"><em>${word}</e> is not in the system</h1>
    <p>Sorry, the word you’re looking for can’t be found in the dictionary.</p>
    `;
    Display.innerHTML = display;

}
function loading() {
    Display?.classList.remove('invisible');
    let loadingProgress =
        `<div class="loadingContainer">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
        </div>`;
    Display.innerHTML = loadingProgress;
}
function maintenanceDisplay() {
    Display?.classList.remove('invisible');
    let display = `
    <h1 class='alert alert-warning'>System Error</h1>
    <p class="alert alert-danger">Ops, something went wrong!</p>
    `;
    Display.innerHTML = display;
}
function fetchData(word) {
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=3ae00837-0e93-442b-8dd4-f3e64ced8c48`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    )
        .then(result => {
            return result.json()

        })
        .then(datas => {
            Display?.classList.add('invisible');
            Display.innerHTML = '';
            if (datas != '') {
                let definitions = datas[0].shortdef;
                if (definitions) {
                    let word = datas[0].meta.id;
                    let fl = datas[0].fl;
                    let hw = datas[0].hwi.hw;
                    let hwi = datas[0].hwi.prs;
                    let ins = datas[0].ins
                    let ins_l = parseInt(ins?.length) - 1;
                    let new_prs = "| \\ "
                    let new_ins = '';
                    let new_def = '';

                    if (datas[0].ins) {
                        for (const [i, data] of ins.entries()) {
                            if (data.il) {
                                new_ins += ` <span class="if">${data.il.replace(/\*/g, '')};</span>`;
                            }
                            if (i === ins_l) {
                                new_ins += `<span class="if">${data.if.replace(/\*/g, '')}</span>`;
                            } else {
                                new_ins += `<span class="if">${data.if.replace(/\*/g, '')};</span>`;
                            }

                        }
                    }
                    for (const hw of hwi) {
                        new_prs += `${hw.mw} `;
                    }
                    for (const [i, definition] of definitions.entries()) {
                        new_def += `
                        <div>
                              <span class="num">${parseInt(i) + 1}</span>
                                <span class="dtText">:${definition}</span>
                            </div>
                        `
                    }
                    if (datas[0].uros) {
                        let new_other = '';
                        for (const other of datas[0].uros) {
                            new_other += `<span>${other.ure.replace(/\*/g, '')} <em>${other.fl.replace(/\*/g, '')} </em></span>`
                        }
                        other_word.innerHTML += ` <h2 class="other_word">Other word for <em>${word}</em></h2>`;
                        other_word.innerHTML += new_other;
                    } else {
                        other_word.innerHTML = '';
                    }
                    if (datas[0].quotes) {
                        let new_quotes = ''
                        sentence.innerHTML += `<h2>Example of <em>${word}</em> in a Sentence</h2>`;
                        for (const [i, quotes] of datas[0].quotes.entries()) {

                            new_quotes += `
                        <div>
                              <span class="num">${parseInt(i) + 1}.</span>
                                <span class="dtText"> ${quotes.t}</span>
                            </div>
                        `
                        }
                        sentence.innerHTML += new_quotes.replace('{qword}', '<em>').replace('{/qword}', '</em>')
                    } else {
                        sentence.innerHTML = '';
                    }
                    hword.innerHTML = `<h2>Definition of <em>${word}</em></h2>`;
                    dom_fl.innerHTML = fl;
                    word_syllables.innerHTML = hw;
                    prs.innerHTML = `${new_prs} \\`;
                    vg_ins.innerHTML = new_ins;
                    def.innerHTML += `<em> ${word}</em>`;
                    vg.innerHTML = new_def;
                } else {
                    let suggest = '';
                    for (const data of datas) {
                        suggest += `
                        <div class="suggest">
                            <span class='suggest_btn'>${data}</span>
                        </div>
                        `;
                    }
                    def.innerHTML = suggest;
                    const suggest_btn = document.querySelectorAll('.suggest_btn');
                    console.log('False')
                    if (suggest_btn) {
                        for (const sug_btn of suggest_btn) {
                            sug_btn.addEventListener('click', function () {
                                clear();
                                fetchData(this.innerHTML)
                            });
                        }
                    }
                }

            }
            else {
                clear();
                errorDisplay(word);
                console.log('This word has no data');
            }


        })
        .catch(error => {
            maintenanceDisplay();
            // console.log('Error here:' + error)
            // return error
        })

}
search_btn.addEventListener('click', () => {

    if (word_search.value !== '') {
        clear();
        loading();
        fetchData(word_search.value);
    } else {
        alert('You must input a word');
    }

});
clear_btn.addEventListener('click', function () {
    word_search.value = '';
    clear_btn.classList.add('invisible');
})
word_search.addEventListener('input', () => {
    if (word_search.value != '') {
        clear_btn.classList.remove('invisible');
    }
    else {
        clear_btn.classList.add('invisible');
    }
});


