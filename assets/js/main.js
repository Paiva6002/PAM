const imgs = document.querySelectorAll('.img');
const cards = document.querySelectorAll('.card');
const cols = document.querySelectorAll('.col-2');
const btn = document.querySelector('.btn')

let imagens = ['./assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png', './assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png']


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
  

  divImg.setAttribute('src',  imagens[n]);

  cardsGalery.push(imagens[n])
});

  
  console.log();


btn.addEventListener('click', () => {
  for(i=0;i<24;i++) {
    cards[i].classList.add('d-none');
  }

  cols.forEach(col => {
    col.addEventListener('click', () => {
      cards[col.id].classList.remove('d-none')
      console.log(cardsGalery[col.id])
    })
  });
  
})

