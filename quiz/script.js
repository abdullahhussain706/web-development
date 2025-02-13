let questions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "let"],
        answer: "var"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "/* */", "#", "--"],
        answer: "//"
    },
    {
        question: "What does 'DOM' stand for?",
        options: ["Document Object Model", "Data Object Model", "Display Object Mode", "Document Oriented Model"],
        answer: "Document Object Model"
    },
    {
        question: "Which method is used to select an element by its ID?",
        options: ["getElementById()", "querySelector()", "getElementsByClassName()", "getElement()"],
        answer: "getElementById()"
    },
    {
        question: "What will `typeof null` return?",
        options: ["object", "null", "undefined", "number"],
        answer: "object"
    },
    {
        question: "Which operator is used to compare both value and type?",
        options: ["==", "!=", "===", "="],
        answer: "==="
    },
    {
        question: "How do you define a function in JavaScript?",
        options: ["function myFunction()", "def myFunction()", "func myFunction()", "Function: myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "Which event occurs when a user clicks an HTML element?",
        options: ["onmouseover", "onchange", "onclick", "onfocus"],
        answer: "onclick"
    },
    {
        question: "What is the correct way to write an array in JavaScript?",
        options: ["{1,2,3,4}", "[1,2,3,4]", "(1,2,3,4)", "<1,2,3,4>"],
        answer: "[1,2,3,4]"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msg('Hello World')", "alert('Hello World')", "prompt('Hello World')", "msgBox('Hello World')"],
        answer: "alert('Hello World')"
    },
    {
        question: "Which JavaScript loop runs at least once before checking the condition?",
        options: ["for", "while", "do-while", "foreach"],
        answer: "do-while"
    },
    {
        question: "What is the output of `console.log(2 + '2')`?",
        options: ["4", "22", "Error", "NaN"],
        answer: "22"
    },
    {
        question: "How do you remove the last element from an array?",
        options: ["pop()", "shift()", "splice()", "removeLast()"],
        answer: "pop()"
    },
    {
        question: "What is the purpose of the `JSON.stringify()` method?",
        options: ["Convert object to string", "Convert string to object", "Parse a JSON file", "None of the above"],
        answer: "Convert object to string"
    },
    {
        question: "Which statement is true about JavaScript?",
        options: [
            "JavaScript is a compiled language",
            "JavaScript is a case-sensitive language",
            "JavaScript does not support functions",
            "JavaScript is the same as Java"
        ],
        answer: "JavaScript is a case-sensitive language"
    },
    {
        question: "Which of the following is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Flask"],
        answer: "React"
    },
    {
        question: "What will `console.log(typeof NaN)` return?",
        options: ["number", "NaN", "undefined", "object"],
        answer: "number"
    },
    {
        question: "Which function is used to generate a random number in JavaScript?",
        options: ["Math.random()", "random()", "generateRandom()", "rand()"],
        answer: "Math.random()"
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "unshift()", "concat()"],
        answer: "push()"
    },
    {
        question: "Which keyword is used to define a constant variable in JavaScript?",
        options: ["let", "var", "const", "final"],
        answer: "const"
    }
];

let quizContainer = document.querySelector("#quiz");
let currentQuestionIndex=0;
let score=0;


function loadQuestion(){
    let q = questions[currentQuestionIndex];

    quizContainer.innerHTML=`
    <p><strong>Q${currentQuestionIndex+1}: ${q.question} </strong></p>
    <div class="options" >
    ${q.options.map(option =>
        `
                <label>
                    <input type="radio" name="q" value="${option}"> ${option}
                </label>
                `
    ).join("")
}
    </div>`;
}


function nextQuestion() {
    let selectedOption = document.querySelector('input[name="q"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    if(selectedOption.value=== questions[currentQuestionIndex].answer){
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        quizContainer.innerHTML = `<h3>Quiz Completed!</h3>
                                   <p>Your Score: ${score} / ${questions.length}</p>`;
        document.querySelector(".next").disabled = true;
    }
}

function resetQuiz(){
    currentQuestionIndex=0;
    score=0;
    document.querySelector(".next").disabled=false;
    loadQuestion();
}



document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    document.querySelector(".next").addEventListener("click", nextQuestion);
    document.querySelector(".reset").addEventListener("click", resetQuiz);
    
});