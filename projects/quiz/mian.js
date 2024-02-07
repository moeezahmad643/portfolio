let data;
let questionNumber = 0;
let TrueAnswer = 0;
function startQuiz() {

    document.getElementById('button').setAttribute('style', 'display:none;')
    document.getElementById('card').setAttribute('style', 'display:block;')

    setData()
}
async function setData() {
    let res = await fetch('https://quizapi.io/api/v1/questions?apiKey=leoTbSfnle6wr8bBp6KQjdwEbkpCTF9sMA3A1VTJ&category=code&difficulty=Easy&limit=20&tags=HTML')
    data = await res.json()
    showquestion(questionNumber)
}
function showquestion(questionNumber) {
    // console.log(questionNumber);
    if (questionNumber == 19) {
        showResult()
    }

    element = data[questionNumber]
    document.getElementById('option1').style = null
    document.getElementById('option2').style = null
    document.getElementById('option3').style = null
    document.getElementById('option4').style = null
    document.getElementById('option5').style = null
    document.getElementById('option6').style = null


    // console.log(element);
    document.getElementById('question').innerHTML = element.question.replace(/</g, "&lt;")
    document.getElementById('option1').innerHTML = element.answers.answer_a ? element.answers.answer_a.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'empty'
    document.getElementById('option2').innerHTML = element.answers.answer_b ? element.answers.answer_b.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'empty'
    document.getElementById('option3').innerHTML = element.answers.answer_c ? element.answers.answer_c.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'empty'
    document.getElementById('option4').innerHTML = element.answers.answer_d ? element.answers.answer_d.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'empty'
    document.getElementById('option5').innerHTML = element.answers.answer_e ? element.answers.answer_e.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'empty'
    document.getElementById('option6').innerHTML = element.answers.answer_f ? element.answers.answer_f.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'empty'

    document.getElementById('option1').setAttribute('onclick', `check(this,${element.correct_answers.answer_a_correct})`)
    document.getElementById('option2').setAttribute('onclick', `check(this,${element.correct_answers.answer_b_correct})`)
    document.getElementById('option3').setAttribute('onclick', `check(this,${element.correct_answers.answer_c_correct})`)
    document.getElementById('option4').setAttribute('onclick', `check(this,${element.correct_answers.answer_d_correct})`)
    document.getElementById('option5').setAttribute('onclick', `check(this,${element.correct_answers.answer_e_correct})`)
    document.getElementById('option6').setAttribute('onclick', `check(this,${element.correct_answers.answer_f_correct})`)

    remove()
}
function remove() {
    let element = document.getElementsByTagName('li')
    for (let i = 0; i < element.length; i++) {
        if (element[i].innerHTML == 'empty') element[i].setAttribute('style', 'display:none')
    }

}

function check(element, value) {
    if (value == true) {
        element.style.background = 'green'
        element.style.border = 'green'
        TrueAnswer++
    } else {
        element.style.background = 'red'
        element.style.border = 'red'
    }
    setTimeout(() => {
        showquestion(++questionNumber)
    }, 500)
}

function showResult() {
    document.getElementById('card').innerHTML = `<h3> ${TrueAnswer} Answers are true and ${20 - TrueAnswer} Are Wrong </h3>`

}

