(function ($) {
   $(document).ready(function () {
      // PopUp "Страница в разработке"
      $("#popup-maintenance").on("click", function (e) {
         e.preventDefault();
         $(".popup-maintenance").addClass("active");
      });
      $(".popup-maintenance__layer, .popup-maintenance__close").on(
         "click",
         function (e) {
            $(".popup-maintenance").removeClass("active");
         }
      );
   });
})(jQuery);
