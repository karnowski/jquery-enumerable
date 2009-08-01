Screw.Unit(function() {
  describe("detect", function() {
    var callStatic   = function(enumerator, callback) {
      return jQuery.detect(enumerator, callback)
    }
    var callIterator = function(enumerator, callback) {
      return jQuery(enumerator).detect(callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("given a callback as a parameter, returns a new array containing only the elements for which the callback, called with the current index, returned true", "cat", function(f) {
         return f(["foo", "cat", "bar", "baz"], function(index) { return this.match(/at$/); });
      });

      it_protects_from_invalid_callback();
    });
  });
});
