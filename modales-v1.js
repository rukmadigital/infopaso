const infoData = [
    {
        pasoId : "1",
        pasoName : "Cuarentena",
        pasoUrl : "img/state/c-paso-1.svg",
        pasoClass : "paso1",
        
        titleLinks : "Link de Interes",
        nameLink1 : "Salvo Conducto",
        urlLink1 : "https://www.google.co/",
        nameLink2 : "Permiso Temporal",
        urlLink2 : "https://www.google.cl/",

        pasoAlerta : "Todo siguiendo los protocolos establecidos.",
    },
    {
        pasoId : "2",
        pasoName : "Transición",
        pasoUrl : "img/state/c-paso-2.svg",
        pasoClass : "paso2",

        titleLinks : "Link de Interes",
        nameLink1 : "Salvo Conducto",
        urlLink1 : "https://www.google.co/",
        nameLink2 : "Permiso Temporal",
        urlLink2 : "https://www.google.cl/",

        pasoAlerta : "Todo lo que funcione, debe ser siguiendo los protocolos establecidos.",
    },
    {
        pasoId : "3",
        pasoName : "Preparación",
        pasoUrl : "img/state/c-paso-3.svg",
        pasoClass : "paso3",

        titleLinks : "Link de Interes",
        nameLink1 : "Salvo Conducto",
        urlLink1 : "https://www.google.co/",
        nameLink2 : "Permiso Temporal",
        urlLink2 : "https://www.google.cl/",

        pasoAlerta : "Todo lo que funcione, debe ser siguiendo los protocolos establecidos.",
    },
    {
        pasoId : "4",
        pasoName : "Apertura Inicial",
        pasoUrl : "img/state/c-paso-4.svg",
        pasoClass : "paso4",

        titleLinks : "Link de Interes",
        nameLink1 : "Salvo Conducto",
        urlLink1 : "https://www.google.co/",
        nameLink2 : "Permiso Temporal",
        urlLink2 : "https://www.google.cl/",

        pasoAlerta : "Todo lo que funcione, debe ser siguiendo los protocolos establecidos.",
    },
    {
        pasoId : "5",
        pasoName : "Apertura Avanzada",
        pasoUrl : "img/state/c-paso-5.svg",
        pasoClass : "paso5",

        titleLinks : "Link de Interes",
        nameLink1 : "Salvo Conducto",
        urlLink1 : "https://www.google.co/",
        nameLink2 : "Permiso Temporal",
        urlLink2 : "https://www.google.cl/",

        pasoAlerta : "Todo lo que funcione, debe ser siguiendo los protocolos establecidos.",
    }

];




function headerTemplate(info){
    return `  
    <div class="modal right fade" id="${info.pasoId}" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header ${info.pasoClass}">
        <div class="grid-container">
          <div class="volver">
            <button type="button" class="close" data-dismiss="modal">
              <i class="fa fa-angle-left" aria-hidden="true"></i> Volver
            </button>
          </div>
          <div class="nameStep">
            <p class="dataSeg">Etapa de</p>
            <p class="dataName">${info.pasoName}</p>
          </div>
          <div class="imgStep">
            <img src="${info.pasoUrl}" alt="">
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="boxinteres">
          <p class="title">${info.titleLinks}</p>
          <hr>

          <ul>
            <li><a href="${info.urlLink1}">${info.nameLink1}<i class="fa fa-angle-right" aria-hidden="true"></i></a> </li>
            <li><a href="${info.urlLink2}">${info.nameLink2}<i class="fa fa-angle-right" aria-hidden="true"></i></a> </li>
          </ul>

        </div>

        <div class="funcionan">
          <div class="row">
            <div class="col-lg-12">
              <p class="title">
                ¿Qué funciona en mi comuna?
              </p>
              <p class="parrafo">
                Revisa lo que esta funcionando hoy
              </p>
            </div>

            <br>

            <!-- Esenciales -->
            <div class="col-lg-12">
            
              <p class="subtitle">
                    Escenciales
              </p>

              <div class="cardFun">
                <div class="grid-container">
                  <div class="imgFun">
                      <img src="img/funcionan/farmacia.svg" alt="">
                  </div>
                  <div class="titleFun">
                    <p class="parrafo">
                    Farmacia
                    </p>
                  </div>
                </div>
              </div>


              </div>
           
            <!-- alerta -->
            <div class="col-lg-12">
              <br>
              <div class="cardFun alertaEtapa">
                <div class="grid-container">
                  <div class="imgFun">
                      <img src="img/funcionan/alerta.svg" alt="">
                  </div>
                  <div class="titleFun">
                    <p class="parrafo">
                    ${info.pasoAlerta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- alerta -->
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>

  `
}
document.getElementById("modalesEtapas").innerHTML = `
${infoData.map(headerTemplate).join('')}
`

