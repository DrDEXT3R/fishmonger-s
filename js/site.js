// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo', function () {
            animationChooser($anchor.attr('href'))
        });
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// Decides which animation should be done
function animationChooser(addressValue) {
    if (addressValue === '#contact') {
        animateCSS('#contact .address', 'bounce')
        animateCSS('#contact .opening-hours', 'bounce')
    }
    else if (addressValue === '#about') {
        animateCSS('#about .shop', 'swing')
        animateCSS('#about .about-text', 'pulse')
    }
    else if (addressValue === '#map') {
        animateCSS('#map .googlemaps', 'pulse')
    }
}

// Performs animation
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}