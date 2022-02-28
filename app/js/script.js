// Initialize and add the map

let map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([49.4086652, 27.0170361]),

        zoom: 8
    })
});

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

// $('.delivery-photos-slider').slick({
//     dots: true,
//     // infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     rows: 2,
//
//     responsive: [
//         {
//             breakpoint: 1440,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//                 rows: 2
//             }
//         },
//         {
//             breakpoint: 1280,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 rows: 2
//             }
//         },
//         {
//             breakpoint: 1080,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 3,
//                 rows: 2
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 rows: 2
//             }
//         },
//         {
//             breakpoint: 540,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 rows: 4
//             }
//         },
//
//     ]
// });


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

$(function () {
    $("#phone").one('focus', function () {
        $(this).val("+380")
    });
});

document.getElementsByName('postcard_text')[0].placeholder = 'До 70 символов';
document.getElementsByName('coupon_input')[0].placeholder = 'Введите код купона';
document.getElementsByName('certificate_input')[0].placeholder = 'Введите номер подарочного сертификата';
