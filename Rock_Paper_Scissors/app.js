let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const uw = "user".fontsize(3).sub();
const cw = "comp".fontsize(3).sub();

function getCompchoice(){
    const choice = ['r', 'p', 's'];
    return choice[Math.floor(Math.random()*3)]
}

function convert(ch){
    if(ch === 'r') return "Rock";
    if(ch === 'p') return "Paper";
    return "Scissors";
}

function win(user, comp){
    userscore++;
    userscore_span.innerHTML = userscore;
    glow = document.getElementById(user).classList
    if(user+comp === 'rs') result_div.innerHTML = `${convert(user)}${uw} beats ${convert(comp)}${cw}. You Win! 🔥`;
    if(user+comp === 'sp') result_div.innerHTML = `${convert(user)}${uw}  cuts ${convert(comp)}${cw}. You Win! 🔥`;
    if(user+comp === 'pr') result_div.innerHTML = `${convert(user)}${uw}  covers ${convert(comp)}${cw}. You Win! 🔥`;
    glow.add('green-glow');
    setTimeout(() => glow.remove('green-glow'), 400);
}

function lose(user, comp){
    compscore++;
    compscore_span.innerHTML = compscore;
    glow = document.getElementById(user).classList
    result_div.innerHTML = `${convert(user)}${uw} loses to ${convert(comp)}${cw}. You Lost! ☹`;
    glow.add('red-glow');
    setTimeout(() => glow.remove('red-glow'), 400);
}

function draw(user, comp){
    glow = document.getElementById(user).classList
    result_div.innerHTML = `${convert(user)}${uw} equals ${convert(comp)}${cw}. It's a Draw! `;
    glow.add('grey-glow');
    setTimeout(() => glow.remove('grey-glow'), 400);
}

function game(userchoice){
    const compchoice = getCompchoice();
    switch(userchoice+compchoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userchoice, compchoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userchoice, compchoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userchoice, compchoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();