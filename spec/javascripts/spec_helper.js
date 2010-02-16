beforeEach(function() {
  $('dom_test').empty();
});

var enumerableContext = function(callStatic, callIterator, context) {
  var toArray = function() {
    var result = []
    for (var i = 0; i < this.length; i++)
      result.push(this[i])
    return(result)
  }

  var describeStaticAndIterator = function(def) {
    describe("static function",   function() { def(callStatic) });
    describe("iterator function", function() { def(callIterator) });
  }

  enumerableHelpers = {
    it_protects_from_invalid_callback: function() { 
      var extraArguments = toArray.apply(arguments);

      describe("given a callback that is not callable", function () {
        describeStaticAndIterator(function (f) {
          it("throws an exception", function() {
            var message = '';
            try {
              f.apply(this, [[]].concat(extraArguments.concat([null]))); 
            } catch(e) {
              message = e
            }
            expect(message).toEqual('callback needs to be a function, it was: null');
          });
        });
      });
    },

    expect_result: function(description, expected, f) {
      describeStaticAndIterator(function(x) {
        it(description, function() {
          expect(f(x)).toEqual(expected);
        });
      });
    }
  }
  var contents = context.toString().match(/^[^\{]*{((.*\n*)*)}/m)[1];

  fn = new Function("with (enumerableHelpers) { " + contents.toString() + "}");
  fn();
};
