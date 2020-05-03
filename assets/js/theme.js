
(function($) {
    "use strict";
    var $window = $(window);
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).siblings().toggleClass("show");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
    });
    $('.dropdown-submenu > a').on("click", function(e) {
        var submenu = $(this);
        $('.dropdown-submenu .dropdown-menu').removeClass('show');
        submenu.next('.dropdown-menu').toggle();
        submenu.parents('.dropdown-submenu').siblings('li').children('.dropdown-menu').hide();
        submenu.toggleClass('active');
        submenu.parents('.dropdown-submenu').siblings('li').children('.dropdown-item').removeClass('active');
        e.stopPropagation();
    });
})(jQuery);
