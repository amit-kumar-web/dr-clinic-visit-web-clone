const box = document.querySelector('#box');
const button = document.querySelector('button');
const spans = document.querySelectorAll('#box span');
const status = document.querySelector('p');
let flag = true;
let moves  = 0;

let isCompleted = false;
let game = [
  ['', '', ''], 
  ['', '', ''],
  ['', '', '']
]



function checkWinner() {
  let s1 = game[0].join('')
  let s2 = game[1].join('')
  let s3 = game[2].join('')
  let s4 = game[0][0]+game[1][0]+game[2][0]
  let s5 = game[0][1]+game[1][1]+game[2][1]
  let s6 = game[0][2]+game[1][2]+game[2][2]
  
  let s7 = game[0][0]+game[1][1]+game[2][2]
  let s8 = game[0][2]+game[1][1]+game[2][0]

  if(s1 == 'OOO' || s1 == "XXX") {
    return s1[0];
  }
  else if(s2 == 'OOO' || s2 == "XXX") {
    return s2[0];
  }
  else if(s3 == 'OOO' || s3 == "XXX") {
    return s3[0];
  }
  else if(s4 == 'OOO' || s4 == "XXX") {
    return s4[0];
  }
  else if(s5 == 'OOO' || s5 == "XXX") {
    return s5[0];
  }
  else if(s6 == 'OOO' || s6 == "XXX") {
    return s6[0];
  }
  else if(s7 == 'OOO' || s7 == "XXX") {
    return s7[0];
  }
  else if(s8 == 'OOO' || s8 == "XXX") {
    return s8[0];
  }
  else return 'Y'

}

function checkWinner2() {
  if(spans[0].innerText == spans[1].innerText && spans[0].innerText == spans[2].innerText && spans[0].innerText != '') {
    return spans[0].innerText;
  }
  else if(spans[3].innerText == spans[4].innerText && spans[3].innerText == spans[5].innerText && spans[5].innerText != '') {
    return spans[5].innerText;
  }
  else if(spans[6].innerText == spans[7].innerText && spans[6].innerText == spans[8].innerText && spans[6].innerText != '') {
    return spans[6].innerText;
  }
  else if(spans[0].innerText == spans[3].innerText && spans[0].innerText == spans[6].innerText && spans[6].innerText != '') {
    return spans[6].innerText;
  }
  else if(spans[1].innerText == spans[4].innerText && spans[1].innerText == spans[7].innerText && spans[1].innerText != '') {
    return spans[1].innerText;
  }
  else if(spans[2].innerText == spans[5].innerText && spans[5].innerText == spans[8].innerText && spans[2].innerText != '') {
    return spans[2].innerText;
  }
  else if(spans[0].innerText == spans[4].innerText && spans[4].innerText == spans[8].innerText && spans[0].innerText != '') {
    return spans[0].innerText;
  }
  else if(spans[2].innerText == spans[4].innerText && spans[2].innerText == spans[6].innerText && spans[2].innerText != '') {
    return spans[2].innerText;
  }
  else {
    return 'Y'
  }
}

box.addEventListener('click', (event) => {
  if(event.target.innerText === '' && !isCompleted) {
    event.target.innerText = flag ? 'X' : 'O';
    let id = Number(event.target.id[1]);
    if(id > 6) {
      game[2][id%7] = flag ? 'X' : 'O';
    }
    else if(id > 3) {
      game[1][id%4] = flag ? 'X' : 'O';
    }
    else {
      game[0][id-1] = flag ? 'X' : 'O'
    }
    flag = !flag
  }



  moves++;


  const winner = checkWinner();
  if(winner != 'Y') {
    isCompleted = true
    status.innerText = `match won by ${winner == 'X' ? 'first' : 'second'} player`;
  }else {
    if(moves == 9) {
      status.innerText = 'match draw';
    }
  }
})

button.addEventListener('click', () => {
  spans.forEach((s) => {
    s.innerText = ''
    status.innerText = ''
  })

  moves = 0

  game = [
    ['', '', ''], 
    ['', '', ''],
    ['', '', '']
  ]  
})