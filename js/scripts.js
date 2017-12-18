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
    // var pic = $("#file").val();
    var pic = $("#pic").val();
    var newAnimal = new Animal(type, name, age);
    animals.push(newAnimal);

    $("#available").append("<li class='available entry'>" + newAnimal.name + "<ul class='details'><li>" + newAnimal.type + "</li><li>" + newAnimal.age + " years old</li><li><img src='" + pic + "' alt='doggy'></li><button type='button' class='adopt'>Adopt</button></ul></li>");

    $(".details").hide();

    $(".entry").last().click(function() {
      $(this).find("ul").toggle();
    });

    $(".adopt").last().click(function() {
      $(this).parent().parent().removeClass("available");
      $(this).parent().parent().addClass("adopted");
      // alert(newAnimal.name);
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
