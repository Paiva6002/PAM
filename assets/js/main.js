const imgs = document.querySelectorAll('img');
const cols = document.querySelectorAll('.col-4');


let imagens = ['./assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png']

let count = [];
let = [];
let igual = 0



cols.forEach(col => {
  let randomN = parseInt(Math.random() * 11);
  count[col.id] = randomN

  imagens.forEach(imagem => {
    for(i=0;i<12;i++) {
      if(imagem == imagens[i]) {
        igual ++
      }
      if (igual == 2) {
        imagens[i] = ''
        
        igual = 0
      }


  }
  });

  imgs[col.id].setAttribute('src', imagens[randomN])
})



console.log(imagens)


// cols.forEach(col => {
//   col.addEventListener('click', () => {
//     let randomN = parseInt(Math.random() * 11);
    

//     imgs[col.id].setAttribute('src', imagens[randomN]);
//     imgs.forEach(img => {
      
//     });
//   })
// });


