import React from 'react';

function Colapsar() {
  return (
    <>
      <p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Mostrar detalles
        </button>
      </p><div class="collapse" id="collapseExample">
        <div class="card card-body">
        La instalación de un nuevo programa o software en una PC es como dar vida a una nueva herramienta en nuestro arsenal tecnológico. A medida que se despliega el asistente de instalación, nos sumergimos en un proceso que combina anticipación y emoción. Observamos cómo los archivos se copian y los componentes se configuran meticulosamente en sus respectivas ubicaciones. Cada barra de progreso que se completa nos acerca un paso más a la experiencia que esperamos disfrutar.
        </div>
      </div>
    </>
  );
}

export default Colapsar;
