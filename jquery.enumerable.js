(function ( $ ) {
  $.collect = function (enumerable, callback) {
    if (!jQuery.isFunction(callback))
      throw("callback needs to be a function, it was: " + callback);

    var result = [];
    $.each(enumerable, function (index) {
      result.push(callback.call(this, index));
    });
    return result;
  }

  $.fn.collect = function(callback) {
    return $.collect(this, callback);
  }

  $.inject = function (enumerable, initialValue, callback) {
    if (!jQuery.isFunction(callback))
      throw("callback needs to be a function, it was: " + callback);

    var accumulator = initialValue;

    $.each(enumerable, function (index) {
      accumulator = callback.call(this, accumulator, index);
    });
    return accumulator;
  }

  $.fn.inject = function(initialValue, callback) {
    return $.inject(this, initialValue, callback);
  }
})( jQuery );