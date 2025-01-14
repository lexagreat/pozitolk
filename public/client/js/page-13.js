(function ($) {
    $(document).ready(function () {

        // "Ответы на частые вопросы"
        $('.support__faq-item').not(':first').each(function () {
            $(this).find('.support__faq-arrow').removeClass('active');
            $(this).find('.support__faq-answer').hide('fast');
        });
        $('.support__faq-item:first').find('.support__faq-arrow').addClass('active');
        $('.support__faq-item').on('click', function () {
            $('.support__faq-item').not(this).each(function () {
                $(this).find('.support__faq-arrow').removeClass('active');
                $(this).find('.support__faq-answer').hide('fast');
            });
            $(this).find('.support__faq-arrow').toggleClass('active');
            $(this).find('.support__faq-answer').toggle('fast');
        });


        // support-side__mob-btn
        $('.support-side__mob-btn').on('click', function () {
            $('.support-side__first').toggleClass('active');
        });
        $(document).click(function (event) {
            const $element = $('.support-side__first');
            if (!$element.is(event.target) && !$element.has(event.target).length) {
                $element.removeClass('active');
            }
        });

    });
})(jQuery);