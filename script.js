// 1) Cálculo da soma
let INDICE = 13;
let SOMA = 0;
let K = 0;
while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}
document.getElementById("resultadoSoma").innerText = SOMA;

// 2) Verificar se um número pertence à sequência de Fibonacci
function verificarFibonacci() {
  let numero = parseInt(document.getElementById("fibonacciInput").value);
  let fib = [0, 1];
  let i = 2;
  while (fib[i - 1] < numero) {
    fib[i] = fib[i - 1] + fib[i - 2];
    i++;
  }
  let resultado = fib.includes(numero)
    ? "O número pertence à sequência de Fibonacci."
    : "O número não pertence à sequência de Fibonacci.";
  document.getElementById("resultadoFibonacci").innerText = resultado;
}

// 3) Calcular faturamento mensal
function calcularFaturamento() {
  const faturamento = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
  ];
  let totalFaturamento = faturamento.reduce(
    (total, estado) => total + estado.valor,
    0
  );
  let menorFaturamento = Math.min(...faturamento.map((estado) => estado.valor));
  let maiorFaturamento = Math.max(...faturamento.map((estado) => estado.valor));
  let mediaMensal = totalFaturamento / faturamento.length;
  let diasAcimaDaMedia = faturamento.filter(
    (estado) => estado.valor > mediaMensal
  ).length;

  let resultado = `
        Menor faturamento: R$${menorFaturamento.toFixed(2)}<br>
        Maior faturamento: R$${maiorFaturamento.toFixed(2)}<br>
        Dias acima da média: ${diasAcimaDaMedia}
    `;
  document.getElementById("resultadoFaturamento").innerHTML = resultado;
}

// 4) Calcular percentual de representação dos estados
function calcularPercentual() {
  const faturamento = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 },
  ];
  let totalFaturamento = faturamento.reduce(
    (total, estado) => total + estado.valor,
    0
  );
  faturamento.forEach((estado) => {
    let percentual = (estado.valor / totalFaturamento) * 100;
    estado.percentual = percentual.toFixed(2);
  });

  let resultado = faturamento
    .map((estado) => `${estado.estado}: ${estado.percentual}%`)
    .join("<br>");
  document.getElementById("resultadoPercentual").innerHTML = resultado;
}

// 5) Inverter uma string
function inverterString() {
  let str = document.getElementById("inputString").value;
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  document.getElementById("resultadoString").innerText = invertida;
}
