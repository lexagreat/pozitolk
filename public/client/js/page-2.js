(function ($) {
    $(document).ready(function () {

        // START обраобтка input "SMS-код"
        $('#sms-code input').on('input', function () {
            const $this = $(this);
            if ($this.val().length === 1) {
                $this.next('input').focus();
            }
        });
        $('#sms-code input').on('keydown', function (e) {
            const $this = $(this);
            if (e.key === 'Backspace' && !$this.val()) {
                $this.prev('input').focus();
            }
        });
        $('#sms-code input').on('paste', function (e) {
            const pasteData = e.originalEvent.clipboardData.getData('text').trim();
            const inputs = $('#sms-code input');

            if (pasteData.length <= inputs.length) {
                pasteData.split('').forEach((char, i) => {
                    $(inputs[i]).val(char);
                });
                inputs.last().focus();
            }
            e.preventDefault();
        });
        // END обраобтка input "SMS-код"

        // START обратный отсчет
        let $counter = $('.repeat_code');
        let countdown = parseInt($counter.text(), 10);
        let interval = setInterval(function () {
            if (countdown > 0) {
                countdown--;
                $counter.text(countdown);
            } else {
                clearInterval(interval);
            }
        }, 1000);
        // END обратный отсчет

    });
})(jQuery);