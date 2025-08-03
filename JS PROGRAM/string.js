let str1 ="welcome tamil nadu"
let str2 ="  us is the worst country       ever"
console.log(str1+str2);
console.log(str1.concat(str2)); // concat use for to connect the two string
 console.log(str2.slice(1,3)); // slice use for find the character it's consiter even space to as a character
 console.log(str2.slice(-13)); //count the last ten character's
 console.log(str2.substring(4,10)); //it's also work like a slice
 console.log(str2.substr(4,10)); //substr use for to print the character start until end(4 th chatacter until the 10th character 0
 console.log(str1.replace("welcome tamil nadu","destroyed usa"));
 console.log(str1);
 console.log(str1.toUpperCase); // str fully to convert to the capital letter
 console.log(str1.toLowerCase); // to convert capital to small
 console.log(str1.length); // use for define the total character in the variable
 console.log(str2.trim); // remove the extra space
 console.log(str2.trimStart); //only removed the stating the extra spect in starting
 console.log(str2.trimEnd); //only removed the stating the extra spect in end

 let bill='rs.10'
 console.log(bill.length);
 console.log(bill.padEnd(7,'3')); //padend means to add the "3" until the variabl get 7 character
 console.log(bill.padStart(10,'0'));  //padstart means to add the "0" until the variabl get 7 character
 console.log(bill.charAt(3)); //give the thirt character
 console.log(str1.charCodeAt(1)); //it was how the character stored in the storage(unique code value)
 console.log(str1.indexOf('d')); //it is define character position from starting point
 console.log(str1.lastIndexOf('l')); // it is define character position from last point
 console.log(str1.search('tamil')); //define the statrting point of the word
 console.log(str1.includes('tamil')); // just give a true or false
 console.log(str1.startsWith('w')); // if our value is correct it's give true

 let a= "sanjay"
 let b= (Math.floor(Math.random())*a.length);
 let c=a.charAt(b);
 console.log(c);

 
 




 
