
$('home').addClass("active");

$("#home-link").click(function() {
    $('html, body').animate({
        scrollTop:        $("#home").offset().top-666
    }, 1000);
    return false;
});

$("#about-link").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#about").offset().top-1012
    }, 1000);
    return false;
});

$("#next-link").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#upcoming").offset().top
    }, 1000);
    return false;
});

$("#hr-link").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#headshotresume").offset().top-100
    }, 1000);
    return false;
});

$("#gallery-link").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#gallery").offset().top
    }, 1000);
    return false;
});

$("#media-link").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#media").offset().top
    }, 1000);
    return false;
});

$("#music-link").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#music").offset().top
    }, 1000);
    return false;
});

$("#contact-link").click(function() {
    $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#contact").offset().top
    }, 1000);
    return false;
});


// $('#two').waypoint(function() {
      
//     $(".container ul li").children().removeClass("active");
//     $("#sec-2").addClass("active");
    
//   }, { offset: 101 });
  
  
//   $('#three').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#sec-3").addClass("active");
//   }, { offset: 101 });
  
//   $('#four').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#sec-4").addClass("active");
//   }, { offset: 101 });
  
//   $('#one').waypoint(function() {
//     $(".container ul li").children().removeClass("active");
//     $("#sec-1").addClass("active");
//   }, { offset: 0 });

// TEST
// $(document).ready(function (){
//     $('.home-name-traits-1').click(function(){
//         $('.home-name-traits-1').text(`It's not magic, it's jQuery`).css('color', 'Green')
//     })
// })