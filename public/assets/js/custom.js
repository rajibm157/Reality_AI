$(document).ready(function() {
    $('.property-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 2,
            },
        }
    });
    $('.property-to-compare-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 4,
            },
        }
    });


    var $this = $('.lessmore-table');
    if ($this.find('div').length > 2) {
        $('.lessmore-table').prepend('<a href="javascript:;" class="showMore"></a>');
    }

    // If more than 2 Education lessmore-table, hide the remaining
    $('.lessmore-table .row').slice(0, 4).addClass('shown');
    $('.lessmore-table .row').not('.shown').hide();
    $('.lessmore-table .showMore').on('click', function() {
        $('.lessmore-table .row').not('.shown').toggle(100);
        $(this).toggleClass('showLess');
    });

/*
    $('.fixed-head tbody tr').on('click', function() {
        $('.fixed-head tbody tr').removeClass('row-fixed');
        $('.fixed-head tbody tr').addClass('row-fixed');
    });
*/

})