let createBtn  = document.getElementById("btn");;
let date = new Date();
	

createBtn.onclick = (e) => {
	let fragment = document.createDocumentFragment();
 	let input = ( (document.getElementById("inputVal") || {} ).value) || "";
	let listItem = document.createElement("li");
	let checkBox = document.createElement("input");
	let lineBreak = document.createElement("br");
	let todoDate = document.createElement("span");
	let todoText = document.createElement("div");
	let symbol = document.createElement("p");


	listItem.setAttribute("class", "lists");
	checkBox.type = "checkbox";
	symbol.className = "symb";
	checkBox.className = "checkBox";
	todoDate.className = "todoDate";
	todoText.className = "todoText";


	symbol.appendChild(fragment.appendChild(document.createTextNode('0') ));
	listItem.appendChild( symbol );
	todoDate.appendChild( fragment.appendChild(document.createTextNode(date) ));
	todoText.appendChild(fragment.appendChild(document.createTextNode(input) ));
	listItem.appendChild(todoText);
	listItem.appendChild(checkBox);
	listItem.appendChild(lineBreak);
	listItem.appendChild( todoDate );


	//Click on checkbox
	checkBox.onclick = (e) =>{
		if(checkBox.checked){
			todoText.style.textDecoration ="line-through";
		}
		else{
			todoText.style.textDecoration ="none";
		}
	}
	//
	if(input !== ""){
		let lists = document.getElementById("uList");
		lists.appendChild(listItem);
		(document.getElementById("inputVal") || {} ).value = "";
	}
	else{
		alert("You have not inputed any value");
	}
	// input.setAttribute("type", "text")
	console.log(input);
}
