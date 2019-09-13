// BUDGET CONTROLLER
var budgetController = (function() {
  
  var Expense = function(id, description, value) { // function constructor for expenses
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var Income = function(id, description, value) { // function constructor for incom
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

  return {
    addItem: function(type, des, val) {
      var newItem;

      ID = 0;
      
      if (type === 'exp') {
        newItem = new Expense (ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income (ID, des, val);
      }

      data.allItems[type].push(newItem);
    }
  };

})();

// UI CONTROLLER
var UIController = (function(){
  
  var DOMstrings = {                        // Create separate data structure
    inputType: '.add__type',                // so that you can change strings
    inputDescription: '.add__description',  // here and update the rest of the
    inputValue: '.add__value',              // UI Controller at once
    inputBtn: '.add__btn'
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
  
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
  
    document.addEventListener('keypress', function(event) {
      if (event.keycode === 13 || event.which === 13) {
        ctrlAddItem();
      }

    });
  }

  var ctrlAddItem = function() {

    // 1. Get field input data
    var input = UICtrl.getInput();

    // 2. Add item to the budget controller

    // 3. Add item to the UI

    // 4. Calculate budget

    // 5. Display budget on the UI

  }

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();