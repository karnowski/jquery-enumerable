describe("compact", function() {
  var callStatic   = function(enumerator) {
    return jQuery.compact(enumerator);
  }
  var callIterator = function(enumerator) {
    return jQuery(enumerator).compact();
  }

  enumerableContext(callStatic, callIterator, function() {
    expect_result("returns a new array containing only non-null and defined elements", [1, 2, 3], function(f) {
       return f([1, undefined, 2, null, 3]);
    });
  });
});
