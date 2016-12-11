$(document).ready(function() {
  var field = [
    $("#1one"), $("#1two"), $("#1three"), $("#1four"), $("#1five"), $("#1six"), $("#1seven"), $("#1eight"), $("#1nine"), $("#1ten"), $("#1eleven"),
    $("#2one"), $("#2two"), $("#2three"), $("#2four"), $("#2five"), $("#2six"), $("#2seven"), $("#2eight"), $("#2nine"), $("#2ten"), $("#2eleven"),
    $("#3one"), $("#3two"), $("#3three"), $("#3four"), $("#3five"), $("#3six"), $("#3seven"), $("#3eight"), $("#3nine"), $("#3ten"), $("#3eleven"),
    $("#4one"), $("#4two"), $("#4three"), $("#4four"), $("#4five"), $("#4six"), $("#4seven"), $("#4eight"), $("#4nine"), $("#4ten"), $("#4eleven"),
    $("#5one"), $("#5two"), $("#5three"), $("#5four"), $("#5five"), $("#5six"), $("#5seven"), $("#5eight"), $("#5nine"), $("#5ten"), $("#5eleven"),
    $("#6one"), $("#6two"), $("#6three"), $("#6four"), $("#6five"), $("#6six"), $("#6seven"), $("#6eight"), $("#6nine"), $("#6ten"), $("#6eleven"),
    $("#7one"), $("#7two"), $("#7three"), $("#7four"), $("#7five"), $("#7six"), $("#7seven"), $("#7eight"), $("#7nine"), $("#7ten"), $("#7eleven"),
    $("#8one"), $("#8two"), $("#8three"), $("#8four"), $("#8five"), $("#8six"), $("#8seven"), $("#8eight"), $("#8nine"), $("#8ten"), $("#8eleven"),
    $("#9one"), $("#9two"), $("#9three"), $("#9four"), $("#9five"), $("#9six"), $("#9seven"), $("#9eight"), $("#9nine"), $("#9ten"), $("#9eleven"),
    $("#10one"), $("#10two"), $("#10three"), $("#10four"), $("#10five"), $("#10six"), $("#10seven"), $("#10eight"), $("#10nine"), $("#10ten"), $("#10eleven")
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
  $("#start").on("click", function() {
    $("#start_line").addClass("hero");

  });

  $(document).keydown(function(key_pressed){

    if (key_pressed.keyCode == 37) {
      
      // $("#goLeft").css("background-color","green" )
      // alert( "left pressed" );
      return false;
    }
  });

  $(document).keydown(function(key_pressed){
    if (key_pressed.keyCode == 38) {
       alert( "up pressed" );
       return false;
    }
  });

  $(document).keydown(function(key_pressed){
    if (key_pressed.keyCode == 39) {
       alert( "right pressed" );
       return false;
    }
  });

  $(document).keydown(function(key_pressed){
    if (key_pressed.keyCode == 40) {
       alert( "down pressed" );
       return false;
    }
  });
});
