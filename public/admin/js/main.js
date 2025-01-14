(function ($) {
    $(document).ready(function () {

        // start .descmore
        const maxCharsDescmore = 340;
        $('.descmore').each(function () {
            const $container = $(this);
            const $textContainer = $container.find('.descmore__txt');
            const $button = $container.find('.btn__more');
            const fullText = $textContainer.html();
            if (fullText.length > maxCharsDescmore) {
                const truncatedText = fullText.substring(0, maxCharsDescmore) + '...';
                $textContainer.html(truncatedText);
                $button.on('click', function () {
                    if ($button.text() === 'Показать больше') {
                        $textContainer.html(fullText);
                        $button.text('Показать меньше');
                    } else {
                        $textContainer.html(truncatedText);
                        $button.text('Показать больше');
                    }
                });
            } else {
                $button.hide();
            }
        });
        // end .descmore

        // start .lbltagsmore
        const maxVisibleTags = 4;
        $('.lbltagsmore').each(function () {
            const $container = $(this);
            const $items = $container.find('.lbltagsmore__item');
            const $button = $container.find('.btn__more');
            if ($items.length <= maxVisibleTags) {
                $button.hide();
                return;
            }
            $items.slice(maxVisibleTags).hide();
            $button.on('click', function () {
                const isExpanded = $items.slice(maxVisibleTags).is(':visible');
                if (isExpanded) {
                    $items.slice(maxVisibleTags).hide();
                    $button.text('Все темы');
                } else {
                    $items.slice(maxVisibleTags).show();
                    $button.text('Показать меньше');
                }
            });
        });
        // end .lbltagsmore


        // start .lbldescmore
        const maxCharsLbldescmore = 115;
        $('.lbldescmore').each(function () {
            const $container = $(this);
            const $textContainer = $container.find('.lbldescmore__desc-txt');
            const $button = $container.find('.btn__more');
            const fullText = $textContainer.html();
            if (fullText.length > maxCharsLbldescmore) {
                const truncatedText = fullText.substring(0, maxCharsLbldescmore) + '';
                $textContainer.html(truncatedText);
                $button.on('click', function () {
                    if ($button.text() === 'Показать больше') {
                        $textContainer.html(fullText);
                        $button.text('Показать меньше');
                    } else {
                        $textContainer.html(truncatedText);
                        $button.text('Показать больше');
                    }
                });
            } else {
                $button.hide();
            }
        });
        // end .lbldescmore


        // START Menu
        $('.nav__burger').on('click', function () {
            $('.nav__menu').toggleClass('active');
            $('.nav__mob_layer').toggleClass('active');
            $('html').toggleClass('hidden');
            $(this).toggleClass('active');
        });
        $('.nav__mob_layer').on('click', function () {
            $('.nav__menu').removeClass('active');
            $('.nav__burger').removeClass('active');
            $('html').removeClass('hidden');
            $(this).removeClass('active');
        });
        // END Menu

        // START PopUp общее 
        $('.popup__layer').on('click', function () {
            $('.popup').removeClass('active');
            $('html').removeClass('hidden');
        });
        $('.popup__close').on('click', function () {
            $('.popup').removeClass('active');
            $('html').removeClass('hidden');
        });
        // END PopUp общее 


        // START  PopUp при клике по доступному времени в календаре
        $('.table__cell.available').on('click', function () {
            $('.popup.available_time').addClass('active');
            // $('html').addClass('hidden');
        });
        // END  PopUp при клике по доступному времени в календаре

        // START  PopUp при клике по доступному времени в календаре
        $(".table__cell.chosen").on("click", function (e) {
            e.stopPropagation();
            var popup = $(".popup_2.chosen_time");
            $(this).append(popup);
            popup.addClass("active");
        });
        $(document).on("click", function () {
            $(".popup_2.chosen_time").removeClass("active");
        });
        $(".popup_2.chosen_time").on("click", function (e) {
            e.stopPropagation();
        });
        // END  PopUp при клике по доступному времени в календаре

        // START "PopUp при клике по кнопке "Перенести""
        $('.chosen_time__btn-switch').on('click', function () {
            $('.popup.reschedule_time').addClass('active');
            // $('html').addClass('hidden');
        });
        $('.calendar-date__item').on('click', function () {
            $('.calendar-date__item').removeClass('active');
            $(this).addClass('active');
        });
        // END "PopUp при клике по кнопке "Перенести""

        // START "PopUp при клике по кнопке "Отменить""
        $('.chosen_time__btn-delete').on('click', function () {
            $('.popup.delete_time').addClass('active');
            // $('html').addClass('hidden');
        });
        // END "PopUp при клике по кнопке "Отменить""

    });
})(jQuery);