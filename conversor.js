function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converterbitcoin() {
	var valorElemento = document.getElementById("valor");
	var valor =valorElemento.value;
	var valorEmDolarNumerico = parseFloat(valor);
	console.log(valorEmDolarNumerico);

	var valorEmBitcoin = valorEmDolarNumerico * 38.810;
	console.log(valorEmBitcoin);

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em bitcoin é BTC" + valorEmBitcoin;
	elementoValorConvertido.innerHTML = valorConvertido;
}