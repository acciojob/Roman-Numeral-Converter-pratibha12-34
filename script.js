function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  let input=num;
   let length=length(input);
for (i=0; i<length; i++){
	if(length==1 && input[i]==1){
		input[i]= obj[6][0];
		console.log("hello");
	}
	else{
		console.log("invalid");
	}
		
	}
}

on and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
