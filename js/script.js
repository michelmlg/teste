"use strict";

console.log("carregou");

// const nome = document.getElementById('name');
// const dataAdmissao = new Date(document.getElementById('data').value)
// const salario = document.getElementById('salary');
// const valorEmprestimo = document.getElementById('loanValue');
// const btnCalcular = document.getElementById('btnCalcular');
// const saida = document.getElementById('saida');

function calcularAnosDeCasa(date) {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - date.getFullYear();
}

//Divide valor total pela quantidade de notas respectivamente
function calcularNotasMaiorValor(valor) 
{
    const notas100 = Math.floor(valor / 100);
    const notas50 = Math.floor((valor % 100) / 50);
    let sobra = valor - (notas100*100 + notas50*50);
    if(sobra === 0)
    {
        return { notas100, notas50 };
    }else{
        const notas20 = Math.floor(sobra / 20);
        const notas10 = Math.floor(Math.floor(sobra % 20) / 10);
        const notas5 = Math.floor(Math.floor(sobra % 10) / 5);
        const notas2 = Math.floor(Math.floor(sobra % 5) / 2);
        return { notas100, notas50, notas20, notas10, notas5, notas2 };
    }
    
}

//Divide valor total pela quantidade de notas respectivamente (Porém por notas menores)
function calcularNotasMenorValor(valor) 
{
    const notas20 = Math.floor(valor / 20);
    const notas10 = Math.floor(Math.floor(valor % 20) / 10);
    const notas5 = Math.floor(Math.floor(valor % 10) / 5);
    const notas2 = Math.floor(Math.floor(valor % 5) / 2);
    return { notas20, notas10, notas5, notas2 };
}

//Divide o valor a ser separado por notas de maior valor e posteriormente soma o resto com a outra metade que será dividida pelas notas de menor valorcalcularNotasMenorValor(valor) 
function calcularNotasMeio(valor)
{
    let metade = valor / 2;
    const notas100 = Math.floor(metade / 100);
    const notas50 = Math.floor((metade % 100) / 50);
    let resto = (metade % 50) + metade;
    const notas20 = Math.floor(resto / 20);
    const notas10 = Math.floor(Math.floor(resto % 20) / 10);
    const notas5 = Math.floor(Math.floor(resto % 10) / 5);
    const notas2 = Math.floor(Math.floor(resto % 5) / 2);

    return { notas100, notas50, notas20, notas10, notas5, notas2 };

}
let vish = calcularNotasMaiorValor(3576);
console.log(vish);
// let resultado = calcularNotasMaiorValor(3256);
// console.log(resultado);
// let resultado2 = calcularNotasMeio(3256);
// console.log(resultado2);
function exibirResultado(nome, valor, notasMaiorValor, notasMenorValor, notasMeioAMeio) 
{
    const resultadoDiv = document.getElementById('resultado');
    console.log(resultadoDiv.innerHTML);
    resultadoDiv.innerHTML = `
      <h2>Resultado da Simulação de ${nome}</h2>
      <p>Valor empréstimo: ${valor.toFixed(2)} reais</p>
      <p>Notas de maior valor:</p>
      <ul>
        <li>${notasMaiorValor.notas100} x 100 reais</li>
        <li>${notasMaiorValor.notas50} x 50 reais</li>
        <li>${notasMaiorValor.notas20} x 50 reais</li>
        <li>${notasMaiorValor.notas10} x 50 reais</li>
        <li>${notasMaiorValor.notas5} x 50 reais</li>
        <li>${notasMaiorValor.notas2} x 50 reais</li>
      </ul>
      <p>Notas de menor valor:</p>
      <ul>
        <li>${notasMenorValor.notas20} x 20 reais</li>
        <li>${notasMenorValor.notas10} x 10 reais</li>
        <li>${notasMenorValor.notas5} x 5 reais</li>
        <li>${notasMenorValor.notas2} x 2 reais</li>
      </ul>
      <p>Notas meio a meio:</p>
      <p>${notasMeioAMeio.notas100} x 100 reais</p>
      <p>${notasMeioAMeio.notas50} x 50 reais</p>
      <p>${notasMeioAMeio.notas20} x 20 reais</p>
      <p>${notasMeioAMeio.notas10} x 10 reais</p>
      <p>${notasMeioAMeio.notas5} x 5 reais</p>
      <p>${notasMeioAMeio.notas2} x 2 reais</p>
    `;
  }
function exibirMensagem(mensagem) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
}  

function simularEmprestimo()
{
  console.log("simulu");
  const nome = document.getElementById('name').value;
  const admissao = new Date(document.getElementById('date').value);
  const salario = document.getElementById('salary').value;
  const emprestimo = document.getElementById('loanValue').value;

  const anosDeCasa = calcularAnosDeCasa(admissao);
  if (anosDeCasa > 5 && (anosDeCasa > 5 && emprestimo % 2 === 0)) {
      const notasMaiorValor = calcularNotasMaiorValor(emprestimo);
      const notasMenorValor = calcularNotasMenorValor(emprestimo);
      const notasMeioAMeio = calcularNotasMeio(emprestimo);

      exibirResultado(nome, emprestimo, notasMaiorValor, notasMenorValor, notasMeioAMeio);
    } else if (anosDeCasa <= 5) {
      exibirMensagem("Agradecemos seu interesse, mas você não atende os requisitos mínimos do programa.");
    } else {
      exibirMensagem("Insira um valor válido para o empréstimo (múltiplo de 2).");
    }
    return false;
}
//document.getElementById('btnCalcular').addEventListener("click",simularEmprestimo);
let input = document.getElementById('meuform');
input.addEventListener("submit", (event) => {
  console.log("me chamou nessaporra");
  return false;
})