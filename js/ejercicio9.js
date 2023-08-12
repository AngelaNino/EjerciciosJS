/**
Ingresar un departamento (Cundinamarca, quindio, antioquia, valle)
Ingresar objetivo de visita (turismo, comidas, museos)
Dependiendo de la opcion elegida
ejemplo1 (antioquia y comidas)
mostrar un alert("las comidas mas populares en antioquia son la bandeja paisa, arepa rellena etc" )
ejemplo 2: se ingreso cundinamarca y turismo
mostrar un alert(lugares para visitar en cundinamarca es monserrate, la candelaria etc)
alert("opcion no valida") en caso que no se ingrese alguna de las opciones
**/

let department = prompt(
  "Ingrese un Departamento entre: Cundinamarca, Quindio, Antioquia o Valle"
);
let object = prompt(
  "Ingrese un Objetivo de su Visita en el Departamento elegido con anterioridad. Puede validar: Turismo, Comidas o Museos"
);

if (department === "" || object === "") {
  alert("Opción no Valida");
  alert(
    "Debes colocar ambos datos: Departamento y Objetivo. Por favor recarga la página nuevamente."
  );
} else {
  department = department.toLowerCase();
  object = object.toLowerCase();
  if (department === "cundinamarca" && object === "turismo") {
    alert(
      "En Cundinamarca puedes visitar lugares como: Zipaquirá, Girardot y Guatavita"
    );
  } else {
    if (department === "cundinamarca" && object === "comidas") {
      alert(
        "En Cundinamarca puedes probar: Ajiaco, Fritanga y Roscón resobado"
      );
    } else {
      if (department === "cundinamarca" && object === "museos") {
        alert(
          "En Cundinamarca puedes visitar los siguientes museos: Casa Museo Salto de Tequendama, Museo Aeroespacial Fuerza Aérea Colombiana y Museo Indigena en Guatavita"
        );
      } else {
        if (
          (department === "quindio" || department === "quindío") &&
          object === "turismo"
        ) {
          alert(
            "En Quidío puedes visitar lugares como: Salento, Valle de Cocora y Armenia"
          );
        } else {
          if (
            (department === "quindio" || department === "quindío") &&
            object === "comidas"
          ) {
            alert("En Quidío puedes probar: Mondongo, Trucha y Sudados");
          } else {
            if (
              (department === "quindio" || department === "quindío") &&
              object === "museos"
            ) {
              alert(
                "En Quindío puedes visitar Museos como: Museo del Oro Quimbaya en Armenia, Museo Gráfico y Audiovisual del Quindio en Calarcá y Casa Museo Arte Universal en Filandia"
              );
            } else {
              if (department === "antioquia" && object === "turismo") {
                alert(
                  "En Antioquia puedes visitar lugares como: Medellín, Guatape y Jericó"
                );
              } else {
                if (department === "antioquia" && object === "comidas") {
                  alert(
                    "En Antioquia puedes probar: Bandeja Paisa, Morcilla Antioqueña y Mazamorra Paisa"
                  );
                } else {
                  if (department === "antioquia" && object === "museos") {
                    alert(
                      "En Antioquia puedes visitar los estos museos: Museo de Arte Moderno en Medellín, Museo de Geociencias y Planetario de Medellín Jesús Emilio Ramírez"
                    );
                  } else {
                    if (department === "valle" && object === "turismo") {
                      alert(
                        "En el de partamento de Valle del Cauca puedes vistar lugares como: Zoológico de Cali, Isla Malpelo y Basílica del Señor de los Milagros de Buga"
                      );
                    } else {
                      if (department === "valle" && object === "comidas") {
                        alert(
                          "En e Valle del Cauca puedes probar: Chontaduro, Cholado y Lulada"
                        );
                      } else {
                        if (department === "valle" && object === "museos") {
                          alert(
                            "En el Valle del Cauca puedes visitra los siguientes Museos: Museo la Tertulia en Calí, Museo Aéreo Fenix en La Esmeralda y Museo del Oro Calima del Banco de la República en Cali"
                          );
                        } else {
                          alert(
                            "Debes colocar ambos datos: departamento y objetivo. Por favor recarga la página nuevamente."
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
