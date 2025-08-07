// array
let a=["Ab","cd","ef"]
let b=[12,34,42,35,76]

console.log(b[1]); //accesin perticular element in array
console.log(a[-1]); // IT'S not working for to define last element 
console.log(b[b.length-1]); //acces last element in array
let c=["5","6","7","89","d","r",[3,5]] //its all are int and string
console.log(c[2]);
console.log(c[6][1]);
console.log(c[6][0]);
let d =["a","v"]
console.log(d.push("f")); // add any arr in the variable
console.log(d); // print the array with add 
console.log(d.pop()); //remove the last element 
console.log(d);
console.log(d.shift()); //remove the first element
console.log(d);
console.log(d.unshift('a')); // use the unshift to add element in first position
console.log(d);
let m=["a","d","r","g","k"]
console.log (m.slice(0,2)); // to delete 0-position element and 2  delete two element d and r
console.log(m);
console.log(m.slice(1,1,"f")); // replace the element 1,1 delete the first element position and replace the f in the perticular position
console.log(m);
console.log(m.slice(1,0,"l")); // replce the element without delete
console.log(m);
console.log(m.slice(1,2)); //slice start intex and end intex //end index not included
console.log(m.reverse()); // reverse the array
console.log();
let str=m.join()
console.log(str); // the array to convert the string
 let z="f,e,g,y"
 let arr5=(z.split(','));  // to convert the string to arry based on the (',')
 console.log(arr5);

 let o=("1","2","3")
 let y=("6","8","6")

 let t=(o.concat(y)); //use the concat method join the two arry in a single array
 
 console.log(t);

 let arr=["5","8","10","7","9","11"];
 console.log(arr.slice(3,3,"17"));
 console.log(arr);

 console.log(arr.unshift(100));
 console.log(arr);

 console.log(arr.push("200"));
 console.log(arr);

