$(document).ready(function() {

  var coordinates = [10,6];


  var field = [
    $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17"), $("#18"), $("#19"), $("#110"), $("#111"),
    $("#21"), $("#22"), $("#23"), $("#24"), $("#25"), $("#26"), $("#27"), $("#28"), $("#29"), $("#210"), $("#211"),
    $("#31"), $("#32"), $("#33"), $("#34"), $("#35"), $("#36"), $("#37"), $("#38"), $("#39"), $("#310"), $("#311"),
    $("#41"), $("#42"), $("#43"), $("#44"), $("#45"), $("#46"), $("#47"), $("#48"), $("#49"), $("#410"), $("#411"),
    $("#51"), $("#52"), $("#53"), $("#54"), $("#55"), $("#56"), $("#57"), $("#58"), $("#59"), $("#510"), $("#511"),
    $("#61"), $("#62"), $("#63"), $("#64"), $("#65"), $("#66"), $("#67"), $("#68"), $("#69"), $("#610"), $("#611"),
    $("#71"), $("#72"), $("#73"), $("#74"), $("#75"), $("#76"), $("#77"), $("#78"), $("#79"), $("#710"), $("#711"),
    $("#81"), $("#82"), $("#83"), $("#84"), $("#85"), $("#86"), $("#87"), $("#88"), $("#89"), $("#810"), $("#811"),
    $("#91"), $("#92"), $("#93"), $("#94"), $("#95"), $("#96"), $("#97"), $("#98"), $("#99"), $("#910"), $("#911"),
    $("#101"), $("#102"), $("#103"), $("#104"), $("#105"), $("#106"), $("#107"), $("#108"), $("#109"), $("#1010"), $("#1011")
  ];

  for(var i = 0; i < field.length; i++) {
    var obstacle = Math.random();
    if(obstacle > .9) {
      field[i].addClass('enemy');
    } else {
      field[i].addClass('move');
    }
  }
  //all jQuery must be in here
  //On start button click, make the "player" appear as green div
  $("#start").one("click", function() {
    $("#106").addClass("hero");
  });

  $(document).keydown(function(key_pressed){
//left
    if (key_pressed.keyCode == 37) {
      $(".hero").removeClass("hero");
      coordinates[1] -= 1;
      var position = coordinates.join('');
      if($("#" + position).hasClass("enemy")) {
        alert("You have been Tackled... Loser");
      }
      if($("#" + position).hasClass("zone")) {
        alert("You WIN... Yay!");
      }
      console.log(position);
      $("#" + position).addClass("hero");
      return false;
    }
  });
//up
  $(document).keydown(function(key_pressed){
    if (key_pressed.keyCode == 38) {
      $(".hero").removeClass("hero");
      coordinates[0] -= 1;
      var position = coordinates.join('');
      if($("#" + position).hasClass("enemy")) {
        alert("You have been Tackled... Loser");
      }
      if($("#" + position).hasClass("zone")) {
        alert("You WIN... Yay!");
      }
      console.log(position);
      $("#" + position).addClass("hero")
       return false;
    }
  });
//
  $(document).keydown(function(key_pressed){
    if (key_pressed.keyCode == 39) {
      $(".hero").removeClass("hero");
      coordinates[1] += 1;
      var position = coordinates.join('');
      if($("#" + position).hasClass("enemy")) {
        alert("You have been Tackled... Loser");
      }
      if($("#" + position).hasClass("zone")) {
        alert("You WIN... Yay!");
      }
      console.log(position);
      $("#" + position).addClass("hero")
       return false;
    }
  });

  $(document).keydown(function(key_pressed){
    if (key_pressed.keyCode == 40) {
      $(".hero").removeClass("hero");
      coordinates[0] += 1;
      var position = coordinates.join('');
      if($("#" + position).hasClass("enemy")) {
        alert("You have been Tackled... Loser");
      }
      if($("#" + position).hasClass("zone")) {
        alert("You WIN... Yay!");
      }
      console.log(position);
      $("#" + position).addClass("hero")
       return false;
    }
  });
});
