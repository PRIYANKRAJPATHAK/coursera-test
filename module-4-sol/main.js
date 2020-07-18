(function (window) {

var names = ["PRIYANK", "JOY", "JENNY", "YAAKOV", "Paul", "KATTY", "MARK", "SHERLIEY", "JIGYASA", "FAITH"];


for (var i = 0; i < names.length; i++) {

  
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter == 'j') {
    window.saygoodbye.speak(names[i]);
  } else {
    window.sayhello.speak(names[i]);
  }
}

})(window);