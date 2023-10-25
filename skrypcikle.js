const answers = {
    answer0 : ['T-Series', 'MrBeast', 'Cocomelon - Nursery Rhymes', 'PewDiePie'],
    answer1 : ['1,989E30 kg', '2,013E10 kg', '0,9353E23 kg', '1,571E33 kg'],
    answer2 : ['Włoskiej', 'Rosyjskiej', 'Hiszpańskiej', 'Polskiej'],
    answer3 : ['WisPol', 'TransKom', 'LineaTrans', 'DAS'],
    answer4 : ['Ponad 43 tryliony', 'Ponad 52 tryliony', 'Ponad 38 trylionów', 'Ponad 19 trylionów'],
    answer5 : ['10<sup>120</sup>', '12<sup>111</sup>', '10<sup>119</sup>', '11<sup>125</sup>'],
    answer6 : ['7', '9', '5', '10'],
    answer7 : ['8 maja 1945r.', '8 maja 1946r.', '9 maja 1945r.', '9 maja 1944r.'],
    answer8 : ['1,386 mln km<sup>3</sup>', '2,321 mln km<sup>3</sup>', '2,012 mln km<sup>3</sup>', '1,834 mln km<sup>3</sup>'],
    answer9 : ['String zmienna = "tekst";', 'string zmienna = "tekst";', 'var zmienna = "tekst";', 'Var zmienna = "tekst";'],
    answer10 : ['Został spalony', 'Powiesił się', 'Został zadźgany', 'Został pogrzebany żywcem'],
    answer11 : ['33x33', '21x21', '29x29', '25x25'],
    answer12 : ['20', '19', '22', '18'],
    answer13 : ['Annatar', 'Melkor', 'Feanor', 'Cirdan'],
    answer14 : ['Alastor', 'Zestiel', 'Velvet', 'Valentino'],
    answer15 : ['Na podłodze przy protagonistach', 'W domu Lawrenca', 'W domu Adama', 'Jako zakładnik Zepa Hindle'],
    answer16 : ['6', '5', '9', '7'],
    answer17 : ['Daenerys Targaryen', 'Cersei Lannister', 'Sansa Stark', 'Margaery Tyrell'],
    answer18 : ['1/2', '1/4', '1/16', 'Co to parity 😕'],
    answer19 : ['Fëanora', 'Fingolfina', 'Fingona', 'Finroda'],
    answer20 : ['Point Pleasant', 'Oslo', 'Bydgoszcz', 'Warffum']
}

const questions = {
    question0 : "Który kanał na YouTube'ie ma najwięcej subskrybcji?",
    question1 : 'Jaka jest waga słońca?',
    question2 : 'Jakiej narodowości był Krzysztof Kolub?',
    question3 : 'Jaka jest najgorsza firma transportu publicznego?',
    question4 : "Ile jest możliwych scrabble'i na kostce 3x3?",
    question5 : 'Ile jest możliwych wariantów na planszy szachowej?',
    question6 : 'Ile jest figur w Tetrisie?',
    question7 : 'Jaka jest data zakończenia II wojna światowa?',
    question8 : 'Jaka jest obiętość wody na Ziemi?',
    question9 : 'Jak określić zmienną tekstu w Javie?',
    question10 : 'W jaki sposób zginął Freddy Krueger?',
    question11 : 'Która kostka rubika jest aktualnie największa na świecie (chodzi o te klasyczne)?',
    question12 : 'Ile do tej pory odbyło się Pyrkonów?',
    question13 : 'Jakie imię nosił Sauron podczas przebywania w Eregionie?',
    question14 : 'Jak nazywa się "Radiowy Demon" z Hazbin Hotel?',
    question15 : 'Podczas Piły 1 gdzie cały czas był Jigsaw?',
    question16 : "Ile konfiguracji ma kostka w Hellraiser'ze z 2022 roku?",
    question17 : 'Kto jest prawowitą dziedziczką Żelaznego Tronu? (Gra o Tron)',
    question18 : 'Jakie jest prawdopodobieństwo na parity na kostce 4x4x4?',
    question19 : 'Czyje imię oznacza duch ognisty?',
    question20 : 'Gdzie można było najczęściej zaobserwować Mothmana?'
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
            document.getElementById('round').value = 21;
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

    if (round == 21) {
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

    if (round == 21) {
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