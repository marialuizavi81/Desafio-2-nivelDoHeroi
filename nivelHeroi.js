
let saldoVitorias = 500
let saldoDerrotas =92
    
    let rankeada = saldoVitorias - saldoDerrotas;
    let nivel = 0
  
    if (rankeada >=0  && rankeada <= 10) {
      nivel = "Ferro";
    } else if (rankeada >= 11 && rankeada <= 20) {
      nivel = 'Bronze';
    } else if (rankeada >= 21 && rankeada <= 50) {
      nivel = 'Prata';
    } else if (rankeada >= 51 && rankeada <= 80) {
      nivel = 'Ouro';
    } else if (rankeada >= 81 && rankeada <= 90) {
      nivel = 'Diamante';
    } else if (rankeada >= 91 && rankeada <= 100) {
      nivel = 'Lendário';
    } else if (rankeada >= 101) {
      nivel = 'Imortal';
    } else {
      nivel = 'Desconhecido';
    }
  
    console.log("O Herói tem de saldo de "+ rankeada + " está no nível de "+ nivel);