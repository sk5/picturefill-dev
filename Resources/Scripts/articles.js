//
// Scroll to
//
$.fn.scrollTo = function (target, options, callback) {
    if (typeof options == 'function' && arguments.length == 2) {
        callback = options;
        options = target;
    }
    var settings = $.extend({
        scrollTarget: target,
        offsetTop: 50,
        duration: 500,
        easing: 'swing'
    }, options);
    return this.each(function () {
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({ scrollTop: scrollY }, parseInt(settings.duration), settings.easing, function () {
            if (typeof callback == 'function') {
                callback.call(this);
            }
        });
    });
};

$(document).ready(function () {
    var windowHeight = $(window).height();

    //
    // If the article image has class .full then make it the height of the window minus 1em on top and bottom
    //
    if ($('.article-top-image').hasClass('full')) {
        $('.wrapper-article-image').height(windowHeight - 32);

        //
        // Before the if statement to resize article images can be fired we have to wait for picturefill to select the correct size
        // -- Once we have the size then we can check the window and image sizes and make the correct decision
        //
        $('.article-top-image').imagesLoaded(function () {
            var imageWrapperWidth = $('.full').width(),
                imageWidth = $('.article-top-image img').width();

            //
            // Using a 16/9 ratio for the images we can scale them and adjust the margin when needed
            //
            if (imageWidth >= imageWrapperWidth) {
                $('.article-top-image img').css('margin-left', -(imageWidth - imageWrapperWidth) / 2 + 'px');
            } else {
                $('.article-top-image img').css('margin-left', 0);
            }
            
            console.log("hello");
            console.log(imageWidth);
        });

    }

    //
    // Define the height of the image for the article and scroll to the end of that to read the article
    //
    var articleImageHeight = $('.wrapper-article-image').height(windowHeight - 32);

    // According to body, scroll to the height of the window, - the height of the nav bar from the top of the site
    $('.js-scroll-to-article').on('click', function () {
        if ($('.article-top-image').hasClass('full')) {
            $('body').scrollTo(articleImageHeight - 175);
        } else {
            $('body').scrollTo(articleImageHeight + 52);
        }
    });

    //
    // On window resize adjust the scale of the article image
    //
    $(window).resize(function () {
        var windowHeight = $(window).height();

        if ($('.article-top-image').hasClass('full')) {
            $('.wrapper-article-image').height(windowHeight - 32);

            var imageWrapperWidth = $('.full').width(),
                imageWidth = $('.article-top-image img').width();

            if (imageWidth >= imageWrapperWidth) {
                $('.article-top-image img').css('margin-left', -(imageWidth - imageWrapperWidth) / 2 + 'px');
                console.log("addmargin");
            } else {
                $('.article-top-image img').css('margin-left', 0);
                console.log("nothing");
            }

            console.log(imageWidth);
        }
    });

    //
    // If article image wrapper has .article-diff-image then add in the twentytwenty plugin
    //
    $(".article-diff-image").twentytwenty({ default_offset_pct: 0.7 });
});