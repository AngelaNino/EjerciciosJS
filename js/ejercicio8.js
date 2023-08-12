let departament = prompt("Ingrese el Departamento");

if (departament === "null" || departament === "") {
  alert("No es valido vacío");
} else {
  departament = departament.toLowerCase();

  if (departament === "cundinamarca") {
    alert("La Capital de Cundinamarca es Bogotá");
  } else {
    if (departament === "quindio" || departament === "quindío") {
      alert("La Capital de Quindio es Armenia");
    } else {
      if (departament === "antioquia") {
        alert("La Capital de Antioquia es Medellín");
      } else {
        if (departament === "valle") {
          alert("La Capiatl de Valle es Cali");
        } else {
          alert("Por favor ingresar un Departamento valido");
        }
      }
    }
  }
}
