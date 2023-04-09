const donnees =[
    {
        question: "quel est le meilleur language de programmation en 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },

    {
        question: "que signifie JSON?",
        a: "JavaScript Object notation",
        b: "java objet notation",
        c: "Puyh jaz jhafzef",
        d: "javascriptefe",
        correct: "a",
    },
    {
        question: " qui est le plus ancien parmis ces languages",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "b",
    },

];
const quiz=document.getElementById('quiz');
const questionEl=document.getElementById('question');
const reponses=document.querySelectorAll('.reponse');
const a_reponse=document.getElementById('a_reponse');
const b_reponse=document.getElementById('b_reponse');
const c_reponse=document.getElementById('c_reponse');
const d_reponse=document.getElementById('d_reponse');
const suivant=document.getElementById('suivant');

let quizCourant=0;
let score=0;
chargerQuiz();

function chargerQuiz(){
    deseleclReponses()
   const donneesQuizCourant= donnees[quizCourant]
    questionEl.innerText = donneesQuizCourant.question
    a_reponse.innerText = donneesQuizCourant.a
    b_reponse.innerText = donneesQuizCourant.b
    c_reponse.innerText = donneesQuizCourant.c
    d_reponse.innerText = donneesQuizCourant.d

}
function deseleclReponses() {
    reponses.forEach(reponse => reponse.checked= false)
    
}

function getSelected(){
    let reponse
    reponses.forEach(reponseEL=> {
        if(reponseEL.checked){
            reponse=reponseEL.id
        }
    } )
    return reponse
}


suivant.addEventListener('click',()=>{
    const reponse = getSelected()
    
    if(reponse){

    if(reponse === donnees[quizCourant].correct){
        score++;
    }
    quizCourant++;
    if(quizCourant < donnees.length){
        chargerQuiz()
    }else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${donnees.length} questions correctly</h2>
        <button onclick="location.reload()">Rejouer</button>
        `
        }
}

})


// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//        if(answer === quizData[currentQuiz].correct) {
//            score++
//        }
//        currentQuiz++
//        if(currentQuiz < quizData.length) {
//            loadQuiz()
//        } else {
//            quiz.innerHTML = `
//            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//            <button onclick="location.reload()">Reload</button>
//            `
//        }
//     }
// })













































// const quizData = [
//     {
//         question: "Which language runs in a web browser?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "javascript",
//         correct: "d",
//     },
//     {
//         question: "What does CSS stand for?",
//         a: "Central Style Sheets",
//         b: "Cascading Style Sheets",
//         c: "Cascading Simple Sheets",
//         d: "Cars SUVs Sailboats",
//         correct: "b",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hypertext Markup Language",
//         b: "Hypertext Markdown Language",
//         c: "Hyperloop Machine Language",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         a: "1996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },
// ];
// const quiz= document.getElementById('quiz')
// const answerEls = document.querySelectorAll('.answer')
// const questionEl = document.getElementById('question')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')
// let currentQuiz = 0
// let score = 0
// loadQuiz()
// function loadQuiz() {
//     deselectAnswers()
//     const currentQuizData = quizData[currentQuiz]
//     questionEl.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
// }
// function deselectAnswers() {
//     answerEls.forEach(answerEl => answerEl.checked = false)
// }
// function getSelected() {
//     let answer
//     answerEls.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     return answer
// }
// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//        if(answer === quizData[currentQuiz].correct) {
//            score++
//        }
//        currentQuiz++
//        if(currentQuiz < quizData.length) {
//            loadQuiz()
//        } else {
//            quiz.innerHTML = `
//            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//            <button onclick="location.reload()">Reload</button>
//            `
//        }
//     }
// })