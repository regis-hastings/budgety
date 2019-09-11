var budgetController = (function() {
  var x = 23;

  var add = function (a) {      // private add function
    return x + a;
  }

  return {
    publicTest: function(b) {
      return add(b);
    }
  }
})();

var UIController = (function(){



})();

var controller = (function(budgetCtrl, UICtrl) {      // controls the app

  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }

})(budgetController, UIController);