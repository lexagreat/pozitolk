(function ($) {
    $(document).ready(function () {

        // Видео 
        $('.play-button').click(function () {
            const videoContainer = $(this).closest('.video-container');
            const videoIframe = videoContainer.find('.video-iframe');
            const videoPoster = videoContainer.find('.video-poster');
            const playButton = videoContainer.find('.play-button');
            videoPoster.hide();
            playButton.hide();
            videoIframe.show();
        });

        // event-new__btn
        $('.event-new__btn').on('click', function () {
            $('.event-new__list').addClass('active');
            $(this).hide();
        })

    });
})(jQuery);