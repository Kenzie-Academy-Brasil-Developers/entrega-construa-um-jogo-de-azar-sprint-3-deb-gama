
//jogador vai escolher pedra papel ou tesoura e o computador vai gerar o aleatório

//quando o jogador fizer a escolha, o botão deve disparar a função que compara com a escolha do computador
// pedra = 1;
// papel = 2;
// tesoura = 3;

// let computadorJogada = 0;
// let jogadorJogada = 0;


const pedra = document.getElementById("opcaoPedra");
pedra.addEventListener("click",()=>jogar(1))

const papel = document.getElementById("opcaoPapel");
papel.addEventListener('click',()=>jogar(2))

const tesoura = document.getElementById("opcaoTesoura");
tesoura.addEventListener('click',()=>jogar(3))



function jogar(escolha){
let jogadorJogada = escolha;
let computadorJogada = Math.floor(Math.random() * (3-1+1) +1);
// let resultado = ""

// const display = document.getElementById("display");
// display.innerText = '${resultado}'

if (jogadorJogada === computadorJogada){
    alert("Empate!");
}

if(jogadorJogada > computadorJogada){
    alert("Você ganhou!");
}

if(jogadorJogada < computadorJogada){
    alert("Você perdeu!");
}

if(jogadorJogada === 3 && computadorJogada === 1){
    alert("Você perdeu!");
}

if (jogadorJogada === 1 && computadorJogada === 3){
    alert("Você ganhou!");
}
 
}




//criar um botão pra disparar a jogada do Jogador e logo depois a do computador.




