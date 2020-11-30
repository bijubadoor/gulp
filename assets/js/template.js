
(function($) {
  'use strict';
  $(function() {
    // initializing popover
    $('[data-toggle="popover"]').popover();

    //checkbox and radios
    $(".form-check label,.form-radio label").append('<i class="input-frame"></i>');

  });
})(jQuery);