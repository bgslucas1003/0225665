function mostrarCarousel(id) {
    var carousel = document.getElementById('carousel');
    var carouselDiv = carousel.getElementsByClassName("service-card-1");

    for (let item of carouselDiv) {

        if (item.style.display !== 'none') {
            item.style.display = 'none';
        }
    }

    carouselDiv.item(id).style.display = 'block';


}

$(window).on('load', function () {
    $('.lista-menu ').click(function () {
        $('.lista-menu').removeClass('service-active');
        $(this).addClass('service-active');
    });
});

function mostrarCarousel2(id) {
    var carousel = document.getElementById('carousel2');
    var carouselDiv = carousel.getElementsByClassName("mapa-card");

    for (let item of carouselDiv) {

        if (item.style.display !== 'none') {
            item.style.display = 'none';
        }
    }

    carouselDiv.item(id).style.display = 'block';


}

$(window).on('load', function () {
    $('.mapa-menu ').click(function () {
        $('.mapa-menu').removeClass('mapa-active');
        $(this).addClass('mapa-active');
    });
});

function mostrarCarousel3(id) {
    var carousel = document.getElementById('carousel3');
    var carouselDiv = carousel.getElementsByClassName("service-card-1");

    for (let item of carouselDiv) {

        if (item.style.display !== 'none') {
            item.style.display = 'none';
        }
    }

    carouselDiv.item(id).style.display = 'block';


}

$(window).on('load', function () {
    $('.lista-menu ').click(function () {
        $('.lista-menu').removeClass('service-active');
        $(this).addClass('service-active');
    });
});




function mostrarCarousel4(id) {
    var carousel = document.getElementById('carousel4');
    var carouselDiv = carousel.getElementsByClassName("mapa-card");

    for (let item of carouselDiv) {

        if (item.style.display !== 'none') {
            item.style.display = 'none';
        }
    }

    carouselDiv.item(id).style.display = 'block';


}

$(window).on('load', function () {
    $('.mapa-menu ').click(function () {
        $('.mapa-menu').removeClass('mapa-active');
        $(this).addClass('mapa-active');
    });
});

