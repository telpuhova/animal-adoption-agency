//back end
function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.adopted = false;
}

Animal.prototype.setAdopted = function () {
  this.adopted = true;
};

//front end
$(document).ready(function() {
  $("#adoptForm").submit(function(event) {
    event.preventDefault();
    var type = $("#pet-type").val();
    var name = $("#pet-name").val();
    var age = $("#age").val();
    var newAnimal = new Animal(type, name, age);

    $("#available").append("<li>" + newAnimal.type + "<br>" + newAnimal.name + "<br>" + newAnimal.age + "</li>")
  });
});
