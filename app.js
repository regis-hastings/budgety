// BUDGET CONTROLLER
var budgetController = (function() {
  


})();

// UI CONTROLLER
var UIController = (function(){
  
  var DOMstrings = {                        // Create separate data structure
    inputType: '.add__type',                // so that you can change strings
    inputDescription: '.add__description',  // here and update the rest of the
    inputValue: '.add__value',              // UI Controller at once
    inputBtn: '.add__button'
  }

  return {

    getInput: function() { // method for returning all 3 user inputs to UI
      return {
        type: document.querySelector(DOMstrings.inputType).value, // either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },

    getDOMstrings: function() {
      return DOMstrings;
    }


  };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {      // controls the app

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function() {

    // 1. Get field input data

    var input = UICtrl.getInput();
    console.log(input);

    // 2. Add item to the budget controller

    // 3. Add item to the UI

    // 4. Calculate budget

    // 5. Display budget on the UI

  }

  document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
  
  document.addEventListener('keypress', function(event) {
    if (event.keycode === 13 || event.which === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);