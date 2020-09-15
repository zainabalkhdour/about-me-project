'use strict';
var score = 0;

function pets() {
    var cats = prompt('do i love cats? please answer (yes/no) or (y/n) ').toLowerCase();
    if (cats == 'yes' || cats == 'y') {
        alert('unforetunatly no');
    }
    else if (cats == 'no' || cats == 'n') {
        alert('correct');

        score++
    } else {
        alert('wrong input');

    }
}
pets();
//---------------------------------------------------------------
function coding() {
    var code = prompt('do i study coding? please answer (yes/no) or (y/n) ').toLowerCase();
    if (code == 'yes' || code == 'y') {
        alert('correct');
        score++
    }
    else if (code == 'no' || code == 'n') {
        alert('not correct');

    } else {
        alert('wrong input');
    }
}
coding();
//---------------------------------------------------------------
function gender() {
    var gender = prompt('am i female? please answer (yes/no) or (y/n) ').toLowerCase();
    if (gender == 'yes' || gender == 'y') {
        alert('yes am a female');
        score++
    }
    else if (gender == 'no' || gender == 'n') {
        alert(' not correct')

    } else {
        alert('wrong input');
    }
}
gender();


//---------------------------------------------------------------
function openion() {
    var opinion = prompt('did you love this game?please answer (yes/no) or(y/n)').toLowerCase();
    console.log('did you love this game?' + opinion);

    if (opinion == 'yes' || opinion == 'y') {
        alert('you have win 100 dollers !!!');
        score++

    } else if (opinion == 'no' || opinion == 'n') {
        alert('thank you for playing the game');
    } else {
        alert('wrong input');
    }

}
openion();
//---------------------------------------------------------------
function thank() {
    var thank = prompt('did you enjoy', 'yes or no').toLowerCase();
    switch (thank) {
        case (thank == 'yes' || thank == 'y'):
            alert('thank you');
            score++
            break;
        case (thank == 'no' || thank == 'n'):
            alert('so sad for that');
            break;

        default:
            alert('bad input')
            break;

    }
}
thank();
//---------------------------------------------------------------
function guess() {
    var myNum = 15;
    var notpass = true


    for (var i = 0; i < 4; i++) {
        var useerNum = Number(prompt('geuss my number from 10-20 !'));
        if (useerNum == myNum) {
            alert('correct answer !');

            notpass = false;
            score++
            break;
        } else if (useerNum > myNum) {
            alert('too high');

        } else if (useerNum < myNum) {
            alert('too low');

        } else {
            alert('string not allowed');

        }
    }
    if (notpass) {
        alert('the correct answer is ' + myNum);

    }

}


guess();

//---------------------------------------------------------------
function cities() {
    var provincies = ['amman', 'madaba', 'almafraq', 'irbid'];
    var o = 0
    var notpass = true
    while (o < 6) {
        var usergeuss = prompt('what are the cities names in jordan?').toLowerCase();

        for (var x = 0; x < provincies.length; x++) {
            if (usergeuss == provincies[x]) {
                alert('correct !!');

                notpass = false;
                score++
                break;
            }

        }
        if (!notpass)
            break;
        o++;
    }

    if (notpass) {
        alert('the correct answers are ' + provincies);

    }
}
cities();
//------------------------------------------------------------------
alert('your score is : ' + score);

