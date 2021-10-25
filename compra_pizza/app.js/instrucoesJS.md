# Arquivo de Instruções e definições usados em script.js #
/* querySelector
    - Para não ficar digitando todo momento querySelector é melhor criar const
    - passe a const - melhora o codigo fica mais limpo e leve
    - dei nome de query pra entendimento
    - não funciona como parametro de item exemplo (pizzaItem.query)
*/ 
 /* INSTRUÇÕES PARA LISTAGEM DAS PIZZAS
    - pega item e index através do map (pizzaJson) - pizzas.js
    - pega estrutura da (div models .pizza-item) e clona tudo (cloneNode) 
    - vamos adicionar as informações de .pizzaItem (img, preço, name, description)
    - adicionar .pizzaItem evento de click na tag <a> e bloquear remover evento padrao de origem do item (preventDefaut)
    - pegar local e adiciona .pizza-area .append
    - vamos abrir o modal - pizzawindowArea - gerando animação opacity 0 para 1 com setTimeout
    - definir uma variavel para saber qual pizza foi clicada -setAttribute (data-key), (ver div console) e ver informações para modal(index) - data-key[0...]
    - passando informações para modal (.pizzaInfo h1) = (img, preço, name, description)
    - passando informações dos tamanhos (.pizzaInfo--size).forEach
    - removendo e selecionando pizza grande no modal (classList) - mostrar apenas quando carregado.
    - adicionado (.pizzaInfo--qt) variavel modalQt (fora da funçao) - setando a quantidade de itens selecionados
    - resetar variavel modal (dentro da função) para receber = modalQt 1
    - Inserindo botão cancelar para desktop e voltar para mobile
*/
/* INSTRUÇÕES PARA EVENTOS DO MODAL
    - Ativar botão cancelar para desktop e voltar para mobile
    - inserir opacity 0 para fechar e depois display none
    - criar evento de fechar selecione os botões de cancelar e voltar e adicione forEach para pegar o item e evento de click, close modal
    - alterando botões de quantidades (+ | - ) inserindo evento de click, adicionando ao modalQt e mostrando nova quantidade


*/
