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

alert(`LISTA DE COMPRAS: ${Comida.join(", ")}`); // Usa .join(", ") para deixar a lista mais legível.
itemRemover = prompt("Qual item deseja excluir da lista?");

if (itemRemover) { // Valida o valor de itemRemover antes de continuar. Evita os problemas: clicar em cancelar (null) ou não digitar ("").
    itemRemover = itemRemover.toLowerCase(); // Converter para minúsculas para evitar erros
    if (Comida.includes(itemRemover)) {
        index = Comida.indexOf(itemRemover);
        Comida.splice(index, 1);
        alert(`Item removido: ${itemRemover}.\n\nLISTA DE COMPRAS atualizada:\n${Comida.join(", ")}`);
    } else {
        alert("Item não encontrado na lista.");
    }
} else {
    alert("Nenhum item foi inserido.");
}