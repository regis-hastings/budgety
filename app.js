var budgetController = (function() {
  var x = 23;

  var add = function (a) { // private add function
    return x + a;
  }

  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  }
})();

