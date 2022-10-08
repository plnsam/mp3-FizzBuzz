const resultado = fizzbuzz(11);
console.log(resultado);

function fizzbuzz(valor) {
  if (typeof valor !== "number") return "Não é um número";
  if (valor % 3 === 0 && valor % 5 === 0) return "FizzBuzz";
  if (valor % 3 === 0) return "Fizz";
  if (valor % 5 === 0) return "Buzz";
  return valor;
}
