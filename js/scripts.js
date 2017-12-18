//front-end ---------------------------
function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.adopted = false;
}

Animal.prototype.setAdopted = function () {
  this.adopted = true;
};

//back-end ----------------------------

$(document).ready(function() {
  $("#adopt-form").submit(function(event) {
    event.preventDefault();
    var type = $("#pet-type").val();
    var name = $("#pet-name").val();
    var age = $("#age").val();
    var newAnimal = new Animal(type, name, age);
    $("#available").append("<ul>" + newAnimal.name + "</ul>" + "<li>" + newAnimal.type + "</li>" + "<li>" + newAnimal.age + "</li>" );

  })
});
