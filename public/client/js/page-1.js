(function ($) {
    $(document).ready(function () {

        // START "International Telephone Input With Flags and Dial Codes"
        const input = document.querySelector("#phone");
        const iti = window.intlTelInput(input, {
            // allowDropdown: false,
            // autoPlaceholder: "off",
            // containerClass: "test",
            // countryOrder: ["jp", "kr"],
            countrySearch: false,
            // customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
            //   return "e.g. " + selectedCountryPlaceholder;
            // },
            // dropdownContainer: document.querySelector('#custom-container'),
            // excludeCountries: ["us"],
            // fixDropdownWidth: false,
            formatAsYouType: true,
            // formatOnDisplay: false,
            // geoIpLookup: function(callback) {
            //   fetch("https://ipapi.co/json")
            //     .then(function(res) { return res.json(); })
            //     .then(function(data) { callback(data.country_code); })
            //     .catch(function() { callback(); });
            // },
            // hiddenInput: () => "phone_full",
            // i18n: { 'de': 'Deutschland' },
            initialCountry: "ru",
            // nationalMode: false,
            // onlyCountries: ['ru', 'kz', 'by', 'am', 'ge', 'az'],
            // placeholderNumberType: "MOBILE",
            // showFlags: false,
            separateDialCode: true,
            strictMode: true,
            // useFullscreenPopup: true,
            // loadUtilsOnInit: "/build/js/utils.js", // leading slash (and http-server) required for this to work in chrome
            // validationNumberType: null,
        });
        window.iti = iti; // useful for testing

        const button = document.querySelector("#btn");
        const errorMsg = document.querySelector("#error-msg");
        const validMsg = document.querySelector("#valid-msg");
        const errorMap = ["Неверный номер", "Неверный код страны", "Слишком короткий номер", "Слишком длинный номер", "Неверный номер"];

        const reset = () => {
            input.classList.remove("error");
            errorMsg.innerHTML = "";
            validMsg.innerHTML = "";
            errorMsg.classList.add("hide");
            validMsg.classList.add("hide");
        };

        const showError = (msg) => {
            input.classList.add("error");
            errorMsg.innerHTML = msg;
            errorMsg.classList.remove("hide");
        };

        // on click button: validate
        button.addEventListener('click', (e) => {
            e.preventDefault();
            reset();
            if (!input.value.trim()) {
                showError("Заполните номер телефона");
            } else if (iti.isValidNumber()) {
                // validMsg.innerHTML = "Номер телефона: " + iti.getNumber();
                validMsg.innerHTML = "Отправляем SMS. Пожалуйста, ожидайте...";
                validMsg.classList.remove("hide");
            } else {
                const errorCode = iti.getValidationError();
                const msg = errorMap[errorCode] || "Невалидный номер";
                showError(msg);
            }
        });

        // on keyup / change flag: reset
        input.addEventListener('change', reset);
        input.addEventListener('keyup', reset);

        // END "International Telephone Input With Flags and Dial Codes"

    });
})(jQuery);
