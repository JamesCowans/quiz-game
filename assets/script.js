const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const nextBtn = document.getElementById('next-question');
const submitBtn = document.getElementById('submit');
const questionArea = document.getElementById('questions');
const scoreArea = document.getElementById('scores');
const startBtn = document.getElementById('startQuiz');

submitBtn.addEventListener('click', submit);
nextBtn.addEventListener('click', next);
startQuiz = addEventListener('click', start) = startMyQuiz;


function startMyQuiz() {
    console.log("hello");



}


function runGame(_questions) {

    if (gameType === "random") {
        displayrandomQuestions(questions);
        document.getElementById;
    }

}

function randomQuestions{
    let questions = [
        {
            question: 'Who is the record goal scorer for Newcastle United?',
            answers: [
                { option: 'Alan Shearer', answer: true },
                { option: 'Stephane Guivarc\'h', answer: false },
                { option: 'Boris Johnson', answer: false }
                { option: 'Sherlock Holmes', answer: false }
            ]

        },
        {
            question: 'What year was Pluto killed off as a planet?',
            answers: [
                { optio: '1802', answer: false }
                { option: '2006', answer: true }
                { option: '1988', answer: false }
                { option: '2012', answer: false }
            
        }

    {
            question: 'Who was the drummer for the band Nirvana?',
            { option: 'Phil Collins', answer: false }
            { option: 'The Muppet Animal', answer: false }
            { option: 'Dave Grohl', answer: true }
            { option 'Crazy Frog', answer: false }
            
        }
    ];
};




function checkCorrectAnswer() {

}

function correctScore() {

};



