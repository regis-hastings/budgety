// BUDGET CONTROLLER
var budgetController = (function() {
  


})();

// UI CONTROLLER
var UIController = (function(){



})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {      // controls the app

  var ctrlAddItem = function() {

    // 1. Get field input data

    // 2. Add item to the budget controller

    // 3. Add item to the UI

    // 4. Calculate budget

    // 5. Display budget on the UI

    console.log('This works.');

  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
  
  document.addEventListener('keypress', function(event) {
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }
    
  });

})(budgetController, UIController);