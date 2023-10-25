const answers = {
    answer0 : ['Mikasa', 'Erwin Smith', 'Bertolt Hoover', 'Eren'],
    answer1 : ['One Pice', 'Death Note', 'Naruto', 'Boruto'],
    answer2 : ['Paradis', 'Marley', 'Aidni', 'Ainaeco'],
    answer3 : ['Zabójców Cienia', 'Zabójców Zmroku', 'Xuanwu', 'Sekta Niebiańskiego Lotosu'],
    answer4 : ['Tetsujin', 'Akaboshi', 'Pawoo', 'Actagawa'],
    answer5 : ['Tamamo-no-Mae', 'Uzumaki', 'Wyimaginowany Demoniczny Bóg', 'Kuchisake-Onna'],
    answer6 : ['Shinra Kusakabe', 'Arthur Boyle', 'Haumea', 'Shō Kusakabe'],
    answer7 : ['Trupie Fantomu', 'Zodiakach', 'Stowarzyszeniu Łowców', 'Rodzinie Zoldyck'],
    answer8 : ['Sandevistan', 'Optyka Kiroshi', 'Drugie Serce', 'Stawy bioniczne'],
    answer9 : ['Elfy', 'Flügele', 'Krasnoludy', 'Wróżki'],
    answer10 : ['Shide', 'Haine', 'Hizuru', 'Seidou Hishigata'],
    answer11 : ['Michael Jackson', 'Freddie Mercury', 'Akaza', 'Władca Demonów'],
    answer12 : ['Zakochać się w wampirzycy', 'Zostać ugryzionym przez wampira', 'Odprawić rytuał', 'Znienawidzić czosnek'],
    answer13 : ['Walnut', 'Majima', 'Robota', 'Yoshimatsu, Shinji'],
    answer14 : ['2017', '2015', '2016', '2019'],
    answer15 : ['Ponad 500', 'Około 430', 'Ponad 1000', 'Około 370'],
    answer16 : ['10', '9', '12', '8'],
    answer17 : ['Astaroth', 'Lucifero', 'Beelzebub', 'Megicula'],
    answer18 : ['Ariel', 'Shiro', 'Sophia', 'D'],
    answer19 : ['Kayaba Akihiko', 'Nobuyuki Sugō', 'Vassago Casals', 'Takeru Higa'],
    answer20 : ['500 jenów', 'Bitwy Awanturnika', 'Włamania się Hakera do Banku Centralnego Kansai', '"Leczenia" Doktor'],
    answer21 : ['Kaikai Kitan', 'LOST IN PARADISE', 'Vivid Vice', 'Inferno'],
    answer22 : ['Arthur Boyle', 'Shinra Kusakabe', 'Pan Śmierć', 'Black☆Star'],
}

const questions = {
    question0 : 'Kto nie zginął w Attack on Titan?',
    question1 : 'Które z podanych anime jest emitowane nieprzerwanie od 1999 roku?',
    question2 : 'Na jakiej wyspie urodził się Eren? (Attack on Titan)',
    question3 : 'Do jakiej organizacji należał Siódemka? (Scissor Seven)',
    question4 : 'Jak nazywa się robot, którego Bisco próbował powstrzymać w odcinkach 10 - 12 anime Sabikui Bisco?',
    question5 : 'Jaką nazwę miała klatwa, którą Geto przyzwal przeciwko Yucie? (Jujutsu Kaisen 0)',
    question6 : 'Kto stworzył Pana Śmierć z Soul Eatera?',
    question7 : 'Na jakiej grupie Kurapika z Hunter X Hunter chce się zemścić?',
    question8 : 'Pierwszy wszczep Davida z Cyberpunk: Edgerunners to...',
    question9 : '7 miejsce w rankingu Exceed zajmują... (No Game No Life)',
    question10 : 'Głównym złodupcem w Summertime Render (biorąc pod uwagę końcówkę anime) jest...',
    question11 : 'Jak inaczej mówi się na Muzana Kibutsuji? (Demon Slayer)',
    question12 : 'Żeby zostać wampirem Kou z serii Yofukashi no Uta musi... (Call of the Night)',
    question13 : 'W serii Lycoris Recoil kto upozorował swoją śmierć?',
    question14 : 'W którym roku emitowali serię Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (Classroom of the Elite - Pierwszy sezon)?',
    question15 : 'Ile lat ma Shinobu Oshino z cyklu serii Monogatari?',
    question16 : 'Ile jest Ogoniastych Bestii w serii Naruto (Wszystkich)?',
    question17 : 'Który z podanych demonów jest aktualnie najsilniejszy? (Black Clover)',
    question18 : "Jak nazywa się Władca Demonów z serii Kumo desu ga, Nani ka? (So I'm a Spider, So What?)",
    question19 : 'Kto stworzył Aincrad z Sword Art Online?',
    question20 : 'Od czego zaczęła się akcja Akudama Drive?',
    question21 : 'Jak nazywa się pierwszy opening anime Jujutsu Kaisen?',
    question22 : 'Kto "stworzył" Excalibura?'
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
    
    var time = 280;
    const timer = document.getElementById('timer');
    
    timer.innerHTML = time + 's';

    var x = setInterval(() => {
        time--;

        timer.innerHTML = time + 's';

        if (time == -1) {
            clearInterval(x);
            document.getElementById('points').value = points;
            document.getElementById('round').value = 23;
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

    if (round == 23) {
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
    
    if (round == 23) {
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