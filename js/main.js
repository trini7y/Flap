import Highway from '@dogstudio/highway';
import Fade from './transition';


const H = new Highway.Core({
	transitions:{
		default:Fade
	}
});

history.replaceState({}, 'Home', 'EnterName');
function clicked(){
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var tdText = document.createTextNode(inputValue);
	li.appendChild(tdText);
	if(inputValue === ""){
		alert("Please type something")
	}
	else{
		document.createElement("p").value="\u9742";
		document.getElementById("uList").appendChild(li);
		li.style.border = "0.2px solid #0A0503";

	}
	document.getElementById("myInput").value = "";

}