(function (window) {
	var sayhello={};
	var greetingword="Hello";
	
sayhello.speak = function (name) {
  console.log(greetingword + " " + name);
}
  window.sayhello= sayhello;

})(window);
