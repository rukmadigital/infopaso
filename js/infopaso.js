$(document).ready(function(){
    //$.ajaxSetup({ cache: true });
    $('#buscador').keyup(function(){
    $('#listado').html('');
      var searchField = $('#buscador').val();
      var expression = new RegExp(searchField, "i");
      $.getJSON('infopaso.json', function(data) {
      $.each(data, function(keyup, value){
        if (value.COMUNA.search(expression) !== -1)
        {
          //$('#listado').append('<div class="cardPlace"><div class="grid-container"><div class="infoCardPlace"><p class="dataName">'+value.COMUNA+'</p><p class="dataSeg">Estado de '+value.Estado+'</p></div><div class="stateCardPlace"><img src="img/state/c-paso-'+value.Paso+'.svg" class="dataState" alt="estado"></div></div></div>');

          $('#listado').append('<button class="cardPlace cardPlaceBoton" data-toggle="modal" data-target="#'+value.Paso+'"><div class="grid-container"><div class="infoCardPlace"><p class="dataName">'+value.COMUNA+'</p><p class="dataSeg">Estado de '+value.ESTADO+'</p></div><div class="stateCardPlace"><img src="img/state/c-paso-'+value.Paso+'.svg" class="dataState" alt="estado" /></div></div></button>');
        }
        });
     
      if(listado.innerHTML === ''){
         listado.innerHTML += `
         <div class="emptyState">
           <div class="grid-container">
             <div class="iconBlankState">
               <img src="img/emptystate/iconBlankState2.svg" alt="Mmm, ¿estará bien escrito? no lo encontramos ..." />
             </div>
             <div class="infoBlankState">
               <p class="dataSeg">
                 Mmm, ¿estará bien escrito? no lo encontramos ...
               </p>
             </div>
           </div>
         </div>
         `
       }
     });
    });
    
    $('#listado').on('click', 'li', function() {
     var click_text = $(this).text().split('|');
     $('#buscador').val($.trim(click_text[0]));
     $("#listado").html('');
    });
   });



