const app = {
	pages:[],
	show:new Event('show'),
	init:function(){
	 	app.pages = document.querySelectorAll(".page");
		app.pages.forEach((pg)=>{
			pg.addEventListener('show', app.pageShown);
		})
		navigation = document.querySelectorAll('.nav-link');
		 navigation.forEach((link)=>{
		 	 link.addEventListener('click', app.nav);
		})
		history.replaceState({}, 'Home', 'enter-name');
		window.addEventListener('popstate', app.poppin);
	},
	nav:function(ev){
		ev.preventDefault();
	},
	pageShown:function(ev){

	},
	poppin: function(){
		console.log(location.hash, 'popstate event');
	} 
}

document.addEventListener('DOMContentLoaded', app.init);


// function clicked(){
// 	var li = document.createElement("li");
// 	var inputValue = document.getElementById("myInput").value;
// 	var tdText = document.createTextNode(inputValue);
// 	li.appendChild(tdText);
// 	if(inputValue === ""){
// 		alert("Please type something")
// 	}
// 	else{
// 		document.createElement("p").value="\u9742";
// 		document.getElementById("uList").appendChild(li);
// 		li.style.border = "0.2px solid #0A0503";

// 	}
// 	document.getElementById("myInput").value = "";

// }