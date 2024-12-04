(function ($) {
    $(document).ready(function () {

        // Для переключения цвета radio 
        $('.question__answer').on('click', function () {
            $(this).closest('.question__answers').find('.question__answer').removeClass('active');
            $(this).addClass('active');
        })

    });
})(jQuery);
