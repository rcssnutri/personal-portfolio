$(document).ready(function () {
    changeHeightHeaderPortifolio();
    navbarCustom();
    navbarLinkActive();


    $(window).bind('resize', function () {
        changeHeightHeaderPortifolio();
    });

    function changeHeightHeaderPortifolio() {
        $("#header-portifolio").height($(window).height());
    }

    function navbarCustom() {
        var element = $(".navbar");
        var navbarNav = $(".navbar-nav");
        var navbarLi = $(".navbar-nav > li");
        var navbarLink = $(".navbar-nav > li > a");

        if (($(window).scrollTop() + 80) >= $("#aboutme").offset().top) {
            element.css({
                "background-color": "#000000",
                "transition": "background-color ease"
            });
            element.css({
                "height": "60px",
                "transition": "height 0.5s ease"
            });
            navbarLink.css({
                "height": "60px",
                "transition": "height 0.5s ease"
            });
        } else
        if ($(window).scrollTop() > 10) {
            element.css({
                "background": "rgba(000,000,000,0.3)",
                "transition": "background 0.5s ease"
            });
            element.css({
                "height": "90px",
                "transition": "height 0.5s ease"
            });
            navbarLink.css({
                "height": "90px",
                "transition": "height 0.5s ease"
            });
        } else {
            navbarNav.css({
                "background-color": "transparent",
                "transition": "background-color 0.5s ease"
            });
            element.css({
                "background-color": "transparent",
                "transition": "background-color 0.5s ease"
            });
        }
    }

    $(window).scroll(function (event) {
        navbarCustom();
    });

    function navbarLinkActive() {
        var element = $(".navbar");

        element.find(function () {
            var ul = $(this);

            $(this).find('li').each(function () {

                var li = $(this);

                $(this).find('a').click(function (e) {
                    var href = $(this);

                    ul.find('li').each(function () {
                        $(this).removeClass('active');
                    })

                    if (!li.hasClass('active')) {
                        li.addClass('active');
                    }
                });
            })
        });
    }

    $("html").easeScroll();
})