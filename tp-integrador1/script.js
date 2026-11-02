let contenedor = document.querySelector("#provincias");
let cantidad = document.querySelector("#cantidad");

// Pedir las provincias de Argentina a la API
fetch("https://apis.datos.gob.ar/georef/api/provincias")
    .then(respuesta => respuesta.json())
    .then(datos => {
        let provincias = datos.provincias;

        contenedor.innerHTML = "";
        cantidad.textContent = provincias.length + " provincias";

        // Recorrer todas las provincias
        for (let i = 0; i < provincias.length; i++) {
            let provincia = provincias[i];

            contenedor.innerHTML += `
                <div class="col">
                    <div class="card tarjeta">
                        <div class="card-body">
                            <p class="provincia-numero">PROVINCIA ${i + 1}</p>
                            <h5 class="card-title">${provincia.nombre}</h5>
                            <p class="dato">
                                Código: ${provincia.id}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }
    })
    .catch(error => {
        contenedor.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">
                    No se pudieron cargar las provincias.
                    Revisá tu conexión a internet e intentá nuevamente.
                </div>
            </div>
        `;

        cantidad.textContent = "Error";
        console.log("Error al consultar la API:", error);
    });
