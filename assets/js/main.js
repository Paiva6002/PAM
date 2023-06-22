const imgs = document.querySelectorAll('img');
const cols = document.querySelectorAll('.col-2');


let imagens = ['./assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png']

let randomN = 0;
let numbers = []
let nao = []

function randomNumber() {
  randomN = parseInt(Math.random() * 5);
}

function arrayRandomNumber() {
  for (i=0;i<5;i++) {
    randomNumber();

    numbers.push(randomN);
  }

  numbers.forEach(n => {
    for (i=0;i<5;i++) {
      if (n != i) {
        numbers.splice(i, 1);
      } else {

      }
    }
  });






}





arrayRandomNumber()
console.log(numbers);

// cols.forEach(col => {


//   imgs[randomN].setAttribute('src', imagens[randomN]);

// })

