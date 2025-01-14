(function ($) {
    $(document).ready(function () {

        // Изменение способа оплаты 
        $('.payment__btns-change').on('click', function (e) {
            e.preventDefault();
            $('.popup.changepayment').addClass('active');
            startTimeOut();
        });

        // START Форматирование данных карты
        $('input[name="card-number"]').on('input', function () {
            let value = $(this).val().replace(/\D/g, '');
            if (value.length > 16) {
                value = value.substring(0, 16);
            }
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            $(this).val(value);
            if (value.length === 19) {
                $('input[name="card-month"]').focus();
            }
        });
        $('input[name="card-month"]').on('input', function () {
            let value = $(this).val().replace(/\D/g, '');
            if (value.length > 2) {
                value = value.substring(0, 2);
            }
            if (value.length === 2) {
                if (parseInt(value) > 12) {
                    value = '12';
                }
                $('input[name="card-year"]').focus();
            }
            $(this).val(value);
        });
        $('input[name="card-year"]').on('input', function () {
            let value = $(this).val().replace(/\D/g, '');
            if (value.length > 4) {
                value = value.substring(0, 4);
            }
            $(this).val(value);
            if (value.length === 4) {
                $('input[name="card-cvc"]').focus();
            }
        });
        $('input[name="card-cvc"]').on('input', function () {
            let value = $(this).val().replace(/\D/g, '');
            if (value.length > 3) {
                value = value.substring(0, 3);
            }
            $(this).val(value);
        });
        // END Форматирование данных карты

        // START обратный отсчет "Завершите платеж в течении"
        function startTimeOut() {
            var timeParts = $('.popup__org-info span').text().split(':');
            var time = { minutes: parseInt(timeParts[0]), seconds: parseInt(timeParts[1]) };
            function updateTime() {
                $('.popup__org-info span').text(time.minutes + ':' + (time.seconds < 10 ? '0' : '') + time.seconds);
                if (time.seconds > 0) {
                    time.seconds--;
                } else {
                    if (time.minutes > 0) {
                        time.minutes--;
                        time.seconds = 59;
                    }
                }
            }
            setInterval(updateTime, 1000);
        }
        // END обратный отсчет "Завершите платеж в течении"

    });
})(jQuery);