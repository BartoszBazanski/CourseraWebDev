var main = function(){
	var navigation = document.getElementById("navigation");

	// Adding hover event on navigation element.

	navigation.addEventListener("mouseover", function(event){
		this.classList.remove("from-cross");
		this.classList.add("to-cross");
	})
	navigation.addEventListener("mouseout", function(event){
		this.classList.remove("to-cross");
		this.classList.add("from-cross");
	})
}
document.addEventListener("DOMContentLoaded", main);