/**
 * Created by Tom on 21/06/2016.
 */

enki = new Object();
enki.practiceQuestion = 'true';

function tricky() {
    enki.newQuestion = enki.practiceQuestion;
    delete enki.practiceQuestion;
}

console.log(enki.hasOwnProperty('practiceQuestion'));
console.log(enki.hasOwnProperty('magicPowers'));
tricky();
console.log(enki.hasOwnProperty('practiceQuestion'));


console.log(0.6 - 0.2);
console.log((0.2 * 10 + 0.3 * 10) / 10);