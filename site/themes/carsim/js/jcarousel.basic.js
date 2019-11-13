(function($) {
    $(function() {
        $('.jcarousel')
            .jcarousel({
                wrap: 'both',
                animation: {
                    duration: 1,
                    easing: 'linear',
                    complete: function () {
                    }
                }
            })
            .jcarouselAutoscroll({
                 interval: 10000,
                 target: '+=1',
                 autostart: true
            })
        ;

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination()
            .position({
                my: "bottom center",
                at: "bottom-5 center",
                of: $(".jcarousel-wrapper"),
                collision: "none"
             });
    });
})(jQuery);
