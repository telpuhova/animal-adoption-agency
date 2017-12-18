//back end
var animals = [];

function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.adopted = false;
}

Animal.prototype.setAdopted = function () {
  this.adopted = true;
};

//front-end ----------------------------

$(document).ready(function() {
  $("#adopt-form").submit(function(event) {
    event.preventDefault();
    var type = $("#pet-type").val();
    var name = $("#pet-name").val();
    var age = $("#age").val();
    var newAnimal = new Animal(type, name, age);
    animals.push(newAnimal);
    $("#available").append("<li>" + newAnimal.type + "<br>" + newAnimal.name + "<br>" + newAnimal.age + "</li>" + "<br>" + "<button type='button' class='btn btn-success' id='mark-adopted'>Mark Adopted</button>")
    
    $("#mark-adopted").click(function() {
      alert("1");
      animals[0].setAdopted();
      console.log(animals[0].adopted);
    })
  });


});
