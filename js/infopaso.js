$(document).ready(function(){
    //$.ajaxSetup({ cache: true });
    $('#buscador').keyup(function(){
    $('#listado').html('');
      var searchField = $('#buscador').val();
      var expression = new RegExp(searchField, "i");
      $.getJSON('https://us-central1-rukma-landing-page-srv001.cloudfunctions.net/get-data-ppp', function(data) {
      $.each(data, function(keyup, value){
        if (value.comuna.search(expression) !== -1)
        {
          $('#listado').append('<div class="cardPlace"><div class="grid-container"><div class="infoCardPlace"><p class="dataName">'+value.comuna+'</p><p class="dataSeg">Estado de '+value.estado+'</p></div><div class="stateCardPlace"><img src="'+value.paso+'" class="dataState" alt="estado"></div></div></div>');
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



