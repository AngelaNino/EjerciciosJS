// Ejercicio de Lògica

const day = prompt("Ingrese día").toLowerCase();
if (day === "") {
  alert("No es valido vacío, por favor ingrese un día de la semana");
} else {
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "miércoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert("Es un día entre semana");
  } else {
    //if anidados
    if (day === "sabado" || day === "sábado" || day === "domingo") {
      alert("Es un fin de semana");
    } else {
      alert("Por favor ingrese solo días de la semana");
    }
  }
}

/**
 * NOTAS:
 * 1- Mayúsculas
 * 2 - Palabras que no son días
 * 3 - Vacío
 * 4 - No le de nada
 */
