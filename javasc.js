$(document).ready(function() {
    $('.btn').on('click', function() {
        var value = $(this).val();
        var display = $('.display');

        if (value == '=') {
            try {
                display.val(eval(display.val()));
            } catch (error) {
                display.val('Hata');
            }
        } else if (value == 'C') {
            display.val('');
        } else if (value == 'CE') {
            var currentValue = display.val();
            display.val(currentValue.slice(0, -1));
        } else {
            display.val(display.val() + value);
        }
    });
});
