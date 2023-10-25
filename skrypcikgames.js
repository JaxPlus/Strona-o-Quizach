const answers = {
    answer0 : ['11 listopada 2022', '27 października 2022', '5 grudnia 2022', '30 października 2022'],
    answer1 : ['12', '14', '8', '10'],
    answer2 : ['Około 4000', 'Około 4500', 'Około 3500', 'Około 4200'],
    answer3 : ['Około 950', 'Około 1000', 'Około 800', 'Około 890'],
    answer4 : ['Tokki', 'Snowball', 'Wrecking Ball', 'Bob'],
    answer5 : ['195m<sup>3</sup>/min', '190m<sup>3</sup>/min', '180m<sup>3</sup>/min', '210m<sup>3</sup>/min'],
    answer6 : ['Torem', 'Berylem', 'Uranem', 'Włóknem fazowym'],
    answer7 : ['13', '12', '9', '15'],
    answer8 : ['Metamorfoza', 'Przyjaciel Larw', 'Czystość', 'Połączenie'],
    answer9 : ['Piramidogłowy', 'Pielęgniarka', 'Lisa', 'Twin Victim'],
    answer10 : ['Gus', 'Pierre', 'Clint', 'Lewis'],
    answer11 : ['G-Man', 'Wallace Breen', 'Alyx Vance', 'Gordon Freeman'],
    answer12 : ['Bitwa o Czerwoną Górę', 'Bitwa Trybunału', 'Bitwa o Serce Lorkhana', 'Ostatnia Bitwa Dwemerów'],
    answer13 : ['Wodnych elfów', 'Zimowych Elfów', 'Podziemnych elfów', 'Wysokich elfów'],
    answer14 : ['Abelasa', 'Andruil', 'Dirthamena', 'Saarebasa'],
    answer15 : ['18', '16', '10', '8'],
    answer16 : ['Lorkhan', 'Kynareth', 'Akatosh', 'Ehlnofey'],
    answer17 : ['Smokogrzmot', 'Nieugięta siła', 'Ognisty Oddech', 'Czyste niebiosa'],
    answer18 : ['W. D. Gaster', 'Alphys', 'Flowey', 'Asgore'],

}

const questions = {
    question0 : 'Kiedy została wydana gra SCP: Endurance?',
    question1 : 'Ile razy trzeba powiesić ocalałych na haku w Dead by Daylight, żeby wszyscy zostali poświęceni Bytowi (Biorąc pod uwagę to, że każdy ocalały zostanie ściągnięty z haka i nie uda mu się za jednym razem uzyskać 2 etapu)?',
    question2 : 'Ile jest skrzynek w Genshin Impact biorąc pod uwagę 3 aktualne regiony i tylko te dostępne w Teyvat?',
    question3 : 'Ile jest skinów do broni w CS:GO?',
    question4 : 'Jak nazywa się mech D. Vy z Overwacha?',
    question5 : 'Ile trzeba wydobywać ropy na minutę, żeby produkować 130 plastiku na minutę w Satisfactory jeśli proporcja ropy do plastiku to 30 do 20?',
    question6 : 'Jakim surowcem trzeba zasilać Reaktor Torowy w Mindustry?',
    question7 : 'Ile jest typów broni w Brawlhalli?',
    question8 : "Jakie osiągnięcie dostajesz za uratowanie wszystkich larw w Hollow Knight'cie?",
    question9 : 'Jednym z najbardziej rozpoznawalnych potworów z Silent Hill jest?',
    question10 : 'Kto prowadzi Salon w Stardew Valley?',
    question11 : 'Tym który nas wita w Half Life 2 jest?',
    question12 : 'Jaka bitwa skończyła się zniknięciem Dwemerów z Nirn?',
    question13 : 'Jakiego rodzaju elfów nie widujemy w żadnej części gier The Elder Scrolls?',
    question14 : 'Jakiego starożytnego elfa inkwizytor spotkał podczas pobytu w Świątyni Mythal?',
    question15 : "Ile potrzeba mieczy w Terrari, żeby stworzyć Zenith'a (biorąc pod uwagę wszystkie miecze potrzebne na niego)?",
    question16 : 'Shor jest również znany jako...',
    question17 : 'Jaki krzyk nie pochodzi bezpośrednio od smoków?',
    question18 : 'Jak nazywa się były królewski naukowiec, który stworzył rdzeń w Undertale?'
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
    
    var time = 200;
    const timer = document.getElementById('timer');
    
    timer.innerHTML = time + 's';

    var x = setInterval(() => {
        time--;

        timer.innerHTML = time + 's';

        if (time == -1) {
            clearInterval(x);
            document.getElementById('points').value = points;
            document.getElementById('round').value = 19;
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

    if (round == 19) {
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

    if (round == 19) {
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

    id_question.innerHTML = questions['question'+ round]
}