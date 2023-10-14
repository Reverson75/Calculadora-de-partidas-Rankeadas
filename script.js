let vitorias = 70;
let derrotas = 23;

function calculadoraRankeada(vitorias, derrotas) {
   const saldoRankeadas = vitorias - derrotas;

   if (saldoRankeadas <= 10) {
      console.log("O Herói tem um saldo de Rankeadas de: " + saldoRankeadas + " vitórias e está no nível de Ferro");
   } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20) {
      console.log("O Herói tem um saldo de Rankeadas de: " + saldoRankeadas + " vitórias e está no nível de Bronze");
   } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
      console.log("O Herói tem um saldo de Rankeadas de: " + saldoRankeadas + " vitórias e está no nível de Prata");
   } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
      console.log("O Herói tem um saldo de Rankeadas de: " + saldoRankeadas + " vitórias e está no nível de Ouro");
   } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
      console.log("O Herói tem um saldo de Rankeadas de: " + saldoRankeadas + " vitórias e está no nível de Diamante");
   } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
      console.log("O Herói tem um saldo de Rankeadas de: " + saldoRankeadas + " vitórias e está no nível de Lendário");
   } else if (saldoRankeadas >= 101) {
      console.log("O Herói tem um saldo de Rankeadas de: " + saldoRankeadas + " vitórias e está no nível de Imortal");
   }
}

calculadoraRankeada(vitorias, derrotas);
