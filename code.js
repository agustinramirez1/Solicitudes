$("#boton-plus").on("click", function (event) {
  $.get("http://192.168.16.90:8000/api/solicitudes", function (response) {
    $.each(response.data, function (index, elemento) {
      let tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
      let source = "img/" + tipo_sangre[elemento.tipo_sangre - 1] + ".png";
      

      var html = `<div class="col">
      <div class="card shadow bg-white rounded-4 mb-2">
        <div class="d-flex justify-content-between align-items-center mb-3 border-bottom p-3">
          <p><strong>${elemento.nombre_apellido_donatario}</strong></p>
          <p class="fs-5">
            <i class="bi bi-trash mx-2 text-danger"></i>
            <i class="bi bi-box-arrow-up"></i>
          </p>
        </div>
      
        <div class="p-3">
          <p class="d-flex justify-content-between">
            <span>Telefono:</span>
            <span>${elemento.telefono_contacto}</span>
          </p>
          <p class="d-flex justify-content-between">
            <span>C.I:</span>
            <span>${elemento.cedula_donatario}</span>
          </p>
          <p class="d-flex justify-content-between">
            <span>Lugar de Donación:</span>
            <span>${elemento.establecimiento}</span>
          </p>
          <p class="d-flex justify-content-between">
            <span>RH:</span>
            <img src="${source}" class="icono-sangre"></img>
          </p>
      
          <p class="d-flex justify-content-between">
            <span>Volumenes:</span>
            <span>${elemento.volumenes_necesarios}</span>
          </p>
          <p class="d-flex justify-content-between">
            <span>Fecha Limite:</span>
            <span>${elemento.fecha_limite}</span>
          </p>
      
          <div class="fs-4 ">
            <p>${elemento.solicitud}</p>
          </div>
        </div>
      </div>
    </div>`;

      $("#diseño").append(html);
    });
  });
});
