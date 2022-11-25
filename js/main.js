jQuery(document).ready(function(){
    jQuery(".owl-carousel").owlCarousel({
        items:3,
        loop: true,
        nav: true,
        dots: true,
        autoplay:true,
    });


    jQuery(".hambargerbox").click(function(){
        jQuery(".mainmenuwrap").toggle();
    });
  });