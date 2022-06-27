$(document).ready(function() {
    $('.accordion-item__trigger').click(function() {
        $(this).parent('.accordion-item').toggleClass('accordion-item--active')
    }); 
});

// Или Чтобы меню схлопывались 

// $(document).ready(function() {
//    $('.accordion-item__trigger').click(function() {
//    const parent = $(this).parent();
//
//    if (parent.hasClass('accordion-item--active')) {
//        parent.removeClass('accordion-item--active');
//    } else {
//        $('accordion-item').removeClass('accordion-item--active')
//        parent.addClass('accordion-item--active');
//    }
//    }); 
// });
//
