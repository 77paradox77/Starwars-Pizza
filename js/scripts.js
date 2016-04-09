// BUSINESS LOGIC
function pizzaOrder(name, sauces, veggies, meat, size) {
  this.name = name;
  this.sauces = sauces;
  this.veggies = veggies;
  this.meat = meat;
  this.size = size;

}

// var price = "$400"
 pizzaOrder.prototype.sizePrice = function() {
   var price;
   console.log(this.size);
  if (this.size === "small") {
    price = "10";
  } else if (this.size === "medium") {
    price = "15";
  } else if (this.size ===  "large") {
    price = "20";
  } else {
    price = "25";
  }
  return price;
}



// USER INTERFACE
$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#orderName").val();
    var orderSauce = $("#sauces").val();
    var orderVeggies = $("#veggies").val();
    var orderMeat = $("#meat").val();
    var orderSize = $('input[name="radioButton"]:checked').val();
    var newOrder = new pizzaOrder (name, orderSauce, orderVeggies, orderMeat, orderSize);
    event.preventDefault();

    $("ul#orders").append("<li><span class='pizza'>" + name + "</span></li>");

    $(".pizza").last().click(function() {
      console.log("mekin moonay");
      $("#show-order").show();
      $("#show-order h2").text(name);
      $(".customer1").text(newOrder.name);
      $(".customer2").text(newOrder.sauces);
      $(".customer3").text(newOrder.veggies);
      $(".customer4").text(newOrder.meat);
      $(".customer5").text(newOrder.size);

      $(".pricing").text(newOrder.sizePrice());
  })
});
});
