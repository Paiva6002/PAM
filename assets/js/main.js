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

  let click = 0; // Guarda valor da url da primeira imagem
  let clickCount = 0; // Guarda valor da url da segunda imagem
  let lister = 1; // Variavel criada para possibilitar que a troca de dados entre variáveis possa exister
  let clicker = true; // Possibilita que a mesma carta não seja clicada mais de uma vez
  let clickerCheck; // Armazena a primeira coluna clicada
  let imgNone; // Armazenar a primeira imagem 
  let colsGalery = []; // Array criado para armazenar as colunas que já possuem um par de cards 
  let colSecondary; // Var criada a primeira coluna que foi clicada

  const life = document.querySelector('.life'); // Pego o elemento de vida que está no html
  const points = document.querySelector('.points'); // Pego o elemento de acertos que está no html

  points.innerHTML = 'X0' + p1.points; // Exibo no documento os acertos
  life.innerHTML = '00000' + p1.life; // Exibo no documento os pontos de vida

  cols.forEach(col => { // Para cada elemento do array cols, dever ser feito...

    col.addEventListener('click', () => { // Irá adicionar um evento de click para cada elemento do array cols

      colsGalery.forEach(colGale => {

        if (col == colGale) { // Removerá o evento de click se a carta (imagem) já estiver sendo exibida, se a carta já possuir seu par e está sendo exibida no documento
          col.removeEventListener('click'); // Remove evento de click
        }
      });

      if (clicker == true) { // Condição feita para saber se o card já foi clicado ou não, ou seja, não é possível clicar mais de uma vez no elemento 
        clicker = false; // Resetar o valor do clicker, para que logo em seguida o if possa ser executado

        cards[col.id].classList.remove('d-none'); // Remove o display none para que a coluna apareça
        imgs[col.id].classList.remove('d-none'); // Remove o display none para que o elemento imagem apareça

        function settime() { // Função criada para colocar um atraso nos eventos
          if (click != clickCount) { // Verfica se as duas imagens que foram exibidas logo após o click, são diferentes, se sim..

            imgNone.classList.add('d-none'); // Esconde a primeira imagem
            imgs[col.id].classList.add('d-none'); // Esconde a segunda imagem

            p1.life = p1.life - 1; // Se as imagens forem diferentes, isso significa que ele errou, então consequentemente ele acaba perdendo pontos de vida
            life.innerHTML = '00000' + p1.life; // É exibido os pontos de vida no documento com seu valor já atualizado

            if (p1.life == 0) { // Quando seus pontos de vida chegarem a 0...
              container.classList.add('d-none'); // Esconde o elemento container, que é o elemento principal
              containerMsg.classList.remove('d-none'); // Remove display none do elemento, assim o tornando visível novamente
              msg.classList.remove('d-none'); // Remove display none do elemento, assim o tornando visível novamente

              msg.innerHTML = "GAME OVER"; // Quando seus pontos de vida chegarem a 0, será exibido a mensagem de Game Over

              life.innerHTML = p1.life = '00000' + 3; // É exibido no documento a quantidade de pontos de vida que o jogador possui enquando ele joga
            }
          }

          if (click == clickCount) { // Verfica se as duas imagens que foram exibidas logo após o click, são iguais, se sim..
            colsGalery.push(col, colSecondary); // Envia as colunas que foram clicadas para o array colsGalery, esse array será usado para remover o evento de click se a carta já estiver sendo exibida, se a carta já possuir seu par e está sendo exibida no documento

            p1.points = p1.points + 1; // Soma mais um ponto para o jogador, já que ele achou um par
            points.innerHTML = 'X0' + p1.points; // Exibi o valor atualizado dos acertos no documento

            if (p1.points == 12) { // Quando seus acertos chegarem a 12...
              container.classList.add('d-none'); // Esconde o elemento container, que é o elemento principal
              containerMsg.classList.remove('d-none'); // Remove display none do elemento, assim o tornando visível novamente
              msg.classList.remove('d-none'); // Remove display none do elemento, assim o tornando visível novamente

              msg.innerHTML = "CONGRATULATIONS"; // Quando seus acertos chegarem a 12, será exibido a mensagem de Congratulations


              points.innerHTML = p1.points = '00000' + 0; // É exibido no documento a quantidade de acertos que o jogador acertou enquando ele joga e vai ganhando
            }
          }

        }
        clickCount = click; // Guarda a imagem a url da imagem que foi clicada, para que assim possa ser verificado que se os pares são iguais ou não

        if (lister == 2) { // Quando lister for igual a 2, executar linhas que estão dentro desse if
          if (clickerCheck != col.id) {
            setTimeout(settime, 150); // Atraso de 150 milissegundos
          }
          if (clickerCheck == col.id) { // Se for clicado na mesma card duas vezes...
            cards[col.id].classList.add('d-none'); // Card será escondida
            imgs[col.id].classList.add('d-none'); // Card será escondida
          }

          lister = 0; // Reinicia o valor do lister, para que assim o loop possa rodar novamente 
        }

        if (lister == 1) { // Quando lister for igual a 1, executar linhas que estão dentro desse if
          imgNone = imgs[col.id]; // imgNone guarda a primeira imagem

          colSecondary = col; // colSecondary recebe o valor da coluna que foi clicada
        }
        click = imagens[imgs[col.id].id]; // click receve o valor da url da imagem

        lister++; // Lister irá receber + 1, que irá somar com o seu valor
      }

      // Sistema de restrição , feito para que o usuário não possa clicar mas de uma vez no card 
      if (clickerCheck == col.id) {  // Se clicker for igual o id da coluna que foi clicada
        clicker = false; // clicker é igual a false
      }
      if (clickerCheck != col.id) { // Se clicker for diferente o id da coluna que foi clicada
        clicker = true; // clicker é igual a true
      }

      clickerCheck = col.id; // clickerCheck é igual o id da coluna clicada
    });
  });
});
