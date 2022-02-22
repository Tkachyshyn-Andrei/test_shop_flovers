// Initialize and add the map
function initMap() {
    // The location of Uluru
    const center = {lat: 49.434448, lng: 26.975015};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ]
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: center,
        map,
    });
}

// $(document).ready(function () {
$('.review-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                rows: 2
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 2
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2
            }
        }
    ]
})

$('.basket-slider').slick({
    dots: true,
    // infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.index-slider').slick({
    dots: true,
    // infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,

    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                rows: 2
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 2
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rows: 2
            }
        }

    ]
});

$('.product-slider').slick({
    dots: true,
    // infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
            }
        },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }

    ]
});

//listener for infotext
(function () {
    const links = document.getElementsByClassName('p-info');
    const infos = document.getElementsByClassName('p-change')
    for (let link of links) {
        link.addEventListener('click', function () {
            for (removeClass of links) {
                removeClass.classList.remove('special')
            }
            link.classList.add('special')
            for (let info of infos) {
                if (link.classList[1] === info.classList[1]) {
                    info.classList.remove('hide')
                } else if (!info.classList.contains('hide'))
                    info.classList.add('hide')
            }
        })
    }
})();

//listener for change foto
(function () {
    const bigFoto = document.getElementById('main-foto')
    const miniFotos = document.getElementsByClassName('mini-foto')
    for (let foto of miniFotos) {
        foto.addEventListener('click', function () {
            console.log(foto.src)
            bigFoto.src = foto.src
        })
    }
})();

const plusMinusBtn = $('.card-basket-quantity button')

plusMinusBtn.click(function () {
    const input = $(this).parent().find('input.quantity')
    const btnClass = $(this).attr('class')

    if (btnClass === 'plus') {
        input.val(+input.val() + 1)
    } else if (btnClass === 'minus') {
        input.val(+input.val() - 1 > 0 ? +input.val() - 1 : 1)
    }
    const price = $(this).parents('.card-basket').find('p[data-price]').attr('data-price')
    const quantity = input.val()
    const amount = price * quantity

    $(this).parents('.card-basket').find('.card-basket-amount').text(`${amount} ₴`)
    $(this).parents('.card-basket').find('.card-basket-amount').attr('data-amount', amount)

    let basketAmount = 0
    $('.card-basket').each(function () {
        const amount = $(this).find('.card-basket-amount').attr('data-amount')
        basketAmount += +amount


    });

    $('.basket-info-content-product-total').text(`${basketAmount} ₴`)
    const sells = $('span.content-sells').text()
    basketAmount -= sells
    $('span.finish-price').text(basketAmount)
})
