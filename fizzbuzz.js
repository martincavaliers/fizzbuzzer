const input = document.getElementById('countInput');
const submit = document.getElementById('submitBtn');


submit.addEventListener("click", (e) => {

	e.preventDefault();

	const count = input.value;

	for (let i = 1; i <= count; i++){
	if(i%3 === 0 && i%5 === 0){
		console.log("FIZZBUZZ!!!")
	}else if(i%3 === 0){
		console.log("Fizz")
	}else if(i%5 === 0){
		console.log("Buzz")
	}else{
		console.log(i)
	}
}
});

