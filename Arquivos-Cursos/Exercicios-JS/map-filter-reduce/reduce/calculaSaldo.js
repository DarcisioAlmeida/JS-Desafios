function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));

// Outra forma de entender

const novaLista = [
  {
    name: ' sabao em po',
    preco: 14
  },
  {
    name: 'detergente',
    preco: 6
  },
  {
    name: 'amaciante',
    preco: 30
  }
]

const saldoDisponivel = 200
function calculaSaldoDisponivel(saldoDisponivel, novalista){
  return novaLista.reduce(function(prevent, current){
    console.log({prevent})
    console.log({current})
    return prevent - current.preco
  }, saldoDisponivel)
}
console.log(calculaSaldoDisponivel(saldoDisponivel, novaLista))