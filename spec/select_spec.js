Screw.Unit(function() {
  describe("_select", function() {
    var callStatic   = function(enumerator, callback) { 
      return jQuery._select(enumerator, callback)
    }
    var callIterator = function(enumerator, callback) { 
      return jQuery(enumerator)._select(callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("given a callback as a parameter, returns a new array containing only the elements for which the callback, called with the current index, returned true", [1,2], function(f) {
         return f([1,2,3], function(index) { return this == 1 || index == 1})
      });

      it_protects_from_invalid_callback();
    });
  });
});
