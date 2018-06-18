const input = document.getElementById('countInput');
const submit = document.getElementById('submitBtn');

let valueArray = new Array();


submit.addEventListener("click", (e) => {

	e.preventDefault();

	const count = input.value;

	for (let i = 1; i <= count; i++){
	if(i%3 === 0 && i%5 === 0){
		valueArray.push("FIZZBUZZ!!!");
		console.log("FIZZBUZZ!!!")
	}else if(i%3 === 0){
		valueArray.push("Fizz");
		console.log("Fizz")
	}else if(i%5 === 0){
		valueArray.push("Buzz");
		console.log("Buzz")
	}else{
		valueArray.push(i);
		console.log(i)
	}
}

	for (let i = 0; i < valueArray.length; i++){
		var node = document.createElement("LI");
		var textnode = document.createTextNode(valueArray[i]);
		node.appendChild(textnode);
		document.getElementById('arrayList').appendChild(node);	
	}
	
});

