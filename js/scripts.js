// BUSINESS LOGIC
function pizzaOrder(name, toppings, size) {
  this.name = name;
  this.sauces = sauces;
  this.veggies = veggies;
  this.meat = meat;
  this.size = size;
}

pizzaOrder.prototype.spacePrice = function() {
  if (this.size === "small") {
    return 250;
  } else if (this.size === "medium") {
    return 500;
  } else if (this.size === "large") {
    return 1000;
  } else {
    alert("please select a size!");
    }
  }

// USER INTERFACE
$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#orderName").val();
    var orderSauce = $("#sauces").val();
    var orderVeggies = $("#veggies").val();
    var orderMeat = $("#meat").val();
    var orderSize = $('input[name="radioButton"]:checked').val();
    var newOrder = new pizzaOrder (orderSauce, orderVeggies, orderMeat, orderSize);
    event.preventDefault();

    $("ul#orders").append("<li><span class='pizza'>" + newOrder.pizzaOrder + "</span></li>");

    $(".pizza").last().click(function() {
      console.log("mekin moonay");
      $("#show-order").show();
      $("show-order h2").text(newOrder.name);
      $(".customer").last().text(newOrder.name);
  })
});
});
