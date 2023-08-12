// Condicionales
/**
 * Operadores de comparación
 * (==) comparamos valores sin importar el tipo de dato
 * (===) comparamos valores respetando el tipo de dato
 * (>) Mayor que
 * (<) Menor que
 * (>=) Mayor igual
 * (<=) Menor igual
 * (!=) Diferente que no respeta tipos de datos
 * (!==) Diferente que respeta tipos de datos
 */

/**
 * Operadores lógicos
 * (||) - O
 * (&&) - Y
 */
//Declaramos la variable edad
const age = prompt("Edad: ");
const country = prompt("País").toLowerCase();

// Condicional if/else "16"
if (age > "16" && country != "alemania") {
  alert("Se habilitó el catálogo de Películas Violentas");
} else {
  alert("No tienes permiso de ver este catalogo");
}
