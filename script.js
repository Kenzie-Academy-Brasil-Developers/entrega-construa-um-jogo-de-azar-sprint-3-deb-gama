
//jogador vai escolher pedra papel ou tesoura e o computador vai gerar o aleatório

//quando o jogador fizer a escolha, o botão deve disparar a função que compara com a escolha do computador


// let computadorJogada = 0;
// let jogadorJogada = 0;
// pedra = 1;
// papel = 2;
// tesoura = 3;


const pedra = document.getElementById("opcaoPedra");
pedra.addEventListener("click",()=>jogar(1))

const papel = document.getElementById("opcaoPapel");
papel.addEventListener('click',()=>jogar(2))

const tesoura = document.getElementById("opcaoTesoura");
tesoura.addEventListener('click',()=>jogar(3))



function jogar(escolha){

const display = document.getElementById("display");
display.innerHTML = "";

let jogadorJogada = escolha;
let computadorJogada = Math.floor(Math.random() * (3-1+1) +1);


let opcao = "";

if (computadorJogada === 1){
    opcao = "Computador escolheu Pedra";
}
if (computadorJogada === 2){
    opcao = "Computador escolheu Papel";
}
if (computadorJogada === 3){
    opcao = "Computador escolheu Tesoura";
}


let resultado = "";


if (jogadorJogada === computadorJogada){
    resultado = "Empate!";
}

if(jogadorJogada > computadorJogada){
    resultado = "Você ganhou!";
}

if(jogadorJogada < computadorJogada){
    resultado = "Você perdeu!";
}

if(jogadorJogada === 3 && computadorJogada === 1){
    resultado = "Você perdeu!";
}

if (jogadorJogada === 1 && computadorJogada === 3){
    resultado = "Você ganhou!";
}






const computadorOpcao = document.createElement('p');
const computadorConteudo = `${opcao}`;
computadorOpcao.innerText = computadorConteudo;
display.appendChild(computadorOpcao);

const vitoria = document.createElement('p');
const vitoriaConteudo = `${resultado}`;
vitoria.innerText = vitoriaConteudo;
display.appendChild(vitoria);






 
}




    
    
    



// display.innerText = '${resultado}'

// selecionar o display
// exibir a escolha do computador, da máquina e a frase de vitória




//criar um botão pra disparar a jogada do Jogador e logo depois a do computador.




