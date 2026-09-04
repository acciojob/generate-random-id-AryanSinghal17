function makeid(l) {
  // write your code here
	let res = "";
	let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	str += str.toLowerCase();
	str+ = "123456789";

	for(int i = 0;i<l;i++){
		let idx = Math.floor(Math.random() * str.length);
		res += str[idx];
	}

	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
