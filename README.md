# TARJETA DE CRÉDITO VÁLIDA

Este ejercicio está orientado a la validación de tarjetas de crédito según el algoritmo de Luhn o algoritmo de módulo 10. 

Consiste en una fórmula de suma de verificación utilizada para validar una diversidad de números de identificación como _número de tarjetas de crédito_, _documentos de identidad_, etc.

## SOLUCIÓN

### PASO 1

Por medio de una caja (_prompt_) solicitamos al usuario ingresar su número de tarjeta y se vería así:

    entrada = "Ingrese número de tarjeta de crédito"

### PASO 2

Pasar la entrada a un arreglo en orden inverso.

    var nuevoArray = [];

    funcion reverso(entrada){
        para (indice = longitud de entrada - 1; indice >= 0; indice disminuye en 1) {
            nuevoArray.empujar(entrada[indice]);
  }
  devolver nuevoArray;
}

### PASO 3

Aplicar la operación del algoritmo a los números de las posiciones pares.
