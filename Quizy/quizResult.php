<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" sizes="64x64" href="../icon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../fontawesome-free-6.1.1-web/css/all.css">
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="quizstyle.css">
    <script src="../menuanimation.js"></script>
    <title>Wynik!</title>
</head>
<body>
    <nav>
        <button onclick="menu()" id="menu"><i class="fa-solid fa-bars fa-stack-2x"></i></button>
        <div id="navigation">
            <div>
                <button onclick="exit()" id="exit"><i class="fa-solid fa-xmark fa-stack-2x"></i></button>
                <ul>
                    <li><a href="../index.html">Strona Główna</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section>
        <div class="highlighted start">
            <p>Brawo! Udało Ci się przejść ten quiz!</p>
            <p>Oczywiście zapraszam na pozostałe jeżeli jeszcze ich nie spróbowałeś/aś. A teraz ciesz się swoim wynikiem!</p>
            <p id="result"> <?php echo $_POST['points'].' / '; echo $_POST['round']; ?> </p>
        </div>
    </section>
</body>
</html>