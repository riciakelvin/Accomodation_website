// ScrollReveal ({
//     reset: true,
//     distance: '900px',
//     duration: 900,
//     delay: 400,
// })

//   ScrollReveal().reveal('.contain3', {delay: 200, origin: 'left'});
//   ScrollReveal().reveal('.contain4', {delay: 700, origin: 'right' });


//   ScrollReveal ({
//     reset: true,
//     distance: '900px',
//     duration: 2000,
//     delay: 400,
// })
//   ScrollReveal().reveal('.circle', {delay: 500, origin: 'top', interval: 400 });
//   ScrollReveal().reveal('.target', {delay: 500, origin: 'left', interval: 700 });



  //function of a display button
  $(window).scroll(function(){
      if($(this).scrollTop() > 500){
          $('#nav2').fadeIn('slow')
      }else {
          $('#nav2').fadeOut('slow')
      }
  })
