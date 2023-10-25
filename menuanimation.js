// Funkcje do menu
function menu() {
    document.getElementById('navigation').style.visibility = 'visible';
    document.getElementById('menu').style.visibility = 'hidden';
    document.getElementById('navigation').classList.add('menuanimation');
}

function exit() {
    document.getElementById('navigation').style.visibility = 'hidden';
    document.getElementById('menu').style.visibility = 'visible';
    document.getElementById('navigation').classList.remove('menuanimation');
}

function hover() {
    for (let i = 0; i < document.getElementsByClassName('quizpattern').length; i++) {
        document.getElementsByClassName('quizpattern').item(i).addEventListener('mouseover', function () { document.getElementById(i).style.visibility = 'visible'; })
        document.getElementsByClassName('titles').item(i).addEventListener('mouseover', function () {
            document.getElementById(i).style.visibility = 'visible';
            document.getElementById('img'+ i).style.filter = 'blur(2px)';
        })
        document.getElementsByClassName('quizpattern').item(i).addEventListener('mouseout', function () {
            document.getElementById(i).style.visibility = 'hidden';
            document.getElementById('img'+ i).style.filter = null;          
        })
    }
}

hover();