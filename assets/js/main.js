const imgs = document.querySelectorAll('.img');
const cards = document.querySelectorAll('.card');
const cols = document.querySelectorAll('.col-2');
const btn = document.querySelector('.btn')

let imagens = ['./assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png', './assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png']


class Score {
  points = 0;
  life = 3
}

let nRandom;
let numbers = [];
let cardsGalery = [];


function arrayRandom() {
  nRandom = parseInt(Math.random() * 24)
  
  numbers.forEach(n => {
    if (nRandom == n) {
      arrayRandom()
      n = nRandom
    }
  });
  
  if (numbers.length == 24) {
    return
  }
  numbers.push(nRandom);
  if (numbers.length < 24) {
    arrayRandom();
  }
}

arrayRandom();



numbers.forEach(n => {
  divImg = document.createElement('img');
  cards[numbers[n]].appendChild(divImg);

  imgs[numbers[n]].id = n

  divImg.setAttribute('src',  imagens[n]);
});

btn.addEventListener('click', () => {
  const score = document.querySelector('.score');

  score.classList.remove('d-none');
  score.classList.add('d-flex', 'justify-content-center');

  btn.classList.add('d-none');

  for(i=0;i<24;i++) {
    cards[i].classList.add('d-none');
  }

  let click = 0;
  let clickCount = 0;
  let lister = 0;
  let clicker = true;
  let clickerCheck;


  cols.forEach(col => {

    col.addEventListener('click', () => {
      if (clicker == true) {
        clicker = false
        cards[col.id].classList.remove('d-none');

        function settime() {
          if (click != clickCount) {
            cards[col.id - 1].classList.add('d-none');
            cards[col.id].classList.add('d-none');
          }
          console.log('sim')
        }
        clickCount = click;
        
        if (lister == 1) {
          setTimeout(settime, 600);
        }
        click = imagens[imgs[col.id].id];
        
        console.log(click, clickCount)

        lister++


      
    }

    console.log(clickerCheck, col.id)
    
      if (clickerCheck == col.id) {
        clicker = false;
      } 
      if (clickerCheck != col.id) {
        clicker = true;
      }

    console.log(clicker)
    
    clickerCheck = col.id;

    })
      
      

  })
})
