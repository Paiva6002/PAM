const imgs = document.querySelectorAll('.img');
const cards = document.querySelectorAll('.card');
const cols = document.querySelectorAll('.col-2');
const btn = document.querySelector('.btn')

let imagens = ['./assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png', './assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png']


class Score {
  constructor(points, life) {
    this.points = points;
    this.life = life;
  }
}

p1 = new Score(0, 3);

let nRandom;
let numbers = [];


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

  divImg.setAttribute('src', imagens[n]);
});

btn.addEventListener('click', () => {
  const score = document.querySelector('.score');
  const jogar = document.querySelector('.jogar')

  jogar.classList.add('d-none');
  score.classList.remove('d-none');
  score.classList.add('d-flex', 'justify-content-center');

  btn.classList.add('d-none');

  for (i = 0; i < 24; i++) {
    cards[i].classList.add('d-none');
  }

  let click = 0;
  let clickCount = 0;
  let lister = 1;
  let clicker = true;
  let clickerCheck;
  let imgNone;
  let cardsGalery = [];

  const life = document.querySelector('.life')
  
  const points = document.querySelector('.points')

  points.innerHTML = 'X0'+p1.points;
  life.innerHTML = '00000'+p1.life;

  cols.forEach(col => {

    col.addEventListener('click', () => {

      if (clicker == true) {
        clicker = false;

        cards[col.id].classList.remove('d-none');

        function settime() {
          if (click != clickCount) {
            imgNone.classList.add('d-none');
            imgs[col.id].classList.add('d-none');

            console.log(imgs[col.id], imgNone)

            p1.life = p1.life - 1;
            console.log(p1.life)
            life.innerHTML = '00000'+p1.life;

            
            
            if (p1.life == 0) {
              for (i = 0; i < 24; i++) {
                cards[i].classList.add('d-none');
              }
            }
            
            
          }
          if (click == clickCount) {
            cardsGalery.push(imgNone, imgs[col.id])
            p1.points = p1.points + 1
            console.log(p1.points)
            points.innerHTML = 'X0'+p1.points;

            
            
          }
        }
        
        
        clickCount = click;
        
        if (lister == 2) {
          setTimeout(settime, 600);
          lister = 0;
        }
        
        if (lister == 1) {
          imgNone = imgs[col.id];
        }
        click = imagens[imgs[col.id].id];
        
        lister++
      }
      
      console.log(clickCount, click);
      
      if (clickerCheck == col.id) {
        clicker = false;
      }
      if (clickerCheck != col.id) {
        clicker = true;
      }

      // console.log(clicker);
      
      clickerCheck = col.id;
      
      

    });

  });
});

