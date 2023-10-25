const answers = {
    answer0 : ['118', '113', '121', '116'],
    answer1 : ['Kwas fluoroantymonowy', 'Kwas fluorosiarkowy', 'Kwas trifluorometanosulfonowy', 'Kwas karboranowy'],
    answer2 : ['Dmitrij Iwanowicz Mendelejew', 'Johann Wolfgang Döbereiner', 'Alexandre-Émile Béguyer de Chancourtois', 'John Alexander Reina Newlands'],
    answer3 : ['28', '14', '31', '24'],
    answer4 : ['7', '6', '8', '3'],
    answer5 : ['H<sub>2</sub>SO<sub>4</sub>.O<sub>3</sub>S', 'HSO<sub>3</sub>.O<sub>2</sub>S', 'H<sub>2</sub>SO<sub>4</sub>.O<sub>5</sub>S<sub>2</sub>', 'H<sub>2</sub>SO<sub>6</sub>.SO<sub>3</sub>'],
    answer6 : ['Fluor', 'Frans', 'Fosfor', 'Arsen'],
    answer7 : ['Victor Ninov', 'Albert Ghiorso', 'Yuri Oganessian', 'Vladimir Utyonkov'],
    answer8 : ['Fosfor', 'Hel', 'Siarka', 'Lit'],
    answer9 : ['16 u', '36 u', '18 u', '32 u']
}

const questions = {
    question0 : 'Ile na układzie okresowym znajduje się pierwiastków?',
    question1 : 'Jaki jest najmocniejszy kwas?',
    question2 : 'Kto stworzył układ okresowy?',
    question3 : 'Ile jest pierwiastków, które nie występują naturalnie?',
    question4 : 'Ile jest gazów szlachetnych?',
    question5 : 'Jaki jest wzór Oleum?',
    question6 : 'Największą elektoujemność ma?',
    question7 : 'Kto próbował sfałszować pierwiastek 118 w układzie okresowym?',
    question8 : 'Jaki pierwiastek został odkryty jako pierwszy po starożytności?',
    question9 : 'Ile waży tlen?'
}

let liczba1 = 1;
let liczba2 = 4;

function losowaLiczba(liczba, liczba1) 
{
    liczba = Math.ceil(liczba);
    liczba1 = Math.floor(liczba1);
    return Math.floor(Math.random() * (liczba1 - liczba + 1)) + liczba;
}

function losowaLiczbaV2(liczba, liczba1) {
    const set = new Set()

    while(set.size < liczba) {
        set.add(Math.floor(Math.random() * liczba1) + 1)
    }

    return set;
}

const id_answer1 = document.getElementById('ans1'),
    id_answer2 = document.getElementById('ans2'),
    id_answer3 = document.getElementById('ans3'),
    id_answer4 = document.getElementById('ans4'),
    id_question = document.getElementById('question');

let points = 0,
    round = 0;

invokeAns();
timerFun();

function timerFun() {
    
    var time = 180;
    const timer = document.getElementById('timer');
    
    timer.innerHTML = time + 's';

    var x = setInterval(() => {
        time--;

        timer.innerHTML = time + 's';

        if (time == -1) {
            clearInterval(x);
            document.getElementById('points').value = points;
            document.getElementById('round').value = 10;
            document.getElementById('subform').submit();
        }
    }, 1000);
}

function animationIn(color) {

    if (color == 'green') {
        id_answer1.classList.add('answerAnimationRight');
        id_answer2.classList.add('answerAnimationRight');
        id_answer3.classList.add('answerAnimationRight');
        id_answer4.classList.add('answerAnimationRight');

        setTimeout(() => { animationOut(); }, 700);
    }
    else
    {
        id_answer1.classList.add('answerAnimationWrong');
        id_answer2.classList.add('answerAnimationWrong');
        id_answer3.classList.add('answerAnimationWrong');
        id_answer4.classList.add('answerAnimationWrong'); 

        setTimeout(() => { animationOut(); }, 700);
    }
}

function animationOut() {

    id_answer1.classList.remove('answerAnimationRight');
    id_answer2.classList.remove('answerAnimationRight');
    id_answer3.classList.remove('answerAnimationRight');
    id_answer4.classList.remove('answerAnimationRight');

    id_answer1.classList.remove('answerAnimationWrong');
    id_answer2.classList.remove('answerAnimationWrong');
    id_answer3.classList.remove('answerAnimationWrong');
    id_answer4.classList.remove('answerAnimationWrong');
}

function incorrectAns() {
    round++;
    animationIn('red');

    if (round == 10) {
        document.getElementById('points').value = points;
        document.getElementById('round').value = round;
        document.getElementById('subform').submit();
    }
    else
    {
        invokeAns();
    }
}

function correctAns() {
    points++;
    round++;
    animationIn('green');

    if (round == 10) {
        document.getElementById('points').value = points;
        document.getElementById('round').value = round;
        document.getElementById('subform').submit();
    }
    else
    {
        invokeAns();
    }
}

function invokeAns() {

    correct = losowaLiczbaV2(liczba1, liczba2);
    var tablicaV2 = [0, 1, 2, 3]

    for (let i = 0; i < tablicaV2.length; i++) {
        var liczba = losowaLiczba(liczba1, liczba2)
        temp = tablicaV2[i]
        tablicaV2[i] = tablicaV2[liczba]
        tablicaV2[liczba] = temp      
    }

    for(j = 0; j < tablicaV2.length; j++)
    {
        if(tablicaV2[j] == undefined)
        {
            tablicaV2.splice(j, 1)
        }
    }

    if(tablicaV2.length == 3)
    {
        tablicaV2.shift()
    }

    if(tablicaV2.indexOf(0) == 0)
    {
        id_answer1.innerHTML = answers['answer'+ round][tablicaV2[0]]
        id_answer2.innerHTML = answers['answer'+ round][tablicaV2[1]]
        id_answer3.innerHTML = answers['answer'+ round][tablicaV2[2]]
        id_answer4.innerHTML = answers['answer'+ round][tablicaV2[3]]

        document.getElementById('ans1').onclick = function() { correctAns(); };

        document.getElementById('ans2').onclick = function() { incorrectAns(); };
        document.getElementById('ans3').onclick = function() { incorrectAns(); };
        document.getElementById('ans4').onclick = function() { incorrectAns(); };

    }
    else if(tablicaV2.indexOf(0) == 1)
    {
        id_answer1.innerHTML = answers['answer'+ round][tablicaV2[0]]
        id_answer2.innerHTML = answers['answer'+ round][tablicaV2[1]]
        id_answer3.innerHTML = answers['answer'+ round][tablicaV2[2]]
        id_answer4.innerHTML = answers['answer'+ round][tablicaV2[3]]

        document.getElementById('ans2').onclick = function() { correctAns(); };

        document.getElementById('ans1').onclick = function() { incorrectAns(); };
        document.getElementById('ans3').onclick = function() { incorrectAns(); };
        document.getElementById('ans4').onclick = function() { incorrectAns(); };

    }
    else if(tablicaV2.indexOf(0) == 2)
    {
        id_answer1.innerHTML = answers['answer'+ round][tablicaV2[0]]
        id_answer2.innerHTML = answers['answer'+ round][tablicaV2[1]]
        id_answer3.innerHTML = answers['answer'+ round][tablicaV2[2]]
        id_answer4.innerHTML = answers['answer'+ round][tablicaV2[3]]

        document.getElementById('ans3').onclick = function() { correctAns(); };

        document.getElementById('ans1').onclick = function() { incorrectAns(); };
        document.getElementById('ans2').onclick = function() { incorrectAns(); };
        document.getElementById('ans4').onclick = function() { incorrectAns(); };

    }
    else if(tablicaV2.indexOf(0) == 3)
    {
        id_answer1.innerHTML = answers['answer'+ round][tablicaV2[0]]
        id_answer2.innerHTML = answers['answer'+ round][tablicaV2[1]]
        id_answer3.innerHTML = answers['answer'+ round][tablicaV2[2]]
        id_answer4.innerHTML = answers['answer'+ round][tablicaV2[3]]

        document.getElementById('ans4').onclick = function() { correctAns(); };

        document.getElementById('ans1').onclick = function() { incorrectAns(); };
        document.getElementById('ans2').onclick = function() { incorrectAns(); };
        document.getElementById('ans3').onclick = function() { incorrectAns(); };
    }

    id_question.innerHTML = questions['question'+ round];
}