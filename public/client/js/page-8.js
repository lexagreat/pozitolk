(function ($) {
    $(document).ready(function () {

        // chat__persons
        $('.chat__persons-item').on('click', function () {
            $('.chat__persons-item').removeClass('active');
            $(this).addClass('active');

            // для моб
            $('.chat__list').removeClass('active')
        })

        // message-mob
        $('.message-mob-btn').on('click', function () {
            $('.chat__list').addClass('active')
        });
    });
})(jQuery);