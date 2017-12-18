//back end
var animals = [];
var counter = 0;

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
    $("#available").append("<li class='available'>" + newAnimal.type + "<br>" + newAnimal.name + "<br>" + newAnimal.age + "<br> <button type='button' class='adopt'>Adopt</button>" + "</li>" + "<br>");

    $(".adopt").last().click(function() {
      $(this).parent().addClass("adopted");
      $(this).parent().removeClass("available");
      alert(newAnimal.name);
    })

    $("#show-adopted").click(function() {
      $(".adopted").show();
      $(".available").hide();
    });

    $("#show-available").click(function() {
      $(".available").show();
      $(".adopted").hide();
    });

    $("#show-all").click(function() {
      $(".adopted").show();
      $(".available").show();
    });

  });
});
