
function Mypizza(type, size, crusts, tops) {
  this.type = type;
  this.size = size;
  this.crusts = crusts;
  this.tops =tops;
};

Mypizza.prototype.fullMypizza = function() {
  return this.type +", the size of pizza is" + this.size + " Outermost layer is a crust of " + this.crusts + "and topping of" + this.tops + ".";
};


function Cost(price, number, pick){
  this.price = price;
  this.number = number;
  this.pick = pick;

};

Cost.prototype.totalCost = function () {
return this.price * this.number + this.pick;
};

var pizzaPrices = [1200, 950, 750];
var deliveryPrice =  [0, 300]; 
   
      

function userName(submit){
    event.preventDefault();
      var name = $("input#name").val();
      var email =$("input#email").val();
     alert("Hi " + name + " ,thank for contacting us we have recieved your message .");
  
};

function submitFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name !== "" && email !== "" && message !== "");
  alert("Hey " + name + " " + "thank you for contacting us.Papi pizza has received your order. Your pizza will arrive shortly.");
  event.preventDefault();
}





$(document).ready(function () {
  $("form#myForm").submit(function (event) {
      event.preventDefault();
      var typeOfPizza = $("#type").val();

      var sizeOfPizza = parseInt($("#size").val());

      var crustOfPizza = $("#crust").val();

      var topOfPizza = $("#topping").val();

      var numberOfPizza = parseInt($("#num").val());

      var pizzaDelivery = parseInt($("#mode").val());


  });
});