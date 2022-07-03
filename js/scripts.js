$(document).ready(function() {
    $(window).scroll(function(){
        if (this.scrollY > 20) {
          
            $('.navbar').addClass('sticky');

            
        }
        else{
            $('.navbar').removeClass('sticky'); 
        }
    });



    // document.querySelector('.navbar .menu li a').scrollIntoView({ 
    //     behavior: 'smooth' 
    //   });
//   ------ animate from every anchor
    $('.navbar .menu li a').click(function () {
       $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

//         $('html, body').css('scrollBehavior' , 'smooth');
//         console.log("this");
 
 });

 
//  ---------- this code is from stacoverflow case of Smooth scrolling when    clicking an anchor link

 // $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// })

 $('.menu-btn').click(function (){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn img').toggleClass('active');

    });


});