$(document).ready(function () {
    
    //
    // Toggle the full menu
    //
    $('.js-toggle-nav').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.wrapper-main-navigation').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.wrapper-main-navigation').addClass('active');
        }
    });

    //
    // Navigation -- Hide navigation if nav item is clicked
    //
    $('.menu-link').on('click', function() {
        $('.js-toggle-nav').removeClass('active');
        $('.wrapper-main-navigation').removeClass('active');
    });

    //
    // Navigation -- Show contact form
    //
    $('.js-make-contact').on('click', function() {
        $('.wrapper-contact-form').addClass('active');
    });

    //
    // Comments
    //
    $('.js-cancel-comment').on('click', function() {
        $('.wrapper-contact-form').removeClass('active');
    });
    
});