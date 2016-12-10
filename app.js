$(document).ready(function() {
  //all jQuery must be in here
  //On start button click, make the "player" appear as green div
  $("#start").on("click", function() {
    $("#start_line").css("background-color", "green");
  });

  $(document).keydown(function(key_pressed){
    if (key_pressed.keyCode == 37) {
      $("#goLeft").css("background-color","green" )
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

var field = [
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")],
  [$("#one"), $("#two"), $("#three"), $("#four"), $("#five"), $("#six"), $("#seven"), $("#eight"), $("#nine"), $("#ten")]
];
console.log(field);
