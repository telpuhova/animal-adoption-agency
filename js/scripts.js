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

//front-end ----------------------------

function readURL(input) {
  debugger;
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    // reader.onload = function (e) {
    //   $('#blah')
    //     .attr('src', e.target.result)
    //     .width(150)
    //     .height(200);
    // };
    reader.readAsDataURL(input.files[0]);
  }
}

$(document).ready(function() {
  $("#adopt-form").submit(function(event) {
    event.preventDefault();
    var type = $("#pet-type").val();
    var name = $("#pet-name").val();
    var age = $("#age").val();
    // var pic = $("#file").val();
    var pic = $("#pic").val();
    var newAnimal = new Animal(type, name, age);

    $("#available").append("<li class='unadopted entry'>" + newAnimal.name + "<ul class='details'><li>" + newAnimal.type + "</li><li>" + newAnimal.age + " years old</li><li><img src='" + pic + "' alt='doggy'></li></ul></li>");

    $(".details").hide();

    $(".entry").last().click(function() {
      $(this).find("ul").toggle();
    });


  });
});
