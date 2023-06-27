const imgs = document.querySelectorAll('.img');
const cards = document.querySelectorAll('.card');
const cols = document.querySelectorAll('.col-xxl-2');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const msg = document.querySelector('.msg');
const containerMsg = document.querySelector('.mensagem');

let imagens = ['./assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png', './assets/img/1.png', './assets/img/2.png', './assets/img/3.png', './assets/img/4.png', './assets/img/5.png', './assets/img/6.png', './assets/img/7.png', './assets/img/8.png', './assets/img/9.png', './assets/img/10.png', './assets/img/11.png', './assets/img/12.png']; // url das imagens são colocadas em uma array para serem utilizadas, nesse array existe 24 urls, mas existe 12 em si, pois estão duplicadas 


class Score { // Classe feita para guardar valor dos pontos de vida do jogador e seus acertos feitos
  constructor(points, life) {
    this.points = points;
    this.life = life;
  }
}

p1 = new Score(0, 3); // Atribuo o valor inicial dos pontos de vida e dos pontos de acertos

let nRandom; // Variável que ira guardar o número aleatório que será gerado mas adiante 
let numbers = []; // Array criado para guardar todos os números aleatórios criador 

function arrayRandom() { // Função que gera um array com números aleatórios que estão no intervalo de 0 e 23, o objetivo principal dessa função é criar o array com os númmeros do intervalo determinado fazendo com que números não se repitam 

  nRandom = parseInt(Math.random() * 24) // Gera o número aleatório

  numbers.forEach(n => { // Verifica se o número aleatório é igual a algum elemento que já foi criado anteriormente, tais números estão dentro do array numbers
    if (nRandom == n) {
      arrayRandom(); // Se existir a repetição do número, a função será reinicializada, assim criando um algoritmo recursivo
      n = nRandom; // Logo depois da função ser chamada, o elemento n do array irá receber o valor do novo número aleatório
    }
  });

  if (numbers.length == 24) { // Quando o número de elementos do array numbers alcançar 24, a função será finalizada
    return;
  }

  numbers.push(nRandom); // Enviando os números aleatórios para o array com a função push

  if (numbers.length < 24) { // Se o número de elementos do array numbers for menor que 24, a função será chamada até que esse requisito seja verdade, até que seu número de elementos seja igual a 24
    arrayRandom();
  }
}

arrayRandom(); // Chama a função, aqui já temos o array dos números aleatórios completo com seus 24 elementos

numbers.forEach(n => { // Passa em cada elemento do array numbers, ou seja, passa em cada número aleatório
  divImg = document.createElement('img'); // Cria um elemento img
  cards[numbers[n]].appendChild(divImg); // O elemento img criado e colocado dentro de outro elemento aleatoriamente 

  imgs[numbers[n]].id = n; // Atribui ids aleatórios para os elementos

  divImg.setAttribute('src', imagens[n]); // Atribui src para os elemetos img, é usado o array com as urls para atribuir o src
});

btn.addEventListener('click', () => { // Função de clique no botão 'Jogar', tal evento inicia o jogo
  const score = document.querySelector('.score'); // Pego um elemento do html, de acordo com sua classe
  const jogar = document.querySelector('.jogar');

  jogar.classList.add('d-none');  // Adiciono a classe display none, para o botão, para que ele desapareça quando for clicado
  score.classList.remove('d-none'); // Removo a classe display none, para que o score (pontos de vida e acertos) seja visível 
  score.classList.add('d-flex', 'justify-content-center'); // Adiciono display flex e justify-content-center no elemento

  for (i = 0; i < 24; i++) { // Deixar todos os cards (imagens), escondidas
    cards[i].classList.add('d-none');
  }

  let click = 0; // Variável criada 
  let clickCount = 0;
  let lister = 1;
  let clicker = true;
  let clickerCheck;
  let imgNone;
  let colsGalery = [];
  let colSecondary;

  const life = document.querySelector('.life');
  const points = document.querySelector('.points');

  points.innerHTML = 'X0' + p1.points;
  life.innerHTML = '00000' + p1.life;

  cols.forEach(col => {

    col.addEventListener('click', () => {

      colsGalery.forEach(colGale => {

        if (col == colGale) {
          col.removeEventListener('click');
        }
      });

      if (clicker == true) {
        clicker = false;

        cards[col.id].classList.remove('d-none');
        imgs[col.id].classList.remove('d-none');

        function settime() {
          if (click != clickCount) {

            imgNone.classList.add('d-none');
            imgs[col.id].classList.add('d-none');

            p1.life = p1.life - 1;
            life.innerHTML = '00000' + p1.life;


            if (p1.life == 0) {
              container.classList.add('d-none');
              containerMsg.classList.remove('d-none');
              msg.classList.remove('d-none');

              msg.innerHTML = "GAME OVER";

              life.innerHTML = p1.life = '00000' + 3
            }
          }


          if (click == clickCount) {
            colsGalery.push(col, colSecondary);

            p1.points = p1.points + 1;
            points.innerHTML = 'X0' + p1.points;

            if (p1.points == 12) {
              container.classList.add('d-none');
              containerMsg.classList.remove('d-none')
              msg.classList.remove('d-none');

              msg.innerHTML = "CONGRATULATIONS";
              

              life.innerHTML = p1.life = '00000' + 0
            }
          }
        }
        clickCount = click;

        if (lister == 2) {
          setTimeout(settime, 150);
          lister = 0;
        }

        if (lister == 1) {
          imgNone = imgs[col.id];

          colSecondary = col;
        }
        click = imagens[imgs[col.id].id];

        lister++;
      }

      if (clickerCheck == col.id) {
        clicker = false;
      }
      if (clickerCheck != col.id) {
        clicker = true;
      }

      clickerCheck = col.id;
    });
  });
});

