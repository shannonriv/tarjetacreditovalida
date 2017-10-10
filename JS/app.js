// por medio de un prompt solicitamos numero de tarjeta
var arrCredCard = prompt('Ingrese tarjeta de crédito:');
// creamos un arreglo vacío
var newArr = [];
// funcion para invertir el orden del arreglo
function reverse(arrCredCard) {
  for (var i = (arrCredCard.length - 1); i >= 0; i--) {
    newArr.push(arrCredCard[i]);
  }
  return newArr;
}

reverse(arrCredCard);
newArr;

// funcion para obtener los elementos de indice par

function pairIndex(newArr) {
 	var arr = [];

	for (var i = 0; i<newArr.length; i++){
		if(i % 2 === 0){
		    arr.push(newArr[i])}
	}
	return arr;
}
pairIndex(newArr);
