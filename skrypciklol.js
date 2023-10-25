const answers = {
    answer0 : ['161 postaci', '160 postaci', '154 postacie', '157 postaci'],
    answer1 : ['DRX', 'T1', 'Gen.G', 'DWG KIA'],
    answer2 : ['350', '300', '320', '380'],
    answer3 : ['Styraatu', 'Rhaast', 'Xolaani', 'Naganeka'],
    answer4 : ['W 2019', 'W 2020', 'W 2018', 'W 2016'],
    answer5 : ['Powder', 'Pow-Pow', 'Cupcake', 'Daisy'],
    answer6 : ['Pretendent', 'Arcymistrz', 'Mistrz', 'Żelazo'],
    answer7 : ['Pustka', 'Targon', 'Bilgewater', 'Piltover'],
    answer8 : ['3', '50', '4', '46'],
    answer9 : ['500 zdrowia', '200 zdrowia', '300 zdrowia', '400 zdrowia'],
    answer10 : ['Alune', 'Diana', 'Phitame', 'Linathas'],
    answer11 : ['Duchowy Rozkwit', 'Odyseja', 'Zrujnowanie', 'Czarodziejki Gwiazd'],
    answer12 : ['Ostrze Zrujnowanego Króla', 'Ostrze Odnowionego Krola', 'Ostrze Załamanego Króla', 'Ostrze Zniszczonego Króla'],
    answer13 : ['150', '125', '100', '140'],
    answer14 : ['1050', '1000', '1250', '975'],
    answer15 : ['Taliyah', 'Leona', 'Sivir', 'Cassiopeia']
}

const questions = {
    question0 : 'Ile jest postaci w League of Legends?',
    question1 : "Kto wygrał World'sy 2022 roku?",
    question2 : 'Ile złota daje Kosa po zabiciu 100 minionów?',
    question3 : 'Jak nazywa się Harfa Darkinów?',
    question4 : 'W którym roku wyszedł Aphelios?',
    question5 : 'Jak miała na imię Jinx?',
    question6 : 'Najwyższa dywizja w League of Legends to...',
    question7 : 'Jaki region reprezentuje dewizję Mistrza?',
    question8 : 'Ile jest kanonicznych uniwersów w świecie League of Legends (Nie licząc podstawowego)?',
    question9 : 'Ile zdrowia daje Słoneczna Egida?',
    question10 : 'Jak nazywa się siostra Apheliosa?',
    question11 : 'Które wydarzenie jako pierwsze miało wirtualną nowelkę?',
    question12 : 'Jak nazywa się ostrze Viego?',
    question13 : 'Ile potrzeba Mitycznej Esencji, żeby kupić najdroższą skórkę?',
    question14 : 'Ile potrzeba Pomarańczowej Esencji, żeby zamienić odłamek epickiej skórki w permanentną?',
    question15 : 'Jak nazywała się uczennica Yasuo?'
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
    
    var time = 210;
    const timer = document.getElementById('timer');
    
    timer.innerHTML = time + 's';

    var x = setInterval(() => {
        time--;

        timer.innerHTML = time + 's';

        if (time == -1) {
            clearInterval(x);
            document.getElementById('points').value = points;
            document.getElementById('round').value = 16;
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

    if (round == 16) {
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
    
    if (round == 16) {
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