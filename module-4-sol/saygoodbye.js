(function (window) {
	var saygoodbye={};
	var velidictoryword="Goodbye";
	
saygoodbye.speak = function (name) {
  console.log( velidictoryword+ " " + name);
}
  window.saygoodbye= saygoodbye;

})(window);