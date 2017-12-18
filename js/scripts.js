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

$(document).ready(function() {
  $("#adopt-form").submit(function(event) {
    event.preventDefault();
    var type = $("#pet-type").val();
    var name = $("#pet-name").val();
    var age = $("#age").val();
    var newAnimal = new Animal(type, name, age);

    $("#available").append("<li class='unadopted entry'>" + newAnimal.name + "<ul class='details'><li>" + newAnimal.type + "</li><li>" + newAnimal.age + " years old</li></ul></li>");

    // $("#available").append("<li class='unadopted entry'> <p>hi</p><p>Hey</p></li>");

    $(".details").hide();
    // $(".hide").hide();

    $(".entry").last().click(function() {
      // alert(this.next);
      // $(this.child.next).show();
      $(this).find("ul").toggle();
    })

  });
});
