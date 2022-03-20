let player1 = {
   nome: "Kassius",
   vitorias: 10,
   empates: 3,
   derrotas: 1,
   pontos: 33
};
let player2 = {
   nome: "Gui",
   vitorias: 3,
   empates: 4,
   derrotas: 5,
   pontos: 13
};
let player3 = {
   nome: "Paulo",
   vitorias: 2,
   empates: 1,
   derrotas: 1,
   pontos: 7
};
let player4 = { nome: "Rafa", vitorias: 1, empates: 4, derrotas: 2, pontos: 7 };

//caso seja necessário alterar a pontuação por vitória ou empate basta mudar aqui
const pontosVitoria = 3;
const pontosEmpate = 1;

let jogadores = [player1, player2, player3];
exibirNaPagina(jogadores); // exibindo os 3 jogadores na página html
jogadores.push(player4); // testando a inserção de um jogador

function adicionarVitoria(index) {
   let jogador = jogadores[index];
   jogador.vitorias++;
   jogador.pontos += pontosVitoria;
   exibirNaPagina(jogadores);
}

function adicionarDerrota(index) {
   let jogador = jogadores[index];
   jogador.derrotas++;
   exibirNaPagina(jogadores);
}

function adicionarEmpate(index) {
   let jogador = jogadores[index];
   jogador.empates++;
   jogador.pontos += pontosEmpate;
   exibirNaPagina(jogadores);
}

function diminuirVitoria(index) {
   let jogador = jogadores[index];
   if (jogador.vitorias > 0) {
      jogador.vitorias--;
      jogador.pontos -= pontosVitoria;
      exibirNaPagina(jogadores);
   } else {
      alert("Não posso reduzir mais...");
   }
}

function diminuirEmpate(index) {
   let jogador = jogadores[index];
   if (jogador.empates > 0) {
      jogador.empates--;
      jogador.pontos -= pontosEmpate;
      exibirNaPagina(jogadores);
   } else {
      alert("Não posso reduzir mais...");
   }
}

function diminuirDerrota(index) {
   let jogador = jogadores[index];
   if (jogador.derrotas > 0) {
      jogador.derrotas--;
      exibirNaPagina(jogadores);
   } else {
      alert("Não posso reduzir mais...");
   }
}

function exibirNaPagina(players) {
   let html = "";
   //ordenar a exibição pelo número de pontos de forma decrescente
   players.sort((a, b) => b.pontos - a.pontos);

   //montar a tabela html dos jogadores na ordem acima definida
   for (let i = 0; i < players.length; i++) {
      html += "<tr><td>" + players[i].nome + "</td>";
      html +=
         "<td><button id='btn-diminui' onClick='diminuirVitoria(" +
         i +
         ")'>-</button>" +
         players[i].vitorias +
         "<button id='btn-incrementa' onClick='adicionarVitoria(" +
         i +
         ")'>+</button></td>";
      html +=
         "<td><button id='btn-diminui' onClick='diminuirEmpate(" +
         i +
         ")'>-</button>" +
         players[i].empates +
         "<button id='btn-incrementa' onClick='adicionarEmpate(" +
         i +
         ")'>+</button></td>";
      html +=
         "<td><button id='btn-diminui' onClick='diminuirDerrota(" +
         i +
         ")'>-</button>" +
         players[i].derrotas +
         "<button id='btn-incrementa' onClick='adicionarDerrota(" +
         i +
         ")'>+</button></td>";
      html += "<td>" + players[i].pontos + "</td></tr>";
   }
   //obtem o elemento table e insere o html montado acima
   let tablePlayers = document.getElementById("tabelaJogadores");
   tablePlayers.innerHTML = html;
}