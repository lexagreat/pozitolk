(function ($) {
    $(document).ready(function () {

        // Валидация инпута
        var $input = $('.invitation__input-inp input');
        var $btn = $('.invitation__btn');
        function validateInput() {
            var value = $input.val();
            var regex = /^[a-zA-Z]{4,15}$/;
            if (regex.test(value)) {
                $btn.removeClass('_disable');
            } else {
                $btn.addClass('_disable');
            }
        }
        $input.on('input', function () {
            validateInput();
        });
        validateInput();

    });
})(jQuery);