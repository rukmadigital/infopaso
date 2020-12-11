//antipinchtozom
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
        document.body.style.zoom = 0.99;
    });

    document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
        // special hack to prevent zoom-to-tabs gesture in safari
        document.body.style.zoom = 0.99;
    });

    document.addEventListener('gestureend', function(e) {
        e.preventDefault();
        // special hack to prevent zoom-to-tabs gesture in safari
        document.body.style.zoom = 0.99;
    });


//codito

    $(document).ready(function()
    {
    $('body').on("click",'.elbow',function()
      {
        var A=$(this).attr("id");
        var B=A.split("like");
          var messageID=B[1];
          var C=parseInt($("#likeCount"+messageID).html());
        $(this).css("background-position","")
          var D=$(this).attr("rel");
          if(D === 'like') 
          {      
          $("#likeCount"+messageID).html(C+1);
          $(this).addClass("elbowAnimation").attr("rel","unlike");
          }
          else
          {
          $("#likeCount"+messageID).html(C-1);
          $(this).removeClass("elbowAnimation").attr("rel","like");
          $(this).css("background-position","left");
          }
      });
    });





// Toggle on button click
  $(".off-canvas-r-toggle").on("click", function(event) {
    event.preventDefault();
    $("body").toggleClass("off-canvas-r-active");
 });
  
// Close on mouseup and touchend
    $(document).on("mouseup touchend", function(event) {
    var offCanvas = $(".off-canvas-r")
    if (!offCanvas.is(event.target) && offCanvas.has(event.target).length === 0) {
    $("body").removeClass("off-canvas-r-active")
    }
 });



// Toggle on button click
$(".off-canvas-l-toggle").on("click", function(event) {
    event.preventDefault();
    $("body").toggleClass("off-canvas-l-active");
});
  
// Close on mouseup and touchend
    $(document).on("mouseup touchend", function(event) {
    var offCanvas = $(".off-canvas-l")
    if (!offCanvas.is(event.target) && offCanvas.has(event.target).length === 0) {
    $("body").removeClass("off-canvas-l-active")
    }
});


//loader
$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
    }
);