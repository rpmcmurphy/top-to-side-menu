$(document).ready(function() {

  const mq = window.matchMedia('(max-width: 991px)');

  $('body').on('click',  '.has-submenu a', function(e) {
      e.preventDefault();
      if (mq.matches){
        $(this).next('.nav-submenu').toggleClass('drop-down');
        console.log('Clicked!');
      }
  });

});

// $(document).ready(function() {
//   var isSmallWindow;
//   checkResize();
//   function checkResize(){
//     isSmallWindow = $(this).width() <= 991;
//   }
//     $(window).on('resize', function() {
//         checkResize();
//     });
//
//     $('.has-submenu a').on('click', function(e) {
//         e.preventDefault();
//         if (isSmallWindow){
//           $(this).next('.nav-submenu').toggleClass('drop-down');
//
//           console.log('Clicked!');
//         }
//     });
// });

// ===================================== //

// const mq = window.matchMedia('(max-width: 991px)');
//
// function resized() {
//   if(mq.matches) {
//     $('body').on('click', '.has-submenu a', function(e) {
//
//       e.preventDefault();
//       $(this).next('.nav-submenu').toggleClass('drop-down');
//
//       console.log('Clicked small!');
//
//     });
//   } else {
//     $('body').on('click', '.has-submenu a', function(e) {
//
//       e.preventDefault();
//       // $(this).next('.nav-submenu').removeClass('drop-down');
//       console.log('Clicked big!');
//
//     });
//   }
// }
//
// resized();
// $(window).resize(function() {
//    resized();
//    console.log('Resized!');
// });
