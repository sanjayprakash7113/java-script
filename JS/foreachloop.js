let fruits=["apple","jackfruit","chikku"];
fruits.forEach(function(fruits,index){  
    console.log(index+":"+fruits);

});
let number=[1,2,3];
number.forEach(num=>{
    console.log(num*2);
});

let n=[1,2,3];
let double=n.map((num)=>num*2);
console.log(doubled);

//converting map() to foreach()
let num=[1,2,3];
let doub=[]; //empty array
num.foreach((n)=>{
    doub.push(n*2) //n will be multiplied and pushed into doubled
});
console.log(doub);

