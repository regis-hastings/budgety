// BUDGET CONTROLLER
var budgetController = (function() {
  
  var Expense = function(id, description, value) { // function constructor for expenses
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var Income = function(id, description, value) { // function constructor for income
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
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
      var newItem, ID;

      // [1, 2, 3, 4, 5], next ID = 9
      // [1, 2, 4, 6, 8], next ID = 9
      // ID = last ID + 1

      // create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1; // ultimately evaluates to a number
      } else {
        ID = 0;
      }
      
      // create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense (ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income (ID, des, val);
      }

      // push it into our data structure
      data.allItems[type].push(newItem);

      // return the new element
      return newItem;
    },

    calculateBudget: function() {

      // calculate total income and expenses

      // calculate the budget: income - expenses

      // calculate the percentage of income that we spent

    },

    testing: function() { // Really useful method for development. Not meant for production
      console.log(data);
    }
  };

})();

// UI CONTROLLER
var UIController = (function(){
  
  var DOMstrings = {                        // Create separate data structure
    inputType: '.add__type',                // so that you can change strings
    inputDescription: '.add__description',  // here and update the rest of the
    inputValue: '.add__value',              // UI Controller at once
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  }

  return {

    getInput: function() { // method for returning all 3 user inputs to UI
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either 'inc' or 'exp'
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      }
    },

    addListItem: function(obj, type) {
      var html, newHTML, element;

      // Create HTML string with placeholder text

      if (type === 'inc') {
        element = DOMstrings.incomeContainer;

        html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';

      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;

        html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }

      // Replace the placeholder text with some actual data

      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', obj.value);

      // Insert the HTML into the DOM

      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

    },

    clearFields: function() {
      var fields, fieldsArr;

      //this is a list
      fields = document.querySelectorAll(`${DOMstrings.inputDescription}, ${DOMstrings.inputValue}`); 

      fieldsArr = Array.prototype.slice.call(fields); // turns the list into an array

      fieldsArr.forEach(function(element) {
        element.value = '';
      });

      fieldsArr[0].focus();

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
      if (event.keycode === 13 || event.which === 13) { // second condition for older browsers
        ctrlAddItem();
      }

    });
  }

  var updateBudget = function() {

    // 1. Calculate budget

    // 2. Return the budget

    // 3. Display budget on the UI

  }

  var ctrlAddItem = function() {
    var input, newItem;

    // 1. Get field input data
    input = UICtrl.getInput();

    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {

      // 2. Add item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear input fields
      UICtrl.clearFields();

      // 5. Calculate and update budget
      updateBudget();
    }

  }

  return {
    init: function() {
      console.log('Application has started.');
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();