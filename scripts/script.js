// Aprendendo a remover item da lista

/*NomeDaLista.shift(); // Remove o primeiro item
NomeDaLista.pop(); // Remove o último item

NomeDaLista.splice(); // Remove um item da lista
NomeDaLista.includes(item); // Verifica se a Lista contém o item
NomeDaLista.indexOf(item); // Retorna o índice do item dentro da Lista
*/


let index;
let itemRemover;
let Comida = ["banana", "maçã", "coxinha", "pão", "laranja"];

alert(`LISTA DE COMPRAS: ${Comida}`);
itemRemover = prompt("Qual item deseja excluir da lista?");

// Verificar se a lista contém o item, retornar o índice do item e excluir qualquer item da lista
if(Comida.includes(itemRemover)){
    index = Comida.indexOf(itemRemover);
    Comida.splice(index, 1);
    alert(`Item removido: ${itemRemover}.\n\nLISTA DE COMPRAS atualizada:\n${Comida}`);
}

