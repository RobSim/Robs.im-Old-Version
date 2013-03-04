(function() {
  $(function() {
    var swapColour, colours, currentColour, smoothTransition, nextColour, setRotatingColour, switchColourTimer;
    smoothTransition = true;
    currentColour = 0;
    colours = ["1", "2", "3", "4", "5", "6"];
    /*=========Set The Next Colour to Rotate==========*/
    nextColour = function() {
      if (currentColour === colours.length - 1) {
        currentColour = 0;
      } else {
        currentColour++;
      }
      return "background-" + colours[currentColour];
    };
    setRotatingColour = function(className) {
      var colorName, _i, _len;
      for (_i = 0, _len = colours.length; _i < _len; _i++) {
        colorName = colours[_i];
        $("html").removeClass("background-" + colorName);
      }
      return $("html").addClass(className);
    };
    swapColour = function(colourClass, fast, natural) {
      if (fast === null) {
        fast = false;
      }
      if (natural === null) {
        natural = false;
      }
      if (natural && !smoothTransition) {
        return true;
      }
      $("html").addClass("slowly");
      return setRotatingColour(colourClass);
    };
    setRotatingColour(nextColour());

/*==========How long per colour in milliseconds==========*/

    switchColourTimer = function() {
      var t;
      t = window.setTimeout(switchColourTimer, 10000);
      return swapColour(nextColour(), false, true);
    };
    switchColourTimer();
  });
}).call(this);