// Scroll to
$.fn.scrollTo = function(target, options, callback) {
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
    return this.each(function() {
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({ scrollTop: scrollY }, parseInt(settings.duration), settings.easing, function() {
            if (typeof callback == 'function') {
                callback.call(this);
            }
        });
    });
};

// Find window height for feature image
var windowHeight = $(window).height();

if (windowHeight < 480) {
    console.log("AHHHH");
    $('.feature-box').css({ "height": 480 });
} else if (windowHeight >= 480) {
    $('.feature-box').css({ "height": windowHeight });
}

$(window).resize(function () {
    var windowHeight = $(window).height();
    if (windowHeight < 480) {
        console.log("AHHHH");
        $('.feature-box').css({ "height": 480 });
    } else if (windowHeight >= 480) {
        $('.feature-box').css({ "height": windowHeight });
    }
});

$(document).ready(function () {

    // Define vars
    var windowHeight = $(window).height(),
        windowWidth = $(window).width(),
        videoWrapperWidth = $('.wrapper-video').width(),
        videoPlayerWidth = $('.video-player').width();

    // Size the video wrapper minus 1em on top and bottom
    $('.wrapper-video').height(windowHeight - 32);

    // If video player is greater than video wrapper then center the video -- else -- dont add any margin
    if (videoPlayerWidth >= videoWrapperWidth) {
        $('.video-player').css('margin-left', -(videoPlayerWidth - videoWrapperWidth) / 2 + 'px');
    } else {
        $('.video-player').css('margin-left', 0);
    }

    //
    // According to body, scroll to the height of the window, - the height of the nav bar from the top of the site
    //
    $('.js-view-work').on('click', function () {
        $('body').scrollTo(windowHeight);
    });

    //
    // If content box is in mobile mq then make it the height of the window
    //
    if(windowWidth < 621) {
        $('.home-article-item').css({ "height" : windowHeight - 40});
        $('.wrapper-video').html('<img src="Resources/Content/home-video-preview-mobile.png" />');
    } else {
        $('.home-article-item').css({ "height" : "" });
        $('.wrapper-video').html('<video class="video-player" loop poster="Resources/Content/home-video-preview.png">' +
            '<source type="video/mp4" src="Resources/Content/PC-Home-Feature.mp4">' +
            '</video>');
    }

    //
    // When the browser is resized
    // -- Define widths and heights of the window, and the feature video
    // -- Check the window height, and then within that check the window width to determine when to swap out the feature video and change the height of each home article
    // -- Resize the feature video
    //
    $(window).resize(function () {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            videoWrapperWidth = $('.wrapper-video').width(),
            videoPlayerWidth = $('.video-player').width();

        // Check to see if screen is small
        if (windowHeight < 550) {
            // If it is, and our width is in the mobile media range then do nothing
            if(windowWidth < 621) {

            // If it is not in the mobile media range then let CSS define each home article height
            } else {
                //console.log("2. Not mobile, but short");
                $('.home-article-item').css({ "height" : "" });
            }
        // If the screen height is not small then check a few things
        } else {
            // If the width is in the mobile media query range then change the height of each home article
            // -- Also change the feature from a video to an image
            if(windowWidth < 621) {
                $('.home-article-item').css({ "height": windowHeight - 40 });
                $('.wrapper-video').html('<img src="Resources/Content/home-video-preview-mobile.png" />');
            // Else let the CSS define the height of the home articles, and bring back the feature video in place of the mobile feature image
            } else {
                $('.home-article-item').css({ "height": "" });
                $('.home-article-item').css({ "height": "" });
                $('.wrapper-video').html('<video class="video-player" loop poster="Resources/Content/home-video-preview.png">' +
                    '<source type="video/mp4" src="Resources/Content/PC-Home-Feature.mp4">' +
                    '</video>');
            }
        }

        //
        // Size the video wrapper minus 1em on top and bottom
        //
        $('.wrapper-video').height(windowHeight - 32);

        // If video player is greater than video wrapper then center the video -- else -- dont add any margin
        if (videoPlayerWidth >= videoWrapperWidth) {
            //console.log($videoPlayerWidth);
            $('.video-player').css('margin-left', -(videoPlayerWidth - videoWrapperWidth) / 2 + 'px');
        } else {
            //console.log("else");
            $('.video-player').css('margin-left', 0);
        }
    });
});