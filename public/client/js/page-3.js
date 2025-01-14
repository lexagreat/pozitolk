(function ($) {
    $(document).ready(function () {

        // Переключение тарифов
        $('.tariff-toggle .tariff-item').on('click', function () {
            $('.tariff-toggle .tariff-item').removeClass('active');
            $('.tariff .tariff__item').removeClass('active');
            $(this).addClass('active');
            $('.tariff .tariff__item').eq($(this).index()).addClass('active');
        });

        // Добавление active 2-у элементу меню
        $('.nav__menu ul li').eq(1).addClass('active');

        // Форматирование даты
        $('.date').on('input', function () {
            var value = $(this).val().replace(/\D/g, '');
            if (value.length <= 2) {
                $(this).val(value);
            } else if (value.length <= 4) {
                $(this).val(value.substring(0, 2) + '.' + value.substring(2));
            } else {
                $(this).val(value.substring(0, 2) + '.' + value.substring(2, 4) + '.' + value.substring(4, 8));
            }
        });

        // Форматирование промокода
        $('.promo').on('input', function () {
            var value = $(this).val().replace(/[^A-Za-z0-9]/g, '');
            var letters = value.substring(0, 4).toUpperCase().replace(/[^A-Za-z]/g, '');
            var numbers = value.substring(4).replace(/\D/g, '');
            var formattedValue = letters;
            if (numbers.length > 0) {
                formattedValue += '-' + numbers.substring(0, 6);
            }
            $(this).val(formattedValue);
        });

    });
})(jQuery);