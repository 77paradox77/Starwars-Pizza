// BUSINESS LOGIC
function pizzaOrder(name, sauces, veggies, meat, size) {
  this.name = name;
  this.sauces = sauces;
  this.veggies = veggies;
  this.meat = meat;
  this.size = size;
  this.price = "";
}

var price = pizzaOrder.prototype.spacePrice = function() {
  if (this.orderSize === "small") {
    this.price = "250";
  } else if (this.orderSize === "medium") {
    this.price = "500";
  } else if (this.orderSize === "large") {
    price = "1000";
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

    $("ul#orders").append("<li><span class='pizza'>" + name + newOrder.pizzaOrder + "</span></li>");

    $(".pizza").last().click(function() {
      console.log("mekin moonay");
      $("#show-order").show();
      $("#show-order h2").text(name);
      $(".customer1").text(newOrder.name);
      $(".customer2").text(newOrder.sauces);
      $(".customer3").text(newOrder.veggies);
      $(".customer4").text(newOrder.meat);
      $(".customer5").text(newOrder.size);

      $(".pricing").append(price);
  })
});
});
